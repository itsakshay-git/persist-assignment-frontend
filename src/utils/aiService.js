import axios from 'axios';

export const transcribeVideo = async (file) => {
  try {
    const formData = new FormData();
    formData.append("video", file);

    const response = await axios.post("https://persist-assignment-backend.onrender.com/api/transcribe-video", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data.text;
  } catch (error) {
    console.error("Error transcribing audio:", error.response?.data || error.message);
    return null;
  }
};

// Generate story using OpenAI GPT API
export const createStory = async (prompt) => {
let data = {prompt}
    console.log(typeof prompt);
    try {
        const response = await axios({
            method: 'post',
            url: "https://persist-assignment-backend.onrender.com/api/generate-story",
            headers: {
              'Content-Type': 'application/json',
            },
            data: data
          });

          console.log(response)
  
      return response.data.story;
    } catch (error) {
      console.error("Error generating story:", error.response?.data || error.message);
      return null;
    }
  };
