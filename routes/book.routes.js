const express=require("express")
const { addBookController } = require("../controller/bookController")
const bookRouter=express.Router()

bookRouter.post("/book/addbook",addBookController)