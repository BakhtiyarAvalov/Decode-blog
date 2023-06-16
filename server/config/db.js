const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/decodeblog').then(()=>{
console.log('Connected to MongoDB')
}).catch((e) =>{
    console.log('Ffiled to connect to MongoDB');
});