//app create
const express = require("express");
const app = express();

//port
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//Adding middlewares
app.use(express.json());
const fileupload = require("express-fileupload");
app.use(fileupload());
//uploading in server

//db connect
const db = require("./configs/DataBase");
db.connect();

//Cloudinary connect
const cloudinary = require("./configs/Cloudinary");
cloudinary.cloudinaryConnect();

//mounting api route
const Upload = require("./routes/FileUpload");
app.use('/api/v1/upload',Upload);

//activate server
app.listen(PORT,()=>{
    console.log(`App is running at the port ${PORT}`);
})