const express = require('express');

const app = express();

require('./server/config/db');

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded());

app.set ("view engine", "ejs")
app.use(require('./server/pages/router'))
app.use(require('./server/Categories/router'))
app.use(require('./server/auth/router'))

const PORT = 8001;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})