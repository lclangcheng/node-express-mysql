const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const db = require('./config/db');
const routes = require('./routes/routes');

const app = express();
const port = 3000;

db.connect((err) => {
	if (err) throw new Error(err);
	console.log('Connected to mySQL successfully! :)');
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);

app.listen(port, (err) => {
	if (err) throw new Error(err);
	console.log(`Listening on port ${port}`);
});