const express = require('express')
const { WebhookClient } = require('dialogflow-fulfillment')

const router = express.Router()

router.post('/', (req, res) => {
  const agent = new WebhookClient({ request: req, response: res })
  let intentMap = new Map()
  agent.handleRequest(intentMap)
})

module.exports = router
