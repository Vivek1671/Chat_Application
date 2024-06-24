// frontend/src/services/api.js
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const api = {
  postMessage: async (message) => {
    try {
      const response = await fetch(`${API_URL}/api/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default api;
