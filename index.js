import express from "express"
import dotenv from "dotenv"
import db from "./middlewares/db.js"
import Product from "./models/product.model.js"
dotenv.config()
const app = express()
const port = process.env.PORT
const password = process.env.PASSWORD
// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Database connection
db(password)

// Home Route
app.get('/', (req, res) => {
    res.send("hello world!")
})

app.post('/api/products', async (req, res) => {
    try {

        const product = await Product.create(req.body)
        console.log(product)
        res.status(200).json(product)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
})

app.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.get("/api/product/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const products = await Product.findById(id)
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Update product

app.put("/api/product/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body)
        if(!product){
            return res.status(404).json({message: "Product not found!"})
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Delete a product
app.delete("/api/product/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            return res.status(404).json({message: "Product not found!"})
        }
        res.status(200).json({message : "Product deleted."})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
// Listening app
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})