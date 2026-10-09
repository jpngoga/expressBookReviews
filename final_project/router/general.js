const axios = require('axios');


const API_BASE_URL = process.env.BOOKS_API_BASE_URL || 'http://localhost:5001';

// Retrieve all books using Axios and async/await
async function getAllBooks() {
  try {
    const response = await axios.get(`${API_BASE_URL}/`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to retrieve books: ${error.message}`);
  }
}

// Retrieve a book by ISBN
async function getBookByISBN(isbn) {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/isbn/${encodeURIComponent(isbn)}`
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to retrieve book by ISBN: ${error.message}`);
  }
}

// Retrieve books by author
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/author/${encodeURIComponent(author)}`
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to retrieve books by author: ${error.message}`);
  }
}

// Retrieve books by title
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/title/${encodeURIComponent(title)}`
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to retrieve books by title: ${error.message}`);
  }
}

module.exports.bookApi = {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle
};

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
