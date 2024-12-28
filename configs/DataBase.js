const mongoose = require('mongoose');
require("dotenv").config();
exports.connect = () =>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(console.log("DB connection successful"))
    .catch((e) =>{
        console.log("DB connection issues");
        console.log(error);
        process.exit(1);
    });
}