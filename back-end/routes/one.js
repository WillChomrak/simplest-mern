const router = require('express').Router();
let One = require('../models/one.model');

router.route('/').get((req, res) => {
    One.find()
    .then(ones => res.json(ones))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newOne = new One ({username});

    newOne.save()
    .then(() => res.json("One added"))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    One.findByIdAndDelete(req.params.id)
    .then(() => res.json('User delete'))
    .catch(err => res.status(400).json("Error: " + err))
});

module.exports = router;