import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
// import {app} from "../app.js"

// if there is database always remember async await

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB !! DB HOST: ${connectionInstance.connection.host}`)
    } catch(error) {
        console.log("MONGODB connection error: ",error);
        process.exit(1)
    }
}

export default connectDB;