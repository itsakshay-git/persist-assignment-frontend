import React, { useState } from 'react';
import { createStory } from '../utils/aiService';

const StoryCreation = () => {
  const [prompt, setPrompt] = useState('');
  const [story, setStory] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreateStory = async () => {
    setLoading(true);
    const generatedStory = await createStory(prompt);
    setStory(generatedStory || "Failed to generate story.");
    setLoading(false);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Create a Story</h2>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter a prompt, e.g., 'Create a story about my vacation'"
        className="block w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg mb-4"
      />
      <button
        onClick={handleCreateStory}
        className="px-4 py-2 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition mb-4"
      >
        Generate Story
      </button>
      {loading ? (
        <p className="text-gray-600">Generating your story...</p>
      ) : (
        <p className="text-gray-700 whitespace-pre-line">{story}</p>
      )}
    </div>
  );
};

export default StoryCreation;
