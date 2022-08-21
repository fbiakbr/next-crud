const MONGO_URI = "mongodb+srv://ann:ann123@nextcrud.qlcstta.mongodb.net/?retryWrites=true&w=majority"

import mongoose from "mongoose"

const connectMongo = async () => {
    try {
        const {connection} = await mongoose.connect(MONGO_URI)
        if (connection.readyState == 1) {
            console.log("MongoDB connected");
        }
    } catch (error) {
        return Promise.reject(error)
    }
}

export default connectMongo