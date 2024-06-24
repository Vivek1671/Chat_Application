// backend/routes/messages.js
const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

// POST /api/messages - Create a new message
router.post('/', messageController.postMessage);

// GET /api/messages - Get all messages
router.get('/', messageController.getAllMessages);

module.exports = router;
