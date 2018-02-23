const axios = require('axios');
const express = require('express');
const bodyPaser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const authController = require('./controllers/authController');
const userController = require('./controllers/userController');
const checkUserStatus  = require('./middlewares/checkUserStatus');

require('dotenv').config();

const app = express();
app.use(bodyPaser.json());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
}).catch(error => {
    console.log('massive error', error);
});

app.use(session({
  secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        // Two weeks
        maxAge: 60 * 60 * 24 * 14 * 1000
    }
}));
// app.use(express.static(`${__dirname}/../build`));

app.get('/auth/callback', authController.connect);
app.get('/api/user-data', checkUserStatus, userController.getUser);
app.post('/api/logout', userController.logoutUser);




const SERVER_PORT = process.env.SERVER_PORT || 4000;
app.listen(SERVER_PORT, () => {
  console.log('Server listening on port ' + SERVER_PORT);
});
