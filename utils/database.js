import mongoose from "mongoose";

let isConnected = false; // track connection

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);

    if (isConnected) {
        console.log('Database is already connected');
        return;
    }
    try { 
        await mongoose.connect(process.env.MONGO_DB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        isConnected = true;
        console.log("Mongodb connected")
    } catch (error) {
        console.log(error)
    }
}
