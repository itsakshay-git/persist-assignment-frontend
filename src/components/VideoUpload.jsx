import React, { useState } from 'react';
import Transcription from './Transcription';

const VideoUpload = ({ onUpload }) => {
  const [video, setVideo] = useState(null);
  const [videoFile, setVideoFile] = useState(null);

  const handleFileChange = (e) => {
    setVideo(e.target.files[0]);
  };
  
  const handleUpload = () => {
    if (video) {
      setVideoFile(video);
    }
  };

  return (
      <div className="p-6 bg-gray-800 bg-opacity-70 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-white mb-4">Upload Your Video</h2>
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-slate-300 border border-gray-300 rounded-lg mb-4 p-1"
        />
        <button
          onClick={handleUpload}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
        >
          Upload Video
        </button>

        {videoFile && <Transcription videoFile={videoFile} />}
      </div>
  );
};

export default VideoUpload;
