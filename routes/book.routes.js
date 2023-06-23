const express=require("express")
const { addBookController, getBookController, findBookController, singleBookController } = require("../controller/bookController")
const bookRouter=express.Router()

bookRouter.post("/book/addbook",addBookController)
bookRouter.get("/book",getBookController)
bookRouter.get("/book/:id",singleBookController)
bookRouter.get("/getbook",findBookController)
module.exports=bookRouter
