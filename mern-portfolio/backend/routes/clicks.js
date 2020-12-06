const router = require('express').Router();
let Click = require('../models/click.model');

router.route('/').get((req, res) => {
  Click.find()
    .then(clicks => res.json(clicks))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const clickOn = req.body.clickOn;

  const newClick = new Click({clickOn});

  newClick.save()
    .then(() => res.json('You\'ve clicked!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
