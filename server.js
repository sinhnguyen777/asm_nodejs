const express    = require('express');
const path       = require('path');
var bodyParser   = require('body-parser');
const fileUpload = require('express-fileupload');
var mysql        = require('mysql');
var mysql2        = require('mysql2');
const Sequelize = require('sequelize');
const { Router } = require('express');
const app        = express();
const port       = 3000;

app.use(fileUpload());
app.use(bodyParser.urlencoded());

//Khai bao va su dung template ejs
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

//router
const routerSite = require('./router/site');
app.use('/', routerSite);


app.listen(port, ()=>{
    console.log(`ung dung dang chay voi port: ${port}`);
});
