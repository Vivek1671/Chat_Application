// frontend/src/socket.js
import socketIOClient from 'socket.io-client';

const ENDPOINT = process.env.REACT_APP_API_URL || 'http://localhost:5000';
const socket = socketIOClient(ENDPOINT);

export default socket;
