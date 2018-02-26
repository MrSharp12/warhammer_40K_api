const express = require('express');
const quotes= require('./data/quotes.json')

const app = express();

app.get('/quotes', (req, res) => {
    res.json(quotes);
});

app.get('/quotes/random', (req, res) => {
    res.json(quotes[Math.floor(Math.random() * quotes.length)]);
});

// app.get('/quotes/:topics', (req, res) => {

// });

module.exports = app;
