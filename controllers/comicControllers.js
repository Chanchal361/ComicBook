const comicModel = require("../models/comicModel");

//  create a new Comic Book
const createComicBook = async (req, res) => {
  try {
    const {
      bookName,
      authorName,
      yearOfPublication,
      price,
      discount,
      numPages,
      condition,
      description,
    } = req.body;
    //   check the conditions
    if (
      !bookName ||
      !authorName ||
      !yearOfPublication ||
      !price ||
      !discount ||
      !numPages ||
      !condition ||
      !description
    ) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }
    const createBook = await comicModel.create({
      bookName,
      authorName,
      yearOfPublication,
      price,
      discount,
      numPages,
      condition,
      description,
    });
    res.status(201).json({
      message: "Comic book created successfully",
      success: true,
      createBook,
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({
        message: "An error occurred while creating the comic book",
        success: false,
      });
  }
};

// Edit comic book details
const updateComicBook = async (req, res) => {
  try {
    const {
      bookName,
      authorName,
      yearOfPublication,
      price,
      discount,
      numPages,
      condition,
      description,
    } = req.body;
    const { id } = req.params;
    const user = await comicModel.findByIdAndUpdate(
      id,
      {
        bookName,
        authorName,
        yearOfPublication,
        price,
        discount,
        numPages,
        condition,
        description,
      },
      { new: true }
    );
    res.status(200).json({
      message: "Comic book updated successfully",
      success: true,
      user,
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({
        message: "An error occurred while updating the comic book",
        success: false,
      });
  }
};

// Delete a comic book
 const deleteComicBook = async (req, res) => {
  try {
    const {id}=req.params;
    const deletedComic = await comicModel.findByIdAndDelete(id);
    if (!deletedComic)
      return res.status(404).json({ message: "Comic book not found" });
    res.status(200).json({ message: "Comic book deleted successfully" });
  } catch (err) {
      console.error(err);
      res.status(404).json({
        message: "An error occurred while deleting the comic book",
        success: false,
      })
    

  }
};

// Fetch all comic books with pagination, filtering, and sorting
const getComicBooks = async (req, res) => {
  try {
    const { page = 1, limit = 10, sort, order = "asc", ...filters } = req.query;
    const query = {};

    // Apply filters
    if (filters.authorName)
      query.authorName = { $regex: filters.authorName, $options: "i" };
    if (filters.yearOfPublication)
      query.yearOfPublication = filters.yearOfPublication;
    if (filters.condition) query.condition = filters.condition;
    if (filters.price) query.price = { $lte: filters.price };

    const comics = await comicModel.find(query)
      .sort({ [sort]: order === "asc" ? 1 : -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await comicModel.countDocuments(query);
    res.status(200).json({
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      data: comics,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred while fetching comic books" });
  }
};

// Get details of a specific comic book by ID
const  getComicBookDetails = async (req, res) => {
  try {
    const {id}=req.params;
    const comic = await comicModel.findById(id);
    if (!comic)
      return res.status(404).json({ message: "Comic book not found" });
    res.status(200).json(comic);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred while fetching comic book details" });
  }
};

module.exports = {
    createComicBook,
    updateComicBook,
    deleteComicBook,
    getComicBookDetails,
    getComicBooks,
  };
