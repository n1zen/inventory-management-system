// libraries and packages
const express = require('express');

// controllers
const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController.js');

const router = express.Router();

// route link "api/products/" to get all products
router.get("/", getAllProducts);

// route link "api/products/[id]" to get specific product
/* 
    ex. api/products/[id]

    the example link should return the product with the Id: [id]

*/
router.get("/:id", getProductById);

// route link "api/products/" to create a new product
/**
 *  Body Header 
 *  {
 *      name: "name",
 *      sku: 280005,
 *      price: "Php 100.00",
 *      series: "Test",
 *      stock: 0
 *  }
 */
router.post("/", createProduct);

// route link "api/products/[id]" to update specific product
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
router.put("/:id", updateProduct);

// route link "api/products/[id]" to delete a specific product
/**
 *  Deletes a product with the id: [id]
 * 
 */
router.delete("/:id", deleteProduct);

module.exports = router;