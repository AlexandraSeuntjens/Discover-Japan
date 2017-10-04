var express = require("express");
var path = require("path");
var app = express();

var dataFile = require('./data/data.json');

// Express vertellen dat je views zich in een folder views bevinden
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', (process.env.PORT || 5000));



app.get("/", function(req, res) {
    res.render("index", {blogposts: dataFile.blogposts});

});


app.get("/:blogid", function(req, res) {
    res.render("blogpost", {blogposts: dataFile.blogposts[req.params.blogid]});

});

app.use(express.static('public'));

app.listen(app.get('port'), function() {
   app.get('port');
});
