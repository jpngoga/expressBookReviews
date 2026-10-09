
const express = require('express');
const books = require('./booksdb.js');
const auth = require('./auth_users.js');

const public_users = express.Router();

// Register a new user
public_users.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: 'Username and password are required'
    });
  }

  if (auth.isValid(username)) {
    return res.status(409).json({
      message: 'Username already exists'
    });
  }

  auth.users.push({ username, password });

  return res.status(201).json({
    message: 'User successfully registered'
  });
});

// Get all books
public_users.get('/', (req, res) => {
  return res.status(200).json(books);
});

// Get book by ISBN (the database uses numeric keys)
public_users.get('/isbn/:isbn', (req, res) => {
  const book = books[req.params.isbn];

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  return res.status(200).json(book);
});

// Get books by author
public_users.get('/author/:author', (req, res) => {
  const author = req.params.author.toLowerCase();

  const matches = Object.values(books).filter(book =>
    book.author.toLowerCase() === author
  );

  return res.status(200).json(matches);
});

// Get books by title
public_users.get('/title/:title', (req, res) => {
  const title = req.params.title.toLowerCase();

  const matches = Object.values(books).filter(book =>
    book.title.toLowerCase().includes(title)
  );

  return res.status(200).json(matches);
});

// Get reviews for a book
public_users.get('/review/:isbn', (req, res) => {
  const book = books[req.params.isbn];

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  return res.status(200).json(book.reviews);
});

module.exports.general = public_users;
