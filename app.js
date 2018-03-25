var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser")
    
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"))
app.use(bodyParser.urlencoded({extended: true}))
    
var projects = [
    {
        type: 'animation',
        title: 'Dolphin',
        imageUrl: '/img/anim_dolphin.gif',
        description: 'Baaaayyyybbyyy dolphin...',
        thumbUrl: '/img/anim_dolphin.gif'
    },
    {
        type: 'animation',
        title: 'Blue Girl',
        imageUrl: '/img/blue-girl.png',
        description: 'In publishing and graphic design, lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content. Replacing the actual content with placeholder text allows designers to design the form of the content before the content itself has been produced.',
        thumbUrl: '/img/blue-girl.png'
    },
    {
        type: 'web',
        title: 'DawnAyer.com',
        imageUrl: '/img/dawn-ayer.png',
        description: 'Commissioned by dawn ayer COMMUNICATIONS to design and develop a website promoting their services',
        thumbUrl: '/img/thumbnails/dawn-ayer.png'
    },
    {
        type: 'illustration',
        title: 'Zebra',
        imageUrl: '/img/bullshittime.png',
        description: 'Stretching down to eat?',
        thumbUrl: '/img/bullshittime.png'
    },
    {
        type: 'animation',
        title: 'Dogfish',
        imageUrl: '/img/dogfish.gif',
        description: 'Dog pooping itself out',
        thumbUrl: '/img/dogfish.gif'
    },
]

// INDEX route 
app.get('/', function(req, res) {
    res.render('home')
})

// gallery INDEX route 
app.get('/gallery/:type/index', function(req, res) {
    switch (req.params.type) {
        case 'animation':
            res.render('./gallery/index', {type: req.params.type, projects: projects})
            break;
        case 'illustration':
            res.render('./gallery/index', {type: req.params.type, projects: projects})
            break;
        case 'web':
            res.render('./gallery/index', {type: req.params.type, projects: projects})
            break;
    }
})

// gallery SHOW route
app.get('/gallery/:type/:title', function(req, res){
    projects.forEach(function(project){
        if (project.title === req.params.title) {
            res.render('gallery/' + req.params.type + '/show', {project: project}) 
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