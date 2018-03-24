var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser")
    // mongoose   = require("mongoose")
    // Project    = require("./models/project")
    
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"))
app.use(bodyParser.urlencoded({extended: true}))
    
var projects = [
        {title: 'BlueGirl', imageUrl: '/img/blue-girl.png', description: 'Beautiful lady with crazy hair!', thumbUrl: '/img/blue-girl.png'},
        {title: 'BlackGirl', imageUrl: '/img/black-girl.png', description: 'Dancing gracefully', thumbUrl: '/img/black-girl.png'},
        {title: 'Zebra', imageUrl: '/img/bullshittime.png', description: 'Stretching down to eat?', thumbUrl: '/img/bullshittime.png'},
        {title: 'Cloud', imageUrl: '/img/cloud.png', description: 'Little guy raining on everything', thumbUrl: '/img/cloud.png'},
        {title: 'Dogfish', imageUrl: '/img/dogfish.gif', description: 'Dog pooping itself out', thumbUrl: '/img/dogfish.gif'},
        {title: 'Dolphin', imageUrl: '/img/dolphintest.gif', description: 'Baaaayyyybbyyy dolphin...', thumbUrl: '/img/dolphintest.gif'},
        {title: 'Header', imageUrl: '/img/header.png', description: 'You have seen this before', thumbUrl: '/img/header.png'},
        {title: 'WhiteGirl', imageUrl: '/img/white-girl.png', description: 'This girl needs a gun', thumbUrl: '/img/white-girl.png'},
        {title: 'YellowZebra', imageUrl: '/img/yellow-zebra.png', description: 'A yellow variant on a good thing', thumbUrl: '/img/yellow-zebra.png'}
        ]

// INDEX route 
app.get('/', function(req, res) {
    res.render('home')
})

// gallery INDEX route 
app.get('/gallery/index', function(req, res) {
    res.render('gallery/index', {projects: projects})
})

// gallery SHOW route
app.get('/gallery/:title', function(req, res){
    projects.forEach(function(projects){
        if (projects.title === req.params.title) {
          res.render("gallery/show", {projects: projects}) 
        }
    })
})

// Contact route
app.get('/contact', function(req, res) {
    res.render('contact')
})

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Server Has Started!")
})