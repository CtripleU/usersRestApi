const mongoose = require('mongoose');

//USER SCHEMA
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    }
});


exports.User = new mongoose.model('User', UserSchema);