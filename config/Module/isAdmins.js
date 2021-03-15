const mongoose = require('mongoose')
const AdminSchma = new mongoose.Schema({
    name : { 
        type : String,
        required: true
    }, 
    email: { 
        type: String , 
        required:true , 
        unique: true
    },
    Admins01:{
        type:Boolean,
        default:false
    }
})
module.exports =  Admins = mongoose.model('Admin',AdminSchma)