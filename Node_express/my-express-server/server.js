const express = require("express");

const app =express();

app.get("/",function(req,res){
  res.send("<h1>Hello</h1>");
});
app.get("/contact",function(req,res){
  res.send("Contact me at sanketsaboo@gmail.com");
});
app.get("/about",function(req,res){
  res.send("<h2>Hey Guys I'm Sanket Saboo</h2>")
})
app.listen(3000, function(){
  console.log("Node server has started on  ");
});
