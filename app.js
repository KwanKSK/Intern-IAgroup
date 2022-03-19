var express = require('express');
const path = require('path');
var app = express();

app.use(express.static('public'));
app.use(express.static('javascript'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + 'public'));

app.get('/hero', function (req, res) {
    res.render("../view/hero");
});
app.get('/posts', function (req, res) {
    res.render("../view/posts");
});
app.get('/triangle', function (req, res) {
    res.render("../view/triangle");
});
app.get('/idCard', function (req, res) {
    res.render("../view/idCard");
});
app.get('/pyramid', function (req, res) {
    res.render("../view/pyramid");
});

app.listen('4000', function (req, res) {
    console.log('Server is running');
});
