const stripe = require('stripe')('sk_test_51KkgQ1BHNzRaB25PYHB7o4IWHpezm8MWtL6Nv6V8kG5MM7bHgpuBSTOPfWqEhwAPdaY5pwd92YfBRhowWqk4fxze00Hrpp6Tyy');

let mongoose = require('mongoose'),
request = require('request'),
  express = require('express'),
  router = express.Router();
const stripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr })
    console.log(stripeErr)
  } else {
    res.status(200).send({ success: stripeRes })
  }
}


    router.route('/').get((req, res) => {
    res.send({ message: 'Stripe Checkout server!', timestamp: new Date().toISOString })
    });

    router.route('/').post((req, res) => {
    stripe.charges.create(req.body, stripeCharge(res))
  });


module.exports = router;