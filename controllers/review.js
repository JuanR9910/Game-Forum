require("dotenv").config()
const { render } = require("ejs");
const db = require("../models");
const express = require("express")
const router = express.Router();
const axios = require('axios')

//POST route - making user post a review under a game
 router.post('/review.ejs', (req, res) => {
   db.user.create({
     gameid: req.body.gameid,
    content: req.body.content,
     userId: req.body.userId
    })
  .then((post) => {
     res.redirect('/views/review')
   })
   .catch((error) => {
     res.status(400).render('main/404')
   })
  })


 // GET route
router.get('/:id', (req, res) => {
     axios.get(`https://rawg.io/api/games/${req.params.id}?key=${process.env.RAWG_API_KEY}`)
     .then(apiRes => {
         console.log('this is apiRes', apiRes.data)
       const gameData = apiRes.data
       console.log("THIS IS OUR CONSOLE LOG", gameData)
        res.render('review.ejs', {gameData:gameData})
    })
      .catch((error) => {
        res.status(400).render('main404')
    })
  })
   
  router.put('/review.ejs',(req, res) => {
  db.user.put({
    gameid: req.body.title,
    content: req.body.content,
    userid: req.body.userid
  })
  .then((put) => {
    res.redirect('/review.ejs')
  })
  .catch((error) => {
    res.status(400).render('main/404')
  })
  })


  router.delete('/review.ejs', (req, res) => {
    db.user.delete({
      gameid: req.body.title,
      content: req.body.content,
      userid: req.body.userid
    })
    .then((delete) => {
      res.redirect('/review.ejs')
    })
    .catch((error) => {
      res.status(400).render('main/404')
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