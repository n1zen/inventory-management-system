// import packages and libraries
const express = require('express');
const dotenv = require('dotenv');

// import connectDB module
const connectDB = require('./configs/db.js');

// import routers
const productRoutes = require('./routes/productRoutes.js');

// allow .env files
dotenv.config();

// init express app
const app = express();

// use port on .env
// if PORT does not exist on .env, use 5001 as port
const PORT = process.env.PORT || 5001;

// middleware
app.use(express.json()); // parse json data (allows server to understand json)

// routes
app.use("/api/products", productRoutes);

// connect to database
connectDB().then(() => {
    // listen to port
    app.listen(PORT, () => {
        console.log(`Server started on PORT: ${PORT}`);
    }); 
});