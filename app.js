const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const projects   = require('./projects');
    
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

// INDEX route 
app.get('/', (req, res) => {
    res.render('home', {page: 'home',
                        background: 'home'});
});

// gallery INDEX route 
app.get('/gallery/:type/index', (req, res) => {
    let type = req.params.type;
    res.render('./gallery/index', {type,
                                   projects: projects[type],
                                   page: 'work',
                                   background: 'gallery',});
});

// gallery SHOW routes
app.get('/gallery/:type/:title', (req, res) => {
    // loop through projects that are at index of 'type'
    projects[req.params.type].forEach((foundProject)  => {
        // find the project that matches requested 'title'
        if (foundProject.title === req.params.title) {
            // render the show page with the found project's credentials
            res.render('gallery/show', {foundProject,
                                        page: 'work',
                                        background: 'gallery-show'});
        };
    });
});

//contact route
app.get('/contact', (req, res) => {
    res.render('contact', {page: 'contact',
                           background: 'contact'});
});

app.listen(process.env.PORT || 3000, process.env.IP, () => {
    console.log('The Server Has Started!');
 });