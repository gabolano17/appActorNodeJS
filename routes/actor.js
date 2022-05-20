const Actor = require('../models/Actor');

const router = require('express').Router();

router.get("/", (req, res) => {
    Actor.findAll().then(result => res.json(result));
})

router.get("/:id", (req, res) => {
    const id = req.params.id;
    Actor.findByPk(id).then(result => res.json(result));
})

module.exports = router;