const express =require('express');
const dotenv = require('dotenv');
const cors=require('cors');
const connectionDb=require("./config/db");
const app=express();
app.use(express.json());
// Load environment variables from .env file
const PORT=process.env.PORT || 4000
dotenv.config({});

app.use(cors());

app.get("/", (req, res) =>{
    res.send(`server is running on ${PORT}`)
});

//  Routes 
const comicRoutes=require("./routes/comicRoutes")

app.use("/api/comics",comicRoutes); 

// Connect to the database
app.listen(PORT,()=>{
    connectionDb();  // Connecting to the MongoDB database
    console.log(`Server running on port ${PORT}`);

});
