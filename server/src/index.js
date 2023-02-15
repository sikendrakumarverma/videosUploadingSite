const express = require("express")
const mongoose = require("mongoose")
const app = express()
const route = require("./routes/route");
//const { AppConfig } = require('aws-sdk');

const cors= require('cors');
const multer= require("multer");

app.use(express.json());

app.use(cors());

app.use( multer().any())

mongoose.connect("mongodb+srv://sikendrakumar:wtCKMS5cQpIjdBOE@cluster0.oexuw0b.mongodb.net/project9Videos",
    {useNewUrlParser:true}
).then(()=>console.log("mongoDb is connected"))
    .catch((err)=>console.log(err))

app.use("/",route)

app.use("/*", function (req, res) {
    return res.status(400).send({status: false,message: "Please Enter Valid Path Or Parameters !!!!",});
  });
  

app.listen(process.env.PORT || 8080, function () {
    console.log('Express app running on port ' + (process.env.PORT || 8080))
});

