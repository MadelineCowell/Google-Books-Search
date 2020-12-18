const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for books
const BooksSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The book text field is required']
  }
})

//create model for books
const Books = mongoose.model('todo', BooksSchema);

module.exports = Books;