const express = require('express');
const app = express();
const path = require('path');

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Admin:jWnA0n2uoGJe2QdK@p7groupomania.btb4uov.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

const postRoutes = require('./routes/post'); 
const userRoutes = require('./routes/user'); 

const cors = require('cors');

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/images', express.static(path.join(__dirname, 'images'))); 

app.use('/api/posts', postRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;