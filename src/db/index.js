import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectdb = async () => { 
        const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`mongoDB connected || PORT:${process.env.PORT} || DB host:${connectioninstance.connection.host}`)
    
 }

export default connectdb  q 