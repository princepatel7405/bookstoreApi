const Book = require("../model/BookModal");

exports.addBookController = async (req, res) => {
  let payload = req.body;
  try {
    let data = new Book(payload);
    await data.save();
    res.send({
      msg: "Data added successfully",
      data,
      success: res.statuscode,
    });
  } catch (error) {
    res.send({
      msg: error.msg,
      success: res.statuscode,
    });
  }
};

exports.getBookController=async(req,res)=>{
    try {
        let data= await Book.find()
        res.send({
            msg: "Data archieved",
            data,
            success: res.statuscode,
          });
    } catch (error) {
        res.send({
            msg: error.msg,
            success: res.statuscode,
          });
    }
}