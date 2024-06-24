// backend/controllers/messageController.js
const Message = require('../models/Message');

const postMessage = async (req, res) => {
  const { text, user } = req.body;

  try {
    const newMessage = new Message({ text, user });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ error: 'Failed to store message' });
  }
};

const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: 'asc' });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  postMessage,
  getAllMessages,
};
