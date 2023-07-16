const express = require('express');
const router = express.Router();
const Categories = require('../Categories/Categories');
const blog = require('../Blog/Blog');



router.get('/', async(req, res)=>{
    const allCaregories = await Categories.find()
    const getAllBlog = await blog.find().populate('category').populate('author')
    res.render("index.ejs", {category: allCaregories, user: req.user ? req.user : {}, data: getAllBlog})
}) 

router.get('/login', (req, res)=>{
    res.render("login.ejs", {user: req.user ? req.user : {}})
})

router.get('/register', (req, res)=>{
    res.render("register.ejs", {user: req.user ? req.user : {}})
})

router.get('/profile/:id', async(req, res)=>{
    profileUser = req.params.id
    const getAllBlog = await blog.find({author: profileUser}).populate('category').populate('author')
    res.render("profile.ejs", {user: req.user ? req.user : {}, data: getAllBlog , profileUser})
})

router.get('/admin', (req, res)=>{
    res.render("adminProfile.ejs", {user: req.user ? req.user : {}})
})

router.get('/new', async(req, res)=>{
    const allCaregories = await Categories.find()
    res.render("newBlog.ejs", {category: allCaregories, user: req.user ? req.user : {}})
})

router.get('/edit/:id', async(req, res)=>{
    const allCaregories = await Categories.find()
    const blogData = await blog.findById(req.params.id)
    res.render("editBlog.ejs", {category: allCaregories, user: req.user ? req.user : {}, data: blogData})
})

router.get('/detailPage/:id', async(req, res)=>{
    const allCaregories = await Categories.find()
    const getAllBlog = await blog.findById(req.params.id).populate('category').populate('author')
    res.render("detailPage.ejs", {category: allCaregories, user: req.user ? req.user : {}, data: getAllBlog})
})

router.get('/user', async(req, res)=>{
    const allCaregories = await Categories.find()
    const getAllBlog = await blog.find()
    res.render("users.ejs", {category: allCaregories, user: req.user ? req.user : {}, data: getAllBlog})
})
module.exports = router;