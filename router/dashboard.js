const Services = require('../models/services');
const express = require('express');
const router = express.Router()


router.get('/:action', async (req, res) => {
    const action = req.params.action;
    const allServices = await Services.find().sort({_id: -1});
    res.render('dashboard/dashboard', {action: action, services: allServices});
})

router.post("/add", async (req, res) => {
    const {title, photo, price, desc, category} = req.body;
    const NewService = await new Services({
        title: title,
        description: desc,
        price: price,
        photo: photo,
        stars: 5,
        category: category
    });
    const saved = await NewService.save();
    if (saved) {
        res.redirect("/dashboard/");
    }
})

router.get('/', async (req, res) => {
    const allServices = await Services.find().sort({_id: -1});
    res.render('dashboard/dashboard', {services: allServices})
})


module.exports = router;