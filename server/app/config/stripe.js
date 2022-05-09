const configureStripe = require('stripe')

const STRIPE_SECRET_KEY = 'pk_test_51KkgQ1BHNzRaB25PEYP77hzfRdhQQhRyu58DiteDA7sHdE4QG5gsOQYzUG9JPvGtF0eBFEvH7ZyMEXqnn3Nc71xQ00u2WOqoGf'

const stripe = configureStripe(STRIPE_SECRET_KEY)

module.exports = stripe