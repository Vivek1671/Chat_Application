// backend/app.js

// Import necessary modules
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const socketIo = require('socket.io');
const cors = require('cors');
const dotenv = require('dotenv');
const Message = require('./models/Message');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Socket.IO Connection
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('chat message', async (message) => {
    try {
      const { text, user } = message;
      const newMessage = new Message({ text, user });
      await newMessage.save();
      io.emit('chat message', newMessage); // Broadcast message to all clients
    } catch (error) {
      console.error('Error saving message:', error);
    }
  });

  // Emit online users
  const onlineUsers = Object.keys(io.sockets.sockets).map(socketId => {
    return io.sockets.sockets[socketId].username;
  });
  io.emit('users', onlineUsers);

});

// Routes
app.use('/api/messages', require('./routes/messages'));

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
