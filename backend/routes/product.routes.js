import express from 'express'
import { createProduct, deleteProduct, getProducts, putProduct } from '../controllers/product.controller.js'


const router = express.Router()

router.get("/", getProducts)

router.post("/", createProduct)

router.delete("/:id", deleteProduct)

router.put("/:id", putProduct)

export default router