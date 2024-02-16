import express from "express"
import dotenv from "dotenv"
import mongoose  from "mongoose"

dotenv.config()
const app = express()
const port = process.env.PORT
const password = process.env.PASSWORD

// Database connection
mongoose.connect(`mongodb+srv://Abhi:${password}@cluster0.dxmil.mongodb.net/Node-API?retryWrites=true&w=majorit`)
.then(()=>{
    console.log("Connected to database!")
})
.catch((err)=>{
    console.log("Connection failed!")
})


// Home Route
app.get('/',(req,res)=>{
    res.send("hello world!")
})

// Listening app
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})