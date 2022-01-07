const express = require('express');
const adatok = require("./moduljaim/adatModul")
const port=4444;

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    adatok.jsonFeltolt(req,res);
})

app.get('/mysql', (req,res) =>{
   adatok.dbFeltolt(req,res)
})

app.listen(port);