const express = require('express');
const router = express.Router();
const categories = require('../Categories/Categories');
const Categories = require('../Categories/Categories');

router.get('/', async(req, res)=>{
    const allCaregoties = await Categories.find()
    res.render("index.ejs", {category: allCaregoties})
}) 

router.get('/login', (req, res)=>{
    res.render("login.ejs")
})

router.get('/register', (req, res)=>{
    res.render("register.ejs")
})

router.get('/profile', (req, res)=>{
    res.render("profile.ejs")
})

router.get('/admin', (req, res)=>{
    res.render("adminProfile.ejs")
})

router.get('/new', async(req, res)=>{
    const allCaregoties = await categories.find()
    res.render("newBlog.ejs", {category: allCaregoties})
})

router.get('/edit', async(req, res)=>{
    const allCaregoties = await categories.find()
    res.render("editBlog.ejs", {category: allCaregoties})
})

router.get('/detailPage', async(req, res)=>{
    const allCaregoties = await categories.find()
    res.render("detailPage.ejs", {category: allCaregoties})
})

router.get('/user', async(req, res)=>{
    const allCaregoties = await categories.find()
    res.render("users.ejs", {category: allCaregoties})
})
module.exports = router;