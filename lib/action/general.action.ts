"use server";

import { db } from "@/firebase/admin";

export async function getInterviewsByUserId(
  userId: string
): Promise<Interview[] | null> {
  const interviews = await db
    .collection("interviews")
    .where("userId", "==", userId)
    .orderBy("createdAt", "desc")
    .get();

  return interviews.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Interview[];
}

export async function getLatestInterviews(
  params: GetLatestInterviewsParams
): Promise<Interview[] | null> {
  const { userId, limit = 20 } = params;

  try {
    // First get all finalized interviews
    const interviews = await db
      .collection("interviews")
      .where("finalized", "==", true)
      .orderBy("createdAt", "desc")
      .limit(limit * 2) // Get more than we need to filter out user's interviews
      .get();

    // Filter out user's interviews and limit to requested size
    const filteredInterviews = interviews.docs
      .filter((doc) => doc.data().userId !== userId)
      .slice(0, limit)
      .map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Interview[];

    return filteredInterviews;
  } catch (error) {
    console.error("Error fetching latest interviews:", error);
    return null;
  }
}

export async function getInterviewsById(
  id: string
): Promise<Interview[] | null> {
  const interview = await db.collection("interviews").doc(id).get();

  return interview.data() as Interview | null;
}
