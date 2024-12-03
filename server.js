const express = require("express");
const app = express();
let port =3001;
app.listen(port,(req,res)=>{`app is listening on port number${port}`});
app.get("/",(req,res)=>{res.status(200).json("hi This is  server.js")});