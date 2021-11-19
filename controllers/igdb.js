const express = require('express')
const router = express.Router()
const igdb = require('igdb')

app.get('/', (req, res)=>{
    res.render('home.ejs')
})



module.exports = router