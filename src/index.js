import dotenv from "dotenv"
dotenv.config({path:'./env'})
import connectdb from "./db/index.js";

connectdb()














// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";

// const app = express()

// ;(async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error) => {
//             console.log("ERRR",error)
//             throw error
//         })

//         app.listen(process.env.PORT,() => { 
//             console.log(process.send.PORT)
//          })

//     } catch (error) {
//         console.log(error)
//     }
// })()