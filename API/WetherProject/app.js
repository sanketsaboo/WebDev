const express =require("express");
const https =require("https");
const bodyParser = require("body-parser");

const app =express();
app.use(bodyParser.urlencoded({extension: true}));
app.get("/",function(req,res){

  res.sendFile(__dirname+"/index.html");

});

app.post("/",function(req,res){
  console.log("Post request recieved");
  const query=req.body.City
  const apikey ="a9dd43857e1604553e6f2a728289f4e1"
  const unit="metric"

  const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apikey+"&units="+unit
  https.get(url,function(response){
  console.log(response.statusCode);

  response.on("data",function(data){
    const weatherData= JSON.parse(data);
    const temps = weatherData.main.temp;
    const descrip = weatherData.weather[0].description;
    const icon =weatherData.weather[0].icon;
    const imageURL="http://openweathermap.org/img/wn/"+icon+"@2x.png"

    console.log(descrip);
    console.log(temps);

    res.write("<h1>The temperature in "+query+" is "+ temps +" degree celcius.</h1>");
    res.write("<p>The weather is currently "+ descrip +" in "+query+"</p>");
    res.write("<img src="+imageURL+">");
    res.send();
    // const object ={
    //   name: "Sanket",
    //   favouriteAnime: "Naruto"
    // }
    // console.log(JSON.stringify(object));
  });
  });
  // res.send("Server is up and running.");
})


app.listen("3000",function()
{
  console.log("Server has started");
});
