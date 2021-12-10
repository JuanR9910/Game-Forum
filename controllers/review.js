const { render } = require("ejs");
const db = require("../models");
const router = require("./igdb");

router.get('/:id', (req, res) => {
    db.user.findOne({
       where: { id: req.params.id },
        include: [db.review]
    })
  .then((review) => {
     if(!review) throw Error()
     console.log(review.user)
     res.render('partials/review'), {user: review}
  }).catch((error) => {
     console.log(error)
     res.status(400).render('main/404')
  })
})