const mongoose = require('mongoose');
require("dotenv").config()

const connect = async() => {
    try{
        console.log("\n===================>connected to database<===================\n")
        return await mongoose.connect(process.env.DB)
    }catch(err){
        console.log(err) 
    }
}

module.exports = {
    connect
}