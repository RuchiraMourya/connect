const express = require('express');
const mongoose = require('mongoose');
var users = require('./routes/api/users');
var profile = require('./routes/api/profile');
var posts = require('./routes/api/post');
const app = express();

// DB config
const db = require("./config/keys").mongoURI;
app.get('/', (req, res) => res.send('hello'));

//Connect to MangoDB
/* mongoose
.connect(db)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err)); */

// use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));


