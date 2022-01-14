require("dotenv").config()
const { render } = require("ejs");
const db = require("../models");
const express = require("express")
const router = express.Router();
const axios = require('axios')


 // GET route
router.get('/:id', (req, res) => {
  // const promiseAxios = new Promise((resolve, reject) => {
    console.log(req.params.id)
    axios.get(`https://rawg.io/api/games/${req.params.id}?key=${process.env.RAWG_API_KEY}`)
       .then(apiRes => {
            //  console.log('this is apiRes', apiRes.data)
          const gameData = apiRes.data
            console.log(gameData)
          db.comment.findAll({
            where: {gameId:req.params.id}
          })
          .then((foundComments)=>{
            console.log("cheese" ,foundComments)
            res.render('review', {gameData:gameData, reviews:foundComments})
          }).catch((error)=>{
            console.log('problem finding comments')
          })
        }).catch((error)=>{
          console.log('problem finding axios call')
        })
      // })
  
//   const promiseDatabase = new Promise((resolve, reject) => {
//     const allComments = db.comment.findAll({
//       where: {gameId:req.params.id}
//   })
//   resolve(allComments)
//   })
//  Promise.all([promiseAxios, promiseDatabase]).then((values)=>{
//    const gameData = values[0]
//    const reviews = values[1]
//    console.log(reviews)
//    res.render('review', {gameData:gameData, reviews:reviews})
//  })
//  .catch(console.error)
})
    
  
//POST route - making user post a review under a game
router.post('/:id', (req, res) => {
    // res.send("We've hit the POST route!")
    
   const gameId = req.params.id
  const user = res.locals.currentUser
   console.log(gameId)
   console.log(req.body.content)
   console.log(res.locals.currentUser)
     db.comment.create({
       gameId: gameId,
     content: req.body.content,
       userId: user.id
      })
    .then((post) => {
       res.redirect(`/review/${gameId}`)
     })
     .catch((error) => {
       res.status(400)
    })
  })
// PUT route
  // router.put('/:id',(req, res) => {
  // db.user.put({
  //   gameid: req.body.title,
  //   content: req.body.content,
  //   userid: req.body.userid
  // })
  // .then((put) => {
  //   res.redirect('/review.ejs')
  // })
  // .catch((error) => {
  //   res.status(400)
  // })
  // })

// DELETE route
  // router.delete('/:id', (req, res) => {
  //   db.comment.delete({
  //     id: req.body.comment.id
  //   })
  //   .then((delete) => {
  //     res.redirect('/review.ejs')
  //   })
  //   .catch((error) => {
  //     res.status(400)
  //   })
  // })

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