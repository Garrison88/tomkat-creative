var express          = require("express"),
    app              = express()
    
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"))

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// work page 
app.get('/work', function(req, res) {
    res.render('pages/work');
});

// contact page 
app.get('/contact', function(req, res) {
    res.render('pages/contact');
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Server Has Started!")
})