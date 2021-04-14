// REVIEW HOW THIS WORKS
//npm i express
//npm i cors
//npm i stripe

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IJ8afHi9uitH2NYJghnn4xA84goAZ5J92gCfaNu9B5Su2afWV3Vo1LFy4F5CfFQV7WuHzqRxmkaqVjc0upjcXDY00BZxMgEBf');
t
// - App config
const app = express();

// - Middle Wares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
// app.get('/', (request, response) => response.status(200).send('Hello World'));

app.post('/payments/create', async (request,response) => {
	const total = request.query.total;

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total,
		currency: 'usd'
	});

	//201 is the "okay" response
	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});

});

// - Listen
exports.api = functions.https.onRequest(app);

// Emulate
// firebase emulators:start

// Example Endpoint
//http://localhost:5001/e-store-3df82/us-central1/api