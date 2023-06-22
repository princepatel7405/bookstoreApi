const mongoose=require("mongoose")

const bookScheema= new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
    },
    author:{
        type:String,
        require:false,
    },
    description:{
        type:String,
        require:false,
    },
    price:{
        type:Number,
        require:true,
    },
    category:{
        type:String,
        require:true
    },
    quantity:{
        type:Number
    }
},
{
    versionKey: false,
    timestamps: true,
  })

  const Book=mongoose.model("Book",bookScheema)
  module.exports = Book