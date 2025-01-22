// auth.js - User Authentication Module

// Mock database of users (replace with real database in production)
const users = [
    { username: 'user1', password: 'password123' },
    { username: 'user2', password: 'securepass' },
  ];
  
  // Variable to hold the current logged-in user
  let currentUser = null;
  
  /**
   * Logs in a user by verifying the username and password.
   * @param {string} username - The username of the user.
   * @param {string} password - The password of the user.
   * @returns {string} - Success or error message.
   */
  function login(username, password) {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
  
    if (user) {
      currentUser = user;
      return `Login successful! Welcome, ${username}.`;
    } else {
      return 'Invalid username or password. Please try again.';
    }
  }
  
  /**
   * Logs out the current user.
   * @returns {string} - Success message.
   */
  function logout() {
    if (currentUser) {
      const username = currentUser.username;
      currentUser = null;
      return `${username} has been logged out successfully.`;
    } else {
      return 'No user is currently logged in.';
    }
  }
  
  
    @returns {object|null} - The current user or null if no user is logged in.

  function getCurrentUser() {
    return currentUser;
  }
  
  module.exports = { login, logout, getCurrentUser };
  