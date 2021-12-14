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
 router.get('/views/review', (req, res) => {
   db.user.findAll()
   .then((users) => {
     res.render('views/review', { user: user })
   })
   .catch((error) => {
     res.status(400).render('main/404')
   })
 })

router.get('/:id', (req, res) => {
    db.user.findOne({
       where: { id: req.params.id },
        include: [db.review]
    })
  .then((review) => {
     if(!review) throw Error()
     console.log(review.user)
     res.render('/views/review'), {user: review}
  }).catch((error) => {
     console.log(error)
     res.status(400).render('main/404')
  })
})