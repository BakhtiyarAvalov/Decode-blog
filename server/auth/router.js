const express = require('express');
const passport = require('passport')
const router = express.Router();
const{signUp, signIn, signOut} = require('./controller');


router.post('/api/signup', signUp);
router.post('/api/signin', passport.authenticate('local', {failureRedirect: '/login?erorr=1'}), signIn);
router.get('/api/signout', signOut)
module.exports = router;