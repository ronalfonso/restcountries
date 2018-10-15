const express = require('express');
const app = express();
const {getPlaceCountry, getPlaceCountries} = require('../models/country');


app.get('/country/:name', async (req, res) => {

    try {
        const result = await getPlaceCountry(req.params.name);
        res.send(result);
    } catch (e) {
        console.log(e);
        res.status(404).send('404 no found');
    }
});

app.get('/countries/:search', (req, res) => {

    try {
        getPlaceCountries(req.params.search, (response) => {
            res.send(response)
        });
    } catch (e) {
        console.log(e);
        res.status(404).send('404 no found');
    }
});


module.exports = app;

