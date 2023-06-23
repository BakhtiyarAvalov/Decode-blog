const express = require('express');
const router = express.Router();
const categories = require('../Categories/Categories');
const Categories = require('../Categories/Categories');

router.get('/', async(req, res)=>{
    const allCaregoties = await Categories.find()
    res.render("index.ejs", {category: allCaregoties, user: req.user ? req.user : {}})
}) 

router.get('/login', (req, res)=>{
    res.render("login.ejs", {user: req.user ? req.user : {}})
})

router.get('/register', (req, res)=>{
    res.render("register.ejs", {user: req.user ? req.user : {}})
})

router.get('/profile/:id', (req, res)=>{
    res.render("profile.ejs", {user: req.user ? req.user : {}})
})

router.get('/admin', (req, res)=>{
    res.render("adminProfile.ejs", {user: req.user ? req.user : {}})
})

router.get('/new', async(req, res)=>{
    const allCaregoties = await categories.find()
    res.render("newBlog.ejs", {category: allCaregoties, user: req.user ? req.user : {}})
})

router.get('/edit', async(req, res)=>{
    const allCaregoties = await categories.find()
    res.render("editBlog.ejs", {category: allCaregoties, user: req.user ? req.user : {}})
})

router.get('/detailPage', async(req, res)=>{
    const allCaregoties = await categories.find()
    res.render("detailPage.ejs", {category: allCaregoties, user: req.user ? req.user : {}})
})

router.get('/user', async(req, res)=>{
    const allCaregoties = await categories.find()
    res.render("users.ejs", {category: allCaregoties, user: req.user ? req.user : {}})
})
module.exports = router;