// Back-end running on a firebase cloud function (Creation of an api)

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IJ8afHi9uitH2NYJghnn4xA84goAZ5J92gCfaNu9B5Su2afWV3Vo1LFy4F5CfFQV7WuHzqRxmkaqVjc0upjcXDY00BZxMgEBf');


const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('Urban Touch is online')); // (Test Snippet)

app.post('/payments/create', async (request,response) => {
	const total = request.query.total;
	
	console.log("Payment received: ", total)

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total,
		currency: 'usd'
	})
	
	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	})

});

exports.api = functions.https.onRequest(app);
