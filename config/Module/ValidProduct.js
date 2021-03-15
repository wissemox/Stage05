const mongoose = require('mongoose')
const ValidProductSchma = new mongoose.Schema({
  name:{
      type:String, 
  }, 
  Prix:{
      type:Number
  }, 
  Descraption:{
      type:String
  },
  image:{
      type:String
  }
})
module.exports =  ValidProduct = mongoose.model('ValidProduct',ValidProductSchma)