const Services = require('../models/services');
const express = require('express');
const router = express.Router()


router.get('/:id', async (req, res) => {
    const serviceId = req.params.id;
    const service = await Services.findById(serviceId);
    res.render("service", {
        service: service
    })
})


module.exports = router;