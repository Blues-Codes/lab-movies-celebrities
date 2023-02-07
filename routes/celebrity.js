var express = require('express');
var router = express.Router();

const Celebrity = require('../models/Celebrity.model');


router.get('/create', (req, res, next) => {
    res.render('celebrity/new-celebrity.hbs')
})

router.post('/create', (req, res, next)=>{
  
  Celebrity.create({
      name:req.body.name,
      occupation: req.body.occupation,
      catchphrase: req.body.catchphrase,
     
  })
  .then((createdCeleb)=>{
      console.log(createdCeleb)
      res.redirect("/celebrity")
  })
  .catch((err)=>{
    console.log(err)
    res.render('celebrities/new-celebrity.hbs')
  })
})
router.get('/', (req, res, next) => {
    Celebrity.find()
    .then((celebsfound) =>{
        res.render('celebrities/celebrities.hbs', {celebsfound})
    })
    .catch((err) =>{
        console.log(err)
    })
})



module.exports = router;