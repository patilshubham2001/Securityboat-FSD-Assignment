const mongoose = require('mongoose');
const validator = require('validator');


const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Please Enter Name'],
    },
    email: {
        type: String,
        required: [true, 'Please Enter your email'],
        validate: [validator.isEmail, 'Please Enter valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter password'],
        minLength: [8, 'Password should be grater than 8 charcters']
    }
});

module.exports = mongoose.model('User', userSchema);