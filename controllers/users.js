 const { render } = require("ejs");
const db = require("../models");
 const router = require("./igdb");

 router.get('/:id', (req, res) => {
    db.user.findOne({
       where: { id: req.params.id },
        include: [db.comment]
    })
  .then((comment) => {
     if(!comment) throw Error()
     console.log(comment.user)
     res.render('partials/home'), {user: comment}
  }).catch((error) => {
     console.log(error)
     res.status(400).render('main/404')
  })
})