const express=require("express");
const { registerController, loginController } = require("../controller/userController");
let userRouter=express.Router()

userRouter.post("/login/register",registerController)
userRouter.post("/login",loginController)

module.exports=userRouter