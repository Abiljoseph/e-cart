// logic to get all products
const products = require("../model/productSchema")

exports.getAllProducts = async (req,res) => {

    try {
        const allProducts = await products.find()
//   send to client
   res.status(200).json(allProducts)
        
    } catch (error) {
        res.status(404).json(error)
    }
  
}

// logic to get a purticular product using an id 

exports.viewProduct = async (req,res) => {
    const id = req.params.id
    try {
        const product = await products.findOne({id})
        if (product) {
            res.status(200).json(product) 
        }else{
            res.status(400).json("item not available")
        }
        
    } catch(error) {
        res.status(404).json(error)
    }
    
}