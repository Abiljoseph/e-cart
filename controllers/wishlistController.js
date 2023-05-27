const wishlists  = require('../model/wishlistSchema');

exports.addToWishlist = async (req,res) => {
    // destructuring
    const {id,title,price,image} = req.body
    try {
        const item = await wishlists.findOne({id})
        if(item){
           res.status(401).json("item already present in your wishlist")
        }else{
           const newProduct = new wishlists({
            id,
            title, 
            price,
            imageUrl:image
           })
           await newProduct.save()
           res.status(200).json("item added to your wishlist")
        }
    } catch (error) {
        res.status(400).json(error)
    }
    
}

exports.getWishlistItems = async (req,res) => {
    try {
        const Allitems = await wishlists.find()

        if(Allitems){
            res.status(200).json(Allitems)
        }else{
            res.status(401).json("Your wishlist is Empty !!!!!")
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.removeWishlistItem = async (req,res) => {

    const{id} = req.params
    try {

        const item = await wishlists.deleteOne({id})
        if(item) {
            const Allitem = await wishlists.find()
            res.status(200).json(Allitem)

        }else{
            res.status(401).json("item is not available in the wish list")
        }
        
    } catch (error) {
        
    }
}