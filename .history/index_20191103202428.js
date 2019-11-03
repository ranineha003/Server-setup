const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.Promise = global.Promise
mongoose.connect('config.uri', ()=>{
    if(err){
        console.log(Error,err);
    }else{
        console.log('Connected to Database:' +config.db);
    }

});
 
app.get('*',  (req, res) =>{
  res.send('Hello Neha');
});
 
app.listen(8080, () =>{
    console.log('Listening on port 8080');
});