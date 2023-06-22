const express=require("express")
const { connection } = require("./db")
require("dotenv").config()
const app=express()
const userRouter=require("./routes/user.routes")
const cors=require("cors")

app.use(express.json())
app.use(cors())
app.use("/",userRouter)

app.listen(`${process.env.PORT}`,async()=>{
    try {
        console.log(`Listening on ${process.env.PORT}`);
        await connection
        console.log("Database connection established");
    } catch (error) {
        console.log(error);
    }
})