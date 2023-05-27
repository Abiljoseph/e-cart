const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
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
    }
})

const wishlists = mongoose.model('wishlist',wishlistSchema);
module.exports = wishlists;