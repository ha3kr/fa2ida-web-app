const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index');
})

router.get('/privacy-policy', (req, res) => {
    res.render('privacy-policy');
})


router.get('/terms-conditions', (req, res) => {
    res.render('terms-conditions');
})


router.post('/subscribe', (req, res) => {
    res.send("mzyan " + req.body.email)
})

module.exports = router;