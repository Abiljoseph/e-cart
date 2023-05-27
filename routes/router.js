const express = require('express');
const controller = require("../controllers/productController")
const wishlistController = require("../controllers/wishlistController")
const cartController = require("../controllers/cartController")

const router = new express.Router()


// get all products api
router.get('/products/get-all-products',controller.getAllProducts)
router.get('/products/:id',controller.viewProduct)
router.post('/products/wishlist',wishlistController.addToWishlist)
router.get('/wishlist/get-all-items',wishlistController.getWishlistItems)
router.delete('/wishlists/remove-item/:id',wishlistController.removeWishlistItem)
router.post('/cart/Add-to-cart',cartController.addToCart)
router.get('/cart/get-All-items',cartController.getCartItems)
router.delete('/cart/item/:id',cartController.removeCartItems)
router.get('/cart/incr-Item/:id',cartController.incrCartItem)
router.get('/cart/decr-Item/:id',cartController.decrCartItem)
router.delete('/cart/empty-cart',cartController.emptyCart)


module.exports = router  