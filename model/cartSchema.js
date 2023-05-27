const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    id :{
        type: Number,
        required: true,
        unique: true
    },
    title :{
        type: String,
        required: true
    },
    price : {
        type : Number,
        required : true
    },
    imageUrl :{
        type :String,
        required :true
    },
    quantity:{
        type :Number,
        required:true
    },
    grandTotal:{
        type: Number,
        required: true
    }
})

const cartitems = mongoose.model('cartitem',cartSchema);
module.exports = cartitems;