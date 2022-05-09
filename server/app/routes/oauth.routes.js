var express = require('express');
router = express.Router();
const request = require('superagent');
require('dotenv').config()

/* Handle LinkedIn OAuth callback and return user profile. */
router.get('/', function(req, res, next) {
  requestAccessToken(req.query.code,req.query.state)
  .then((response) => {
    requestEmail(response.body.access_token)
    .then(response => {
      console.log(response.body)
      res.render('callback', { profile: response.body});
    })
  })
  .catch((error) => {
    res.status(500).send(`${error}`)
    console.error(error)
  })
});

function requestAccessToken(code,state) {
  return request.post('https://www.linkedin.com/oauth/v2/accessToken')
    .send('grant_type=authorization_code')
    .send(`redirect_uri=http://localhost:8080/oauth`)
    .send(`client_id=78zj0z0qx941dq`)
    .send(`client_secret=mRhE7IM3Fjq55QJl`)
    .send(`code=${code}`)
    .send(`state=${state}`)
}

function requestProfile(token) {
  return request.get('https://api.linkedin.com/v2/me?projection=(id,localizedFirstName,localizedLastName,profilePicture(displayImage~digitalmediaAsset:playableStreams))')
  .set('Authorization', `Bearer ${token}`)
}


function requestEmail(token) {
    return request.get('https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))')
    .set('Authorization', `Bearer ${token}`)
  }
  
module.exports = router;

  