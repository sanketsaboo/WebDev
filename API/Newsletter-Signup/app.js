const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extented: true
}))
app.post("/", function(req, res) {
  const firstName = req.body.fname;
  const lastName = req.body.lname;
  const email = req.body.email;

  var data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_field: {
        FNAME: firstName,
        LNAME: lastName
      }
    }]
  };
  const jsonData = JSON.stringify(data);

  const url = "https://us1.api.mailchimp.com/3.0/lists/9b1aa957b5";

  const options = {
    method: "POST",
    auth: "Sanket1:422e9cf17c3cf3f6b5330b359f576673-us1"
  }
  const request = https.request(url, options, function(response) {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }
    response.on("data", function(data) {
      console.log(JSON.parse(data));
    })
  })

  // console.log(firstName + lastName + email);
  request.write(jsonData);
  request.end();
});
app.post("/failure", function(req, res) {
  res.redirect("/")
})
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.listen("3000", function() {
  console.log("Server is running on port 3000");
});

// api key = 422e9cf17c3cf3f6b5330b359f576673-us1
// list i d= 9b1aa957b5
