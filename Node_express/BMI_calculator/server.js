const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended : true}));

app.get("/",function(req,res){

  res.sendFile(__dirname+"/bmiCalculator.html");
});
app.post("/",function(req,res){
  var h= parseFloat(req.body.Height);
  var w= parseFloat(req.body.Weight);
  var n = w/h**2;
  res.send("Your BMI is "+n);
});
app.listen("3000",function(){
  console.log("The sserver has started");
})
