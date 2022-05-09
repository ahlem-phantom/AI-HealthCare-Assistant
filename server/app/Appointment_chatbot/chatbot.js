const dialogflow = require('dialogflow')
const dialogflowConfig = require('../config/devkey')

const projectId = dialogflowConfig.project_id
const configuration = {
  credentials: {
    private_key: dialogflowConfig.googlePrivateKey,
    client_email: dialogflowConfig.googleClientEmail,
  },
}

const sessionId = '997753'
const languageCode = 'en-US'
const sessionClient = new dialogflow.SessionsClient(configuration)

const sessionPath = sessionClient.sessionPath(projectId, sessionId)

const talkToChatbot = async (message) => {
  console.log('message ' + message)
  const botRequest = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode: languageCode,
      },
    },
  }

  let response = await sessionClient
    .detectIntent(botRequest)
    .then((responses) => {
      //console.log(JSON.stringify(responses))

      const requiredResponse = responses[0].queryResult
      // console.log(requiredResponse)
      return requiredResponse
    })
    .catch((error) => {
      console.log('ERROR: ' + error)
    })

  return response
}


module.exports = talkToChatbot
