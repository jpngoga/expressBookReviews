
const express = require('express');
const jwt = require('jsonwebtoken');
const books = require('./booksdb.js');

const regd_users = express.Router();
const users = [];

const JWT_SECRET = 'replace-this-with-a-unique-secret';

// Check whether a username is already registered
const isValid = (username) =>
  users.some(user => user.username === username);

// Check username and password
const authenticatedUser = (username, password) =>
  users.some(user =>
    user.username === username && user.password === password
  );

// Log in a registered user
regd_users.post('/login', (req, res) => {
  const { username, password } = req.body || {};

  if (!authenticatedUser(username, password)) {
    return res.status(401).json({
      message: 'Invalid username or password'
    });
  }

  const token = jwt.sign({ username }, JWT_SECRET, {
    expiresIn: '1h'
  });

  return res.status(200).json({
    message: 'Login successful',
    token
  });
});

// Add or update a review
regd_users.put('/auth/review/:isbn', (req, res) => {
  const { username, review } = req.body || {};
  const book = books[req.params.isbn];

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  if (!username || typeof review !== 'string' || !review.trim()) {
    return res.status(400).json({
      message: 'Username and review are required'
    });
  }

  if (!users.some(user => user.username === username)) {
    return res.status(401).json({ message: 'User not registered' });
  }

  book.reviews[username] = review.trim();

  return res.status(200).json({
    message: 'Review added or updated successfully',
    reviews: book.reviews
  });
});

// Delete a review belonging to the specified user
regd_users.delete('/auth/review/:isbn', (req, res) => {
  const { username } = req.body || {};
  const book = books[req.params.isbn];

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  if (!username || !Object.prototype.hasOwnProperty.call(book.reviews, username)) {
    return res.status(404).json({ message: 'Review not found' });
  }

  delete book.reviews[username];

  return res.status(200).json({
    message: 'Review deleted successfully',
    reviews: book.reviews
  });
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
module.exports.JWT_SECRET = JWT_SECRET;
