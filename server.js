const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const quoteRoutes = require("./routes/quote");

 mongoose.connect("mongodb+srv://Arunraj29:arun2901@arunraj.xne4ztq.mongodb.net/?retryWrites=true&w=majority&appName=arunraj").then(() => {
    console.log("Connected to MongoDB");
 })

const app = express();
app.use(express.json())
app.use(cors())


app.use("/quote",quoteRoutes);

app.get("/",function(req,res){
    res.send("quote website")
})

app.listen(7000,()=>{
    console.log("server is running at 7000")
})