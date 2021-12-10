const express = require('express')
const router = express.Router()
const igdb = require('igdb')

app.get('/', (req, res)=>{
    res.render('home.ejs')
})

app.get('/review', (req, res)=>{
        axios.get(`https://api.rawg.io/api/games/:id?key=${process.env.RAWG_API_KEY}`)
        .then(apiRes => {
            console.log('this is apiRes', apiRes.data)
          const gameData = apiRes.data.results 
           res.render('review.ejs')
       })
   })



module.exports = router