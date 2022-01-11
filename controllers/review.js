const { render } = require("ejs");
const db = require("../models");
const router = require("./igdb");

//POST route - making user post a review under a game
router.post('/', (req, res) => {
   db.user.create({
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
    //  res.send("You've reached the review route!")
    console.log(req.params.id)
     axios.get(`https://api.rawg.io/api/${req.params.id}?key=${process.env.RAWG_API_KEY}`)
     .then(apiRes => {
         console.log('this is apiRes', apiRes.data)
       const gameData = apiRes.data.results 
        res.render('review.ejs')
    })
  })
   .catch((error) => {
     res.status(400).render('main/404')
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

