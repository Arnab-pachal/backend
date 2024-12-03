const express = require("express");
const app = express();
let port =3001;
app.listen(port,(req,res)=>{console.log(`app is listening on port number${port}`)});
app.get("/",(req,res)=>{res.status(200).json("hi This is  server.js")});