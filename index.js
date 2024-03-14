require('dotenv').config();
const express = require('express');
const { hamstersCollection } = require('./src/db/index.js');

const port = 3000;

const app = express();

// routes
app.use(express.json());

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
