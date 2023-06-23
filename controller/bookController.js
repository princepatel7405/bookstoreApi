const Book = require("../model/BookModal");

exports.addBookController = async (req, res) => {
  let payload = req.body;
  
  try {
    let exist = await Book.findOne({ name:req.body.name });
    if (exist) {
      res.send({
        msg: "Data Already exist",
        success: res.statusCode,
        
      });
    } else {
      let data = new Book(payload);
      await data.save();    
      res.send({
        msg: "Data added successfully",
        data,
        success: res.statusCode,
      });
    }
  } catch (error) {
    res.send({
      msg: error.msg,
      success: res.statusCode,
    });
  }
};

exports.getBookController = async (req, res) => {
  try {
    let data = await Book.find();
    res.send({
      msg: "Data archieved",
      data,
      success: res.statusCode,
    });
  } catch (error) {
    res.send({
      msg: error.msg,
      success: res.statusCode,
    });
  }
};

exports.filterController=async(req,res)=>{
  try {
    let data=await Book.find(req.query)
    res.send({
      msg: "Data Filtered",
      data,
      success: res.statusCode,
    })
  } catch (error) {
    res.send({
      msg: error.msg,
      success: res.statuscode,
    });
  }
}

exports.findBookController = async (req, res) => {
  let { name } = req.query;
  console.log(req.query);
  try {
    let data = await Book.find({ name: { $regex: name, $options: "i" } });
    res.send({
      msg: "Data Found",
      data,
      success: res.statusCode,
    });
  } catch (error) {
    res.send({
      msg: error.msg,
      success: res.statuscode,
    });
  }
};

exports.singleBookController=async(req,res)=>{
  let {id}=req.params;
  try {
    let data = await Book.findById(id);
    res.send({
      msg: "Data Found",
      data,
      success: res.statusCode,
    });
  } catch (error) {
    res.send({
      msg: error.msg,
      success: res.statuscode,
    });
  }
}
