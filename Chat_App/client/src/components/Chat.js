// frontend/src/components/Chat.js
import React, { useState, useEffect } from 'react';
import socket from '../socket';
import Message from './Message';
import UserList from './UserList';
import api from '../services/api';  // Import your API service

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);  // State to hold the list of users

  useEffect(() => {
    // Listen for incoming messages from socket
    socket.on('chat message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up socket listener
    return () => {
      socket.off('chat message');
    };
  }, []);

  const sendMessage = async () => {
    if (messageInput.trim() !== '' && username.trim() !== '') {
      const message = {
        text: messageInput,
        user: username,
      };
      alert("Message Sent Successfully");
      // Emit message via socket to all clients
      socket.emit('chat message', message);

      // Send message to backend API to store in database
      try {
        const response = await api.postMessage(message);  // Assuming this function posts the message
        console.log('Message sent and stored:', response);
      } catch (error) {
        console.error('Error sending message:', error);
      }

      // Clear message input
      setMessageInput('');

      // Add username to the user list if it's not already there
      setUsers((prevUsers) => {
        // Check if the username already exists in the list
        const userExists = prevUsers.some((user) => user.username === username);
      
        // If the username does not exist, add the new user
        if (!userExists) {
          return [...prevUsers, { username, messageInput }];
        }
      
        // If the username already exists, return the previous state
        return prevUsers;
      });
      
    }
  };

  return (
    <div className="chat-container">
      <div className="user-list-container">
        <UserList users={users} />  
      </div>
      <div className="chat-content">
        <div className="message-container">
          {messages.map((msg, index) => (
            <Message key={index} message={msg} />
          ))}
        </div>
        <div className="input-container">
         
          <input
            type="text"
            placeholder="Your username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
           <input
            type="text"
            placeholder="Your message..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
