const express = require('express');
const generateRandomNumber = require('./business-logics/generateRandomNumber');
const generatePerson = require('./business-logics/generatePerson');
const breakdownString = require('./business-logics/breakdownString');

const app = express();
app.use(express.json());

app.get('/api/random', (req, res) => {
	try {
		const startValue = parseInt(req.query.start);
		const endValue = parseInt(req.query.end);
		res.status(200).json({
			startValue,
			endValue,
			randomNumber: generateRandomNumber(startValue, endValue),
		});
	} catch (error) {
		res.status(422).json({ message: 'Invalid query params' });
	}
});

app.get('/api/get-person', (req, res) => {
	try {
		const person = req.query;
		res.status(200).json(generatePerson(Object.keys(person)));
	} catch (error) {
		res.status(422).json({ message: 'Invalid query params' });
	}
});

app.get('/api/breakdown', (req, res) => {
	try {
		const str = req.query.str;
		res.status(200).json(breakdownString(str));
	} catch (error) {
		res.status(422).json({ message: 'Invalid query params' });
	}
});

app.listen(4000, () => {
	console.log('Server is listening on port 4000');
});
