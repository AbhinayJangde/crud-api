import mongoose from "mongoose";

const db = (password) => {
    // Database connection
    mongoose.connect(`mongodb+srv://Abhi:${password}@cluster0.dxmil.mongodb.net/Node-API?retryWrites=true&w=majorit`)
        .then(() => {
            console.log("Connected to database!")
        })
        .catch((err) => {
            console.log("Connection failed!")
        })

}
export default db;