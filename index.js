import express from "express"
import dotenv from "dotenv"
import db from "./middlewares/db.js"

dotenv.config()
const app = express()
const port = process.env.PORT
const password = process.env.PASSWORD

// Database connection
db(password)

// Home Route
app.get('/',(req,res)=>{
    res.send("hello world!")
})

// Listening app
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})