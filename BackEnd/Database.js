const mongoose = require('mongoose');

const DB_URL = 'mongodb://127.0.0.1:27017/TaskManagerApp';


const connectToDb = () =>{
    mongoose.connect(DB_URL).then(()=>{
        console.log("Connected to MongoDB");
    }).catch((error)=>{
        console.error(`Error connecting to ${error}`);
    })
}

module.exports = connectToDb;
