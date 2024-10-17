const mongoose = require("mongoose");

const comicBookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,
    trim: true,
  },
  authorName: {
    type: String,
    required: true,
    trim: true,
  },
  yearOfPublication: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  numPages: { type: Number, required: true },
  condition: {
    type: String,
    enum: ["new", "used"],
    default: "new",
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ComicBook", comicBookSchema);
