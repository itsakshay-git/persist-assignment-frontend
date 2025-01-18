# Project Documentation

This documentation provides an overview of setting up and running the React client and Node.js server for the AI Video Storytelling Tool project.

# Deployed Link

---

## Table of Contents

1. [React Client Setup](#react-client-setup)
   - Prerequisites
   - Installation
   - Running the Client
2. [Node.js Server Setup](#nodejs-server-setup)
   - Prerequisites
   - Installation
   - Running the Server
3. [Folder Structure](#folder-structure)
4. [API Endpoints](#api-endpoints)

---

## React Client Setup

### Prerequisites

- Node.js (version 14.x or higher)
- npm or yarn package manager

### Installation

1. Navigate to the React client folder:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Client

1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn run dev
   ```
2. Open the application in your browser at [http://localhost:3000](http://localhost:3000).

---

## Node.js Server Setup

### Prerequisites

- Node.js (version 14.x or higher)
- Firebase account for database integration

### Installation

1. Navigate to the server folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Server

1. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

### Environment Variables

Create a `.env` file in the root of the server folder and add the following variables:

```env
PORT=5000
REVA_AI=your-api-key
GEMINI_API=your-api-key
```

### Running the Server

1. Start the server:
   ```bash
   npm start
   ```
2. The server will run on [http://localhost:5000](http://localhost:5000).

---

## Folder Structure

### React Client

```
client/
├── src/
│   ├── components/
│   │   ├── VideoUpload.js
│   │   ├── Transcription.js
│   │   └── StoryCreation.js
│   ├── utils/
│   │   └── aiService.js
│   └── App.js
├── public/
│   └── index.html
└── package.json
```

### Node.js Server

```
server/
├── uploads/
│   └── files
├── firebase-config.json
├── server.js
└── package.json
```

---

## API Endpoints

### POST /api/generate-story

- **Description**: Generates a story based on the provided prompt and video transcript.
- **Request Body**:
  ```json
  {
    "prompt": "A brief description of the desired story."
  }
  ```
- **Response**:
  ```json
  {
    "story": "Generated story text."
  }
  ```

### Example Usage

#### React Client:

The client communicates with the server using `fetch` or `axios` to call `/api/generate-story` with the provided video transcription.

#### Server:

The server processes the transcription and generates a story using AI, then responds to the client with the story output.
