const express = require('express')
const router = express.Router()
const igdb = require('igdb')

app.get('/', (req, res)=>{
    res.render('home.ejs')
})

app.get('/review', (req, res)=>{
    res.render('review.ejs')
})



module.exports = router