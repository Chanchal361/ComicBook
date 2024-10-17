const express = require("express");
const ComicController = require("../controllers/comicControllers");

const router = express.Router();

// Create a new comic book
router.post("/create", ComicController.createComicBook);

// Update comic book
router.put("/update/:id", ComicController.updateComicBook);

// Delete comic book
router.delete("/delete/:id", ComicController.deleteComicBook);

// Get all comic books (with pagination, filtering, sorting)
router.get("/getall", ComicController.getComicBooks);

// Get specific comic book details
router.get("/getById/:id", ComicController.getComicBookDetails);

module.exports = router;
