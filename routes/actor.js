const Actor = require('../models/Actor');

const router = require('express').Router();

router.get("/", async(req, res) => {
    const actor = await Actor.findAll();
    res.json(actor);
})

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const actor = await Actor.findByPk(id)
    res.json(actor);
})

module.exports = router;