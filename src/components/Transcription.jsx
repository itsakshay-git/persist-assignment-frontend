import React, { useState } from 'react';
import { transcribeVideo } from '../utils/aiService';

const Transcription = ({ videoFile }) => {
  const [transcription, setTranscription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTranscription = async () => {
    setLoading(true);
    const text = await transcribeVideo(videoFile);
    setTranscription(text || "Failed to transcribe video.");
    setLoading(false);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md mt-4">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Transcription</h2>
      <button
        onClick={handleTranscription}
        className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition mb-4"
      >
        Transcribe Video
      </button>
      {loading ? (
        <p className="text-gray-600">Transcribing your video...</p>
      ) : (
        <p className="text-gray-700 whitespace-pre-line">{transcription}</p>
      )}
    </div>
  );
};

export default Transcription;
