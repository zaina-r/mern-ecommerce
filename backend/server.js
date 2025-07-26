import express from 'express'
import dotenv from 'dotenv'
import { connectdb } from './config/db.js'
import Product from './models/product.model.js'

dotenv.config()

const app = express()

app.get("/", (req, res) => {
    res.send("Server is ready")
})

app.use(express.json())  //allows us to use json data in the request body - a middle layer

app.post("/api/products", async (req, res) => {
    const product = req.body //user will send this data

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({success: false, message: "Please enter all fields"})
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct})
    } catch (error) {
        console.error(`Error in creating product: ${error.message}`)
        res.status(500).json({success: false, message: "Server Error"})
    }
})

app.listen(5001, () => {
    connectdb()
    console.log("Server started at http://localhost:5001/")
})
