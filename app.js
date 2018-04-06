let express    = require('express');
let app        = express();
let bodyParser = require('body-parser');
let projects   = require('./projects');
    
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

// INDEX route 
app.get('/', function(req, res) {
    res.render('home', {homeActive: 'active',
                        galleryActive: '',
                        contactActive: '',
                        background: 'home'});
});

// gallery INDEX route 
app.get('/gallery/:type/index', function(req, res){
    let type = req.params.type;
    res.render('./gallery/index', {type: type,
                                   projects: projects[type],
                                   homeActive: '',
                                   galleryActive: 'active',
                                   contactActive: '',
                                   background: 'gallery'});
});

// gallery SHOW routes
app.get('/gallery/:type/:title', function(req, res){
    // loop through projects that are at index of 'type'
    projects[req.params.type].forEach(function(foundProject){
        // find the project that matches requested 'title'
        if (foundProject.title === req.params.title){
            // render the show page with the found project's credentials
            res.render('gallery/show', {foundProject: foundProject,
                                        homeActive: '',
                                        galleryActive: 'active',
                                        contactActive: '',
                                        background: 'gallery-show'});
        }                                         
    });
});

// Contact route
app.get('/contact', function(req, res) {
    res.render('contact', {homeActive: '',
                           galleryActive: '',
                           contactActive: 'active',
                           background: 'contact'});
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Server Has Started!");
});