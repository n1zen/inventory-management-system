// import Product model
const Product = require('../models/Product.js');

// get all products
module.exports.getAllProducts = async (_, res) => {
    try {
        /* 
            find products using the model Product
            sort by newest product first
            return all products as json
        */
        const products = await Product.find().sort({createdAt: -1});
        res.status(200).json(products);
    } catch (error) {
        console.error("Error in getAllNotes controller", error);
        res.status(500).json({message: "Internal Server Error."});
    }
};

// get specific product by id
module.exports.getProductById = async (req, res) => {
    try {
        /*
            find a product by its Id
            return the product as json
        */
        const product = await Product.findById(
            req.params.id
        );
        res.status(200).json(product);
    } catch (error) {
        console.error("Error in getProductBySKU controller", error);
        res.status(500).json({message: "Internal Server Error."});
    }
};

// create new product
module.exports.createProduct = async (req, res) => {
    try {
        /**
         *  creates a new product with request header below
         * 
         *  {
         *      name: "name",
         *      sku:  000000,
         *      price: "Php 100.00",
         *      series: "Test",
         *      stock: 0
         *  }
         */
        const { name, sku, price, series, stock } = req.body;
        const product = new Product({ name, sku, price, series, stock });

        // saves the product to db and returns result
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error("Error in createProduct controller", error);
        res.status(500).json({message: "Internal Server Error"});
    }
};

// update product
module.exports.updateProduct = async (req, res) => {
    try {
        /**
         *  Updates product with the id: [id] using a Body Header request
         *  {
         *      name: "Updated Name",
         *      sku: [updated-sku],
         *      price: "Updated Price",
         *      series: "Updated Series",
         *      stock: [updated-stock]
         *  }
         *  Note that this method only updates the values inside the header
         *  ex: 
         *  This will only update the stock
         *  {
         *      stock: [updated-stock]
         *  }
         *  
         */
        const { name, sku, price, series, stock } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { name, sku, price, series, stock },
            {
                new: true,
            }
        );

        /**
         *  if Product does not exist, then return status code 404
         *  this means that we should get a message which says: "Product not found."
         */
        if(!updatedProduct) return res.status(404).json({message:"Product not found."});

        // return the updatedProduct if it does exist
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error("Error in updateProduct controller", error);
        res.status(500).json({message: "Internal Server Error"});
    }
};

// delete product
module.exports.deleteProduct = async (req, res) => {
    try {
        // find the product by its ID and delete it
        const deletedProduct = await Product.findByIdAndDelete(
            req.params.id
        );

        // if the product cannot be found, we need to get the message: "Product not found"
        if(!deletedProduct) return res.status(404).json({message: "Product not found."});

        // give message "Product deleted successfully." if the product does get deleted.
        res.status(200).json({message: "Product deleted successfully."});
    } catch (error) {
        console.error("Error in deleteProduct controller", error);
        res.status(500).json({message: "Internal Server Error"});
    }
};