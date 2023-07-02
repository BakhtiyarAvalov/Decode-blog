const express = require('express');

const router = express.Router();
const {getAllBlog, deleteBlog, newBlog, editBlog} = require('./controller');
const {upload} = require('./multer')
const {isAuth} = require('../auth/middlewares')
const writeDataBlog = require('./seed');


writeDataBlog()

router.get('/api/blog', getAllBlog);
router.post('/api/new' , isAuth , upload.single('image'), newBlog);
router.post(`/edit/:id`, isAuth, upload.single('image'), editBlog);
router.delete('/delete/:id', isAuth, deleteBlog);

module.exports = router;