const mongoose= require("mongoose");
const dotenv= require("dotenv");
dotenv.config({})

// Connect to MongoDB
const connectDb=()=>{
    mongoose.connect(process.env.MONGO_URL)
   .then(()=> console.log("MongoDB Connected..."))
   .catch(err=>console.error("Error connecting to MongoDB:", err));
}

module.exports = connectDb

