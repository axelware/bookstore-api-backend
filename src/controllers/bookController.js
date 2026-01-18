const Book = require('../models/Book');

exports.getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

exports.createBook = async (req, res) => {
  const newBook = await Book.create(req.body);
  res.status(201).json(newBook);
};