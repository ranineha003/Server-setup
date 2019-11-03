const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');


mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
 
app.get('*',  (req, res) =>{
  res.send('Hello Neha');
});
 
app.listen(8080, () =>{
    console.log('Listening on port 8080');
});