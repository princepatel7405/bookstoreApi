const express=require("express")
const { addBookController, getBookController, findBookController, singleBookController, filterController } = require("../controller/bookController")
const bookRouter=express.Router()

bookRouter.post("/book/addbook",addBookController)
bookRouter.get("/book",getBookController)
bookRouter.get("/book/:id",singleBookController)
bookRouter.get("/getbook",findBookController)
bookRouter.get("/book/filter",filterController)
module.exports=bookRouter
