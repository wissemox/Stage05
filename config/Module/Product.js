const mongoose = require('mongoose')
const ProductSchma = new mongoose.Schema({
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
module.exports =  Product = mongoose.model('Product',ProductSchma)