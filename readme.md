# Marketplace Support Chatbot

This project implements a support chatbot using a Node.js backend with Socket.IO and Dialogflow for natural language processing (NLP), and a React frontend built with Vite for the chat interface. The chatbot can handle user queries and FAQs in real-time, providing personalized responses.

## Table of Contents

### Design Specifications

- Technical Architecture
- Implementation Details
- Deployment Instructions
- Design Specifications
  The chatbot is designed to provide support in a marketplace environment by responding to user queries and FAQs. The application has two main components:

#### 1. Frontend (React with Vite)

- Implements a simple chat UI using React components.
- Uses Socket.IO to facilitate real-time communication with the backend.

#### 2. Backend (Node.js with Express)

- Uses Socket.IO for real-time, bidirectional communication between the client and the server.
- Integrates with Google Dialogflow to handle various intents and provide context-aware responses.
- Manages multiple user sessions independently using socket.id.

## Technical Architecture

### 1. Frontend

React with Vite: The frontend is built using React, and Vite is used for fast development and building of the project.
Socket.IO Client: Establishes a WebSocket connection to the backend to enable real-time messaging.
Session Management: Uses React Context API to manage user session data across components.
UI Components:
Chat Interface: Displays a scrollable list of chat messages (both user and bot messages).
Input Form: Allows the user to type and send messages.

### 2. Backend

Node.js and Express: The backend is built with Express to handle HTTP requests and Socket.IO connections.
Socket.IO: Manages real-time communication with multiple clients, isolating each session with socket.id.
Dialogflow Integration: Uses Dialogflow's SDK to process user messages and identify intents.
CORS Configuration: Allows cross-origin communication between the frontend (localhost:5173) and backend (localhost:4000).
Environment: Uses environment variables to manage sensitive data like API keys.

### 3. Data Flow

The user sends a message through the chat interface.
The frontend sends the message to the backend using Socket.IO.
The backend forwards the message to Dialogflow to detect the intent and receive a response.
The backend sends the Dialogflow response back to the frontend.
The frontend displays the response in the chat UI.

## Implementation Details

### 1. Frontend

- Clone the repository and navigate to the frontend directory.
- Install dependencies using: npm install
- Update Chat.jsx to ensure the correct backend URL for Socket.IO:
- Chat.jsx: Main chat component that handles user input, message rendering, and communication with the backend via Socket.IO.

### 2. Backend

Clone the repository and navigate to the backend directory.
Install dependencies using:
bash
Copy code
npm install
Place the Dialogflow service account JSON file (e.g., dialogflow-service-account.json) in the backend directory.
Update the backend code to use the correct Dialogflow project ID and path to the service account JSON file:
Server Implementation:
Socket.IO: Listens for user messages and communicates with Dialogflow to generate responses.
Dialogflow Integration: Processes messages using Dialogflow's NLP capabilities to understand user intent.
Session Management: Uses socket.id to track and manage individual user sessions.

## Deployment Instructions

### 1. Frontend

Development:

Start the development server:
npm run dev
Access the application at http://localhost:5173.

Environment Configuration:

Ensure the frontend points to the correct backend URL (e.g., production URL instead of http://localhost:4000).

### 2. Backend

Environment Variables:

Create an .env file to store environment variables such as:
PROJECT_ID=your-dialogflow-project-id

Development:

Start the backend server:
npm run dev
Ensure that the server is running on http://localhost:4000.

### 3. Dialogflow Setup

Ensure your Dialogflow agent is published and accessible via the Dialogflow API.
Verify that the service account JSON file is valid and that the API key has the correct permissions.
Additional Notes
Cross-Origin Requests: Ensure the backend CORS settings (origin) are correctly set to allow communication between the frontend and backend.
Error Handling: Implement error handling on both frontend and backend to gracefully handle connectivity issues and Dialogflow errors.
Security: For production deployment, ensure sensitive data (API keys, session IDs) are securely managed using environment variables and appropriate access controls.
