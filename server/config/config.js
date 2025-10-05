const dialogflowConfig = {
    type: 'service_account',
    project_id: 'symptchatbot-vhwj',
    private_key_id: '9b3117c8132871662392bd0bfb43b578d40dd221',
    private_key: process.env.DIALOGFLOW_PRIVATE_KEY,
    client_email: 'symptchatbot-vhwj@appspot.gserviceaccount.com',
    client_id: '103722989765195024404',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/symptchatbot-vhwj%40appspot.gserviceaccount.com'
  }
  module.exports = dialogflowConfig
