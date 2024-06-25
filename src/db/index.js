import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectdb = async () => { 
    try {
        const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`mongoDB connected || PORT:${process.env.PORT} || DB host:${connectioninstance.connection.host}`)
    } catch (error) {
        console.log(error)
        console.log("error")
        throw error

    }
 }

export default connectdb