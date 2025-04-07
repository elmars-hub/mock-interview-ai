# CareerCraft - Interview Platform Documentation

## Overview

CareerCraft is a modern web application designed to help users prepare for interviews through AI-powered practice sessions. The platform provides a comprehensive environment for interview preparation, featuring real-time AI interactions, voice capabilities, and a user-friendly interface.

## Technology Stack

### Frontend

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **UI Components**:
  - Radix UI components
  - Tailwind CSS for styling
  - Lucide React for icons
- **State Management**: React Hooks
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Tailwind CSS Animate

### Backend

- **Runtime**: Node.js
- **Database**: Firebase
- **Authentication**: Firebase Authentication
- **AI Integration**:
  - Google AI SDK
  - Vapi AI Web
  - AI SDK

### Development Tools

- ESLint for code linting
- TypeScript for type safety
- PostCSS for CSS processing
- Turbopack for development server

## Project Structure

```
careercraft/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication routes
│   ├── (root)/            # Main application routes
│   ├── api/               # API routes
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
├── lib/                   # Utility functions and shared logic
├── firebase/             # Firebase configuration
├── public/               # Static assets
├── constants/            # Application constants
└── types/                # TypeScript type definitions
```

## Features

### 1. Authentication

- User registration and login
- Secure session management
- Protected routes

### 2. Interview Practice

- AI-powered interview simulations
- Real-time voice interactions
- Customizable interview scenarios
- Progress tracking

### 3. User Interface

- Modern, responsive design
- Dark/light theme support
- Toast notifications
- Loading states and animations

### 4. AI Integration

- Natural language processing
- Voice recognition
- Contextual responses
- Interview feedback

## Getting Started

### Prerequisites

- Node.js (Latest LTS version)
- npm or yarn
- Firebase account and project
- Google AI API credentials

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd careercraft
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:
   Create a `.env.local` file with the following variables:

```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
GOOGLE_AI_API_KEY=
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

### Available Scripts

- `npm run dev`: Start development server with Turbopack
- `npm run build`: Build the application for production
- `npm run start`: Start the production server
- `npm run lint`: Run ESLint for code linting

## Usage Guide

### 1. Authentication

1. Navigate to the login/register page
2. Create an account or sign in with existing credentials
3. Access protected features after authentication

### 2. Interview Practice

1. Select an interview type or scenario
2. Start the practice session
3. Interact with the AI interviewer using voice or text
4. Receive feedback and suggestions for improvement

### 3. Profile Management

1. Access your profile settings
2. Update personal information
3. View practice history and progress

## Best Practices

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Implement proper error handling
- Write clean, maintainable code

### Performance

- Optimize images and assets
- Implement proper caching strategies
- Use lazy loading for components
- Monitor and optimize bundle size

### Security

- Implement proper authentication
- Secure API endpoints
- Validate user input
- Follow security best practices

## Troubleshooting

### Common Issues

1. **Authentication Errors**

   - Check Firebase configuration
   - Verify environment variables
   - Clear browser cache and cookies

2. **AI Integration Issues**

   - Verify API keys
   - Check network connectivity
   - Monitor API rate limits

3. **Performance Issues**
   - Clear browser cache
   - Check network connection
   - Monitor resource usage

## Support

For technical support or questions, please contact the development team or refer to the project documentation.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is proprietary and confidential. All rights reserved.
