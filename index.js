require('dotenv').config()
const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const session = require('express-session')
const passport = require('./config/ppConfig')
const flash = require('connect-flash')
const isLoggedIn = require('./middleware/isLoggedIn')
const axios = require('axios')

// views (ejs and layouts) set up
app.set('view engine', 'ejs')
app.use(ejsLayouts)

// body parser middelware
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

// session middleware
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

// passport middleware
app.use(passport.initialize())
app.use(passport.session())

// flash middleware (must go AFTER session middleware)
app.use(flash())

// custom middleware
app.use((req, res, next) => {
    // before every route, attach the flash messages and current user to res.locals
    res.locals.alerts = req.flash();
    res.locals.currentUser = req.user;
    next()
})

// controllers middleware 
app.use('/auth', require('./controllers/auth'))
// home route
app.get('/', (req, res)=>{
    axios.get(`https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}`)
    .then(apiRes => {
        console.log('this is apiRes', apiRes.data)
        const gameData = apiRes.data.results 
        res.render('home.ejs', {gameData:gameData})
    })
})

app.get('/about', (req, res)=> {
    res.render('about.ejs')
})

app.get('/review', (req, res)=> {
     axios.get(`https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}`)
     .then(apiRes => {
         console.log('this is apiRes', apiRes.data)
       const gameData = apiRes.data.results 
        res.render('review.ejs')
    })
})


// profile route
app.get('/profile', isLoggedIn, (req, res)=>{
    res.render('profile')
})


app.listen(process.env.PORT || 3000, ()=>{
    console.log("auth_practice running on port 3000")
})