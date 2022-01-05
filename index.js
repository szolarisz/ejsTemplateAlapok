const express = require('express');
const fs = require('fs');
const port=4444;

const app = express();

const dataFile = "./datas/hivasok.json";

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    fs.readFile(dataFile, (err, data) =>{
        if(err) throw err;
        const hivasok = JSON.parse(data);
        res.render("index", {hivasok: hivasok} );
    })
})

app.listen(port);