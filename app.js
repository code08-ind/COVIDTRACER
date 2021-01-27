const express = require('express');
const path = require('path');
const app = express();
const request = require('request');

let localHost = '127.0.0.1';

app.use(express.static(__dirname + '/static'));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.get("/", (req, res) => {
    res.render("search");
});

app.get("/info", (req, res) => {
    let result = req.query.info;
    let url = `https://corona.lmao.ninja/v2/countries/${result}`;
    request(url, (error, response, body) => {
        if (!error && res.statusCode == 200) {
            let data = JSON.parse(body);
            res.render("info", { data: data });
        }
    });
});

let port = process.env.PORT | 5000;

app.listen(port, localHost, () => {
    console.log(`Covid-19 App Working At Port ${port}.`);
});
