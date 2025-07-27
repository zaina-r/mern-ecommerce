import express from 'express'
import dotenv from 'dotenv'
import { connectdb } from './config/db.js'
import productRoutes from './routes/product.routes.js'

dotenv.config()

const app = express()

app.use(express.json())  //allows us to use json data in the request body - a middle layer

app.use("/api/products", productRoutes)

app.listen(5001, () => {
    connectdb()
    console.log("Server started at http://localhost:5001/")
})
