import mongoose from "mongoose";
import dotenv from 'dotenv';
import Product from "./models/Product.js";
import User from "./models/User.js";
import products from './data/products.js'

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL);

// Function to seed data

async function seedData() {
    try {
        // Clear existing data
        await Product.deleteMany();
        await User.deleteMany();

        //Create a default admin user
        const createdUser = await User.create({
            name: "Admin User",
            email: "admin@example.com",
            password: "123456",
            role: "admin"
        });

        // Assign the default user ID to each product
        const userID = createdUser._id;

        const sampleProducts = products.map((product)=>{
            return{...product, user: userID}
        })


        //Insert the products into the database
        await Product.insertMany(sampleProducts);

        console.log("Product data seeded successfully.");
        process.exit()
        
    } catch (error) {
        console.error("Error seeding the data:", error);
        process.exit(1);
        
    }
}

seedData()