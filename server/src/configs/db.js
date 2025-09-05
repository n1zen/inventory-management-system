// import mongoose
const mongoose = require('mongoose');

// connect to db
const connectDB = async () => {
    try {
        // database url is in .env file
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB CONNECTION SUCCESSFULL");
    } catch (error) {
        console.error("Error in connecting to database", error);
        process.exit(1); // exit with failure
    }
}

module.exports = connectDB;