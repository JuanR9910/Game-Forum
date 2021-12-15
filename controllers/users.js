 const { render } = require("ejs");
const db = require("../models");
 const router = require("./igdb");

 //Post
 router.post('/', (req, res) => {
   db.user.create({
     content: req.body.content,
     userId: req.body.userId
   })
   .then((post) => {
     res.redirect('/views/home')
   })
   .catch((error) => {
     res.status(400).render('main/404')
   })
 })

// Get
 router.get('/views/home', (req, res) => {
   db.user.findAll()
   .then((comments) => {
     res.render('views/home', { user: user })
   })
   .catch((error) => {
     res.status(400).render('main/404')
   })
 })




 router.get('/:id', (req, res) => {
    db.user.findOne({
       where: { id: req.params.id },
        include: [db.comment]
    })
  .then((comment) => {
     if(!comment) throw Error()
     console.log(comment.user)
     res.render('views/home'), {user: comment}
  }).catch((error) => {
     console.log(error)
     res.status(400).render('main/404')
  })
})