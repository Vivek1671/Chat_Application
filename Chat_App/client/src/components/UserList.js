import React from 'react';

const UserList = ({ users }) => {
  // Function to get the current date and time in a formatted string
  const getCurrentDateTime = () => {
    const currentDate = new Date();
    return currentDate.toLocaleString();
  };

  return (
    <div className="user-list">
      <h3>Conversations:</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>Username:</strong> <span>{user.username}</span><br />
            <strong>Message:</strong> <span>{user.messageInput}</span>
            <p>{getCurrentDateTime()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
