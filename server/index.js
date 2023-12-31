const express = require("express");
const userModel = require("./models/Users")
const app = express();
const mongoose = require("mongoose");
const cors =require("cors");
const port = 5500
// const path = require("path")
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://BholaKumar:i95KagmrKhxUMS6X@cluster0.gvozwdv.mongodb.net/EAuth")
.then(()=>console.log("connected to db"))
.catch(err=>console.log(err))

app.post('/register',(req,res)=>{
    userModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    userModel.findOne({email: email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("success");
            }else{
                res.json("the pasword is incorrect");
            }
        }
        else{
            res.json("No record existed")
        }
    })
})
// app.get('*',(req,res)=>{
//     res.sendFile(path.join(__dirname,"static/index.html"))
// })

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})