var express    = require('express'),
    app        = express(),
    bodyParser = require('body-parser'),
    projects   = require('./projects')    
    
app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: true}))

// INDEX route 
app.get('/', function(req, res) {
    res.render('home', {homeActive: 'active',
                        galleryActive: '',
                        contactActive: '',
                        background: 'home'})
})

// gallery INDEX route 
app.get('/gallery/:type/index', function(req, res) {
    res.render('./gallery/index', {type: req.params.type,
                                   project: projects,
                                   homeActive: '',
                                   galleryActive: 'active',
                                   contactActive: '',
                                   background: 'gallery'})
})

// gallery SHOW route
app.get('/gallery/:type/:title', function(req, res){
    projects.forEach(function(project){
        if (project.title === req.params.title) {
            res.render('gallery/' + req.params.type + '/show', {project: project,
                                                                homeActive: '',
                                                                galleryActive: 'active',
                                                                contactActive: '',
                                                                background: 'gallery-show'})
        }                                         
    })
})

// Contact route
app.get('/contact', function(req, res) {
    res.render('contact', {homeActive: '',
                           galleryActive: '',
                           contactActive: 'active',
                           background: 'contact'})
})

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Server Has Started!")
})