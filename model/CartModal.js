const { default: mongoose } = require("mongoose");

const cartSchema= new mongoose.Schema({
    userid:{
        type:String,
        require:true
    },
    cart:{
        type:Array,
    }
})

const Cart=mongoose.model("Cart",cartSchema)
module.exports= Cart