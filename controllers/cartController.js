const cartitems = require("../model/cartSchema")

// add item to cart

exports.addToCart = async (req, res) => {
  const { id, title, image, price, quantity } = req.body

  try {
    const product = await cartitems.findOne({ id })
    if (product) {
      product.quantity += 1
      product.grandTotal = product.price * product.quantity
      await product.save()
      res.status(200).json("item added to the cart")

    } else {

      const newProduct = new cartitems({
        id,
        title,
        price,
        imageUrl: image,
        quantity,
        grandTotal: price
      })

      await newProduct.save()
      res.status(200).json("item added to your cart ")
    }

  } catch (error) {
    res.status(401).json(error)
  }
}


exports.getCartItems = async (req, res) => {
  try {
    const allItems = await cartitems.find()
    res.status(200).json(allItems)
  } catch (error) {
    res.status(401).json(error)
  }
}

exports.removeCartItems = async (req, res) => {
  const { id } = req.params
  try {

    const removeItem = await cartitems.deleteOne({ id })
    if (removeItem) {
      const allItems = await cartitems.find()
      res.status(200).json(allItems)
    }

  } catch (error) {

    res.status(401).json(error)
  }
}

exports.incrCartItem = async (req, res) => {
  const { id } = req.params

  try {
    const item = await cartitems.findOne({ id })
    if (item) {
      item.quantity += 1
      item.grandTotal = item.price * item.quantity
      await item.save()
      const allItems = await cartitems.find()
      res.status(200).json(allItems)
    } else {
      res.status(401).json("item not available in the cart")
    }
  } catch (error) {
    res.status(400).json(error)
  }
}

exports.decrCartItem = async (req, res) => {
  const { id } = req.params
  try {
    const item = await cartitems.findOne({ id })
    if (item) {
      item.quantity -= 1
      if (item.quantity == 0) {
        const deleteItem = await cartitems.deleteOne({ id })
        const allItems = await cartitems.find()
        res.status(200).json(allItems)
      } else {
        item.grandTotal = item.price * item.quantity
        await item.save()
        const allItems = await cartitems.find()
        res.status(200).json(allItems)
      }

    } else {
       res.status(401).json("item not available in the cart")
    }
  } catch (error) {

  }
}

exports.emptyCart = async (req,res) => {
  try {
    const result = await cartitems.deleteMany({})
    res.status(200).json("your cart was empty")
  } catch (error) {
    res.status(400).json(error)
  }
}

