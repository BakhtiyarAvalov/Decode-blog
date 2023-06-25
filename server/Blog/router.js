const express = require('express');

const router = express.Router();
const {getAllBlog, deleteBlog, newBlog, editBlog} = require('./controller');
const writeDataBlog = require('./seed');

writeDataBlog()

router.get('/api/blog', getAllBlog);
router.post('/new' , newBlog);
router.post(`/edit/:id`, editBlog);
router.delete('/delete/:id', deleteBlog);

module.exports = router;