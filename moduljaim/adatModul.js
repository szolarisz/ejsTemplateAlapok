const fs = require('fs');
const mysql = require('mysql');

const dataFile = "./datas/hivasok.json";

module.exports.jsonFeltolt = function (req,res){
    fs.readFile(dataFile, (err, data) =>{
        if(err) throw err;
        const hivasok = JSON.parse(data);
        res.render("index", {hivasok: hivasok} );
    })
}

const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    database: "hivasok",
    user: "root",
    password: ""
})

module.exports.dbFeltolt = function (req,res){
    myQuery = "SELECT kezdOra,kezdPerc, kezdMp, vegeOra, vegePerc, vegeMp FROM hivasok";
    connection.query(myQuery, (err, result, fields) => {
        if( err ) throw err;
        const sorok = JSON.parse(JSON.stringify(result));
        res.render("mysql", {hivasok: sorok} );
    })
}