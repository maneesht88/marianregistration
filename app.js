
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
const mongoose = require('mongoose');
//mongoose.connect("mongodb://localhost:27017/marianregidb", {useNewUrlParser: true, useUnifiedTopology: true});

//mongodb+srv://maneesht88:<password>@cluster0-wxzpv.mongodb.net/test?retryWrites=true&w=majority
// mongo "mongodb+srv://cluster0-wxzpv.mongodb.net/test"  --username maneesht88
mongoose.connect("mongodb+srv://maneesht88:maneesh@123@cluster0-wxzpv.mongodb.net/marianregidb", {useNewUrlParser: true, useUnifiedTopology: true});
const articleSchema = {
  fname:String,
  school: String,
  phone:String,
  mail:String,
  board:String,
  phy:String,
  chem:String,
  maths:String,
  bomech:String,
  bocs:String,
  boee:String,
  boec:String,
  bocvil:String }
const Article = mongoose.model("Article", articleSchema);
app.get("/", function(req, res) {
res.render("index.ejs")
});
app.post("/", function(req, res) {
  console.log(req.body.fname);
  phone=req.body.phone;
  const newArticle = new Article({
  fname: req.body.fname,
  school: req.body.school,
phone:req.body.phone,
  mail:req.body.mail,
  board:req.body.board,
  phy:req.body.phy,
  chem:req.body.chem,
  maths:req.body.maths,
  bomech:req.body.bomech,
  bocs:req.body.bocs,
  boee:req.body.boee,
  boec:req.body.boec,
  bocvil:req.body.bocvil,
})
newArticle.save(function(err) {
  if (!err) {
    Article.findOne({phone:phone},function(err,foundList){
      if(!err){
  res.render("thankyou.ejs", {
    fname: foundList.fname,
    school: foundList.school,
    phone:foundList.phone,
    mail:foundList.mail,
    board:foundList.board,
    phy:foundList.phy,
    chem:foundList.chem,
    maths:foundList.maths,
    bomech:foundList.bomech,
    bocs:foundList.bocs,
    boee:foundList.boee,
    boec:foundList.boec,
    bocvil:foundList.bocvil,
  }
  );
  res.render("thankyou.ejs");
  }
  else{
    res.send("error");
  }
  });

  } else {
    res.send("tryagain");
  }
});

});


app.get("/thankyou", function(req, res) {


});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function() {
  console.log("Server started on port started");
});
