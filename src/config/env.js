const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    EMAIL: process.env.EMAIL,
    PASSWORD: process.env.PASSWORD,
    // Add any other environment variables you need
};