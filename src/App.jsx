import React, { useState } from 'react';
import VideoUpload from './components/VideoUpload';
import Transcription from './components/Transcription';
import StoryCreation from './components/StoryCreation';

function App() {
  return (
    <div className="min-h-screen bg-black bg-gradient-to-r from-slate-950 to-slate-800 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-500 mb-8">AI Video Storytelling Tool</h1>
      <div className="w-full max-w-3xl space-y-6">
        <VideoUpload />
        <StoryCreation />
      </div>
    </div>
  );
}

export default App;
