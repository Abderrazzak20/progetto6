const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Thing = require('./models/thing');
const userRoutes = require('./routes/user');
mongoose.connect('mongodb+srv://progetto6:salsiccia@cluster0.swcrutq.mongodb.net/mydatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));



app.use(express.json)
const stuffRoutes = require('./routes/stuff');


app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;