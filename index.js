const express=require("express");
const app=express();


const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.get("/",(re,res)=>{
    return res.status(200).json({
        "name":"sahil patel",
        "branch":"Information technology",
        "sem":6
     
   })
})
app.get('/getBlob',(req,res)=>{
   return res.status(200).json({
        "name":"sahil patel",
        "branch":"Information technology",
        "sem":6
     
   })
})

app.listen(process.env.PORT,()=>{
    console.log("server is started");
})
