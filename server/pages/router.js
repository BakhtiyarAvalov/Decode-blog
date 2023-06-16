const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render("index.ejs")
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

router.get('/new', (req, res)=>{
    res.render("newBlog.ejs")
})

router.get('/edit', (req, res)=>{
    res.render("editBlog.ejs")
})

router.get('/mainPage', (req, res)=>{
    res.render("mainPage.ejs")
})

router.get('/user', (req, res)=>{
    res.render("users.ejs")
})
module.exports = router;