const ProductSchema = require("../models/product.model")

const addProduct = async (req, res) => {
    const {name, quantity, price, image} = req.body

    const product = ProductSchema({
			name,
			quantity,
			price,
			image
		});

    try {
        if (!name || !quantity || !price) {
            return res.status(400).json({message: 'All fields are required!'})
        }
        if (quantity <= 0 || price <= 0) {
            return res.status(400).json({message: 'Quantity and price must be a positive number!'})
        }

        await product.save()
        return res.status(200).json({message: 'Product added successfully!'})
    } catch (error) {
        return res.status(500).json({message: 'Server error!'})
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await ProductSchema.find()
        return res.status(200).json(products)
    } catch (error) {
        return res.status(500).json({message: 'Server error!'})
    }
}

module.exports = {getProducts, addProduct}