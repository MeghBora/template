const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config({path:"backend/config/config.env"});

const connection = async() =>{
    try{
        await mongoose.connect(process.env.URI);
        console.log("connection establish successfully");
    }catch (err){
        console.log(err);
    }
}

module.exports = connection;