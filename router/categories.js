const Services = require('../models/services');
const express = require('express');
const router = express.Router()


router.get("/facebook", async (req, res) => {
    const services = await Services.find({category: "facebook"})
    res.render("services", {category: "فيسبوك", services: services})
})

router.get("/ecommerce_store", (req, res) => {
    res.render("services", {category: "متجر الكتروني"})
})

router.get("/youtube", (req, res) => {
    res.render("services", {category: "يوتيوب"})
})

router.get("/instagram", async (req, res) => {
    const services = await Services.find({category: "instagram"})
    res.render("services", {category: "انستقرام", services: services})
})

router.get("/tiktok", (req, res) => {
    res.render("services", {category: "تيك توك"})
})

router.get("/google_seo", (req, res) => {
    res.render("services", {category: "جوجل seo"})
})

router.get("/web_design", (req, res) => {
    res.render("services", {category: "تصميم مواقع الويب"})
})

router.get("/video_editing", async (req, res) => {
    const services = await Services.find({category: "video_editing"})
    res.render("services", {category: "فيديو", services: services})
})

module.exports = router;