const mongoose = require('mongoose')
      
    //   id: 1, 
    //   name: "Gourmet Catering", 
    //   rating: 4.8, 
    //   price: "$1000", 
    //   thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCSt8qdi-lv9eXd064NM3AOwZBrVn0C9xxVg&s",
    //   description: "Premium gourmet catering for all event types.",
    //   availability: "Available on weekends",
    //   location: "Los Angeles, CA"

const cateringSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rating:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    
     description: {
         type: String,
         required: true
     },
    availability: {
        type: String,
        required: false,
    },
    location: {
        type: String,
        required: true,
    }



})

const priest = mongoose.model("priests", cateringSchema)
module.exports = priest;