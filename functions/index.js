/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51IJT8nLA8fMhuqEX8OqikS6OXknGGY2TDF0NJCG05sWMtxY8XOW1U32ongKJccrqliEb1RXopCI5Rmu13A3nVmrp001qaxr1p9");
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hey world"));


app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "gbp",
  });
  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
