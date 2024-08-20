const Admin = require('../models/admin');
const express = require('express')
const router = express.Router()

router.post("/login", async (req, res) => {
    const {username, password} = req.body;
    const admin = await Admin.findOne({username: username})
    if (admin) {
        res.redirect("/dashboard/")
    }
})

router.get('/', (req, res) => {
    res.render("dashboard/auth/login")
})


module.exports = router