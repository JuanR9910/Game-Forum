require("dotenv").config()
const { render } = require("ejs");
const db = require("../models");
const express = require("express")
const router = express.Router();
const axios = require('axios')

//POST route - making user post a review under a game
// router.post('/', (req, res) => {
//    db.user.create({
//      content: req.body.content,
//      userId: req.body.userId
//    })
//    .then((post) => {
//      res.redirect('/views/review')
//    })
//    .catch((error) => {
//      res.status(400).render('main/404')
//    })
//  })


 // GET route
router.get('/:name', (req, res) => {
     axios.get(`https://rawg.io/api/games?key=${process.env.RAWG_API_KEY}&search=${req.params.name}`)
     .then(apiRes => {
         console.log('this is apiRes', apiRes.data)
       const gameData = apiRes.data.results
       console.log(gameData)
      res.render('review.ejs', {gameData:gameData})
    })
      .catch((error) => {
        res.status(400).render('main404')
    })
  })
   
  

// router.get('/:id', (req, res) => {
//     db.user.findOne({
//        where: { id: req.params.id },
//         include: [db.review]
//     })
//   .then((review) => {
//      if(!review) throw Error()
//      console.log(review.user)
//      res.render('/views/review'), {user: review}
//   }).catch((error) => {
//      console.log(error)
//      res.status(400).render('main/404')
//   })
// })

// Create other routes for the review page

module.exports = router;