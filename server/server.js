require('./config/config');
// const argv = require('./config/yargs').argv;
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use( require('./routes/country'));

app.listen(port, () => {
    console.log(`Escuchando puerto: ${port}`);
});