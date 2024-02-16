import express from "express"
import dotenv from "dotenv"
import db from "./middlewares/db.js"
import Product from "./models/product.model.js"
import productRoute from "./routes/product.route.js"
dotenv.config()
const app = express()
const port = process.env.PORT
const uri = process.env.DB_URI
// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Database connection
db(uri)

// Proudct Routes
app.use("/api",productRoute)

// Home Route
app.get('/', (req, res) => {
    res.send("hello world!")
})


// Listening app
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})