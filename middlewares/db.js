import mongoose from "mongoose";

const db = (uri) => {
    // Database connection
    mongoose.connect(uri)
        .then(() => {
            console.log("Connected to database!")
        })
        .catch((err) => {
            console.log("Connection failed!")
        })

}
export default db;