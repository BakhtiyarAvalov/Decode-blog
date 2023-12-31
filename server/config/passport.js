const passport = require('passport');
const bcrypt = require('bcrypt');
const localStrategy = require('passport-local')
const User = require('../auth/User')

passport.use(new localStrategy(
    {
        usernameField: 'email'
    },
    function(email, password, done){
        User.findOne({email}).then(user =>{
            bcrypt.compare(password, user.password, function(err, result){
                if(err) {return done(err)}
                if(result) {return done(null, user)}
            })
        }).catch(e =>{
            return done(err)
        })
    }
))

passport.serializeUser(function(user, done){
    done(null, user._id)   
});

passport.deserializeUser(function(id, done){
    User.findById(id).then((user, err) =>{
        done(err, user)
    })  
});