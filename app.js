
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/registerdb", {useNewUrlParser: true, useUnifiedTopology: true});

//mongodb+srv://maneesht88:<password>@cluster0-wxzpv.mongodb.net/test?retryWrites=true&w=majority
// mongo "mongodb+srv://cluster0-wxzpv.mongodb.net/test"  --username maneesht88
// mongoose.connect("mongodb+srv://maneesht88:maneesh@123@cluster0-wxzpv.mongodb.net/todolistdb", {useNewUrlParser: true, useUnifiedTopology: true});
const itemsSchema={name:String};
const Item=mongoose.model("item",itemsSchema);
app.get("/", function(req, res) {
res.render("index.ejs")
});
app.post("/", function(req, res) {
res.render("thankyou.ejs")
});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function() {
  console.log("Server started on port started");
});
