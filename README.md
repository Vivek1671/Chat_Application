# Real-Time Chat Application

This repository contains a MERN stack application with a real-time chat feature implemented using WebSocket (Socket.IO). Users can join chat rooms, send messages, view chat history, and see who else is currently online in the chat room.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Backend](#backend)
  - [Endpoints](#endpoints)
  - [Database](#database)
- [Frontend](#frontend)
  - [Components](#components)
  - [Functionality](#functionality)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Real-time chat updates using WebSocket (Socket.IO).
- Join chat rooms with unique identifiers.
- Send messages to chat rooms.
- View chat history for each room.
- Display list of users currently in the chat room.

## Technologies Used

- **Backend**: Node.js, Express.js, Socket.IO, MongoDB
- **Frontend**: React, Socket.IO client
- **Database**: MongoDB with Mongoose

## Setup Instructions

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running locally or accessible via a URL

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   # Navigate to backend folder
   cd backend
   npm install

   # Navigate to frontend folder
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Backend**:
   - Start the backend server (runs on port 5000 by default):
     ```bash
     cd backend
     npm start
     ```

2. **Frontend**:
   - Start the frontend development server (runs on port 3000 by default):
     ```bash
     cd frontend
     npm start
     ```

3. Open your web browser and go to `http://localhost:3000` to view the application.

## Backend

The backend is built with Node.js and Express.js, using Socket.IO for real-time communication and MongoDB for storing chat messages.

### Endpoints

- **POST `/chat/join`**: Endpoint for joining a chat room.
- **POST `/chat/send`**: Endpoint for sending a message to a chat room.
- **GET `/chat/history/:roomId`**: Endpoint to retrieve chat history for a specific room.

### Database

- **Schema**: Message schema with fields:
  - `roomId`: String, ID of the chat room.
  - `userId`: String, ID of the user who sent the message.
  - `username`: String, username of the user.
  - `message`: String, content of the message.
  - `timestamp`: Date, when the message was sent.
- **Indexing**: Ensure appropriate indexing for `roomId` and `timestamp` for efficient querying.

## Frontend

The frontend is developed with React, utilizing Socket.IO client for real-time updates.

### Components

- **ChatRoom**: Main component displaying the chat interface for a specific room.
- **MessageList**: Displays a list of messages in the chat room.
- **MessageInput**: Input field for sending new messages.
- **UserList**: Displays a list of users currently in the chat room.

### Functionality

- Real-time updating of chat messages.
- Display of current users in the chat room.
- Fetch and display chat history upon joining a room.
- Handle events for user joining and leaving the chat room.

## Folder Structure

- **backend/**: Node.js backend server files.
- **frontend/**: React frontend files.
- **docs/**: Documentation files (if any).

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any new features or fixes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Adjust the sections and details as per your specific implementation. Make sure to include any additional setup instructions, dependencies, or configurations that are specific to your project. A well-written README file helps others understand your project quickly and effectively.
