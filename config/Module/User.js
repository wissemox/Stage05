const mongoose = require('mongoose')
const UserSchma = new mongoose.Schema({
    name : { 
        type : String,
        required: true
    }, 
    email: { 
        type: String , 
        required:true , 
        unique: true
    },
    password : { 
        type:String , 
      
    }, 
    avatar: { 
        type:String
    }, 
    date: {
        type:Date , 
        default : Date.now
    },
    isAuth:{
        type:Boolean,
        default:false
        
    },
    isAuth02:{
        type:Boolean,
        default:false
    },
    FacebookIMG:{
        type:String
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    Aritcles:[] 
})
module.exports =  User = mongoose.model('user',UserSchma)