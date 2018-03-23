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

// // SHOW CAMPGROUND route
// app.get("/:id", function(req, res){
//     //find the campground with provided ID
//     Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
//         if(err){
//             console.log(err);
//         } else {
//             console.log(foundCampground)
//             //render show template with that campground
//             res.render("campgrounds/show", {campground: foundCampground})
//         }
//     })
// })

// contact page 
app.get('/contact', function(req, res) {
    res.render('pages/contact');
});

app.get('/gallery-detail/cell1', function(req, res) {
    res.render('pages/gallery-detail/cell1');
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Server Has Started!")
})