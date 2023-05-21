const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = async ()=>{
    try{
        await mongoose.connect(process.env.URL);
        console.log("database connected");
    }catch(e){
        console.log({error: e.message});
    }
}

module.exports = dbConnection;