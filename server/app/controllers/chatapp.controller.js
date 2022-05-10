const talkToChatbot = require('../Appointment_chatbot/chatbot');
const ChatTalks = require("../models/chatbotTalks");
const UserModel = require("../models/user.model");
const Location = require("../models/location");
const getDistance = require('geolib/es/getDistance');
const geolib = require('geolib');
const {stringify} = require('flatted');
//const GeoPoint = require('geopoint');
const moment = require('moment');
const Appointment = require ('../models/appointement');
const nodemailer = require("../config/nodemailer.config");

var doc;
var docname;
var doclastname;
var docphone;

const send_message = async (req, res) => {
  const message = req.body.message
  var user = req.params.id
  const messageSent = req.body.message
  const userlatitude = req.body.Userlat
  const userlongitude = req.body.Userlng
  const Firstname = req.body.Username
  const Email = req.body.Usermail
  talkToChatbot(message)
  .then((response) => {
    res.send({ message: response })
    var messageReceived = response.fulfillmentText
    var date = new Date();
    console.log(response)
    if(response.intent.displayName === "Take_appointment_phase1"){
      console.log("Phase1\n")
      var nearestdoctor =null
      var nearestdistance=999999999999
      if(response.allRequiredParamsPresent){ 
        console.log("Phase1\n")
        //console.log(response.parameters.fields.Doctor_speciality.listValue.values.stringValue)
        UserModel.find({speciality : response.queryText}).then((results) => {
          const p = new Promise((resolve, reject)=>{
            results.map((res) => {
              Location.findById(res.location).then((result) => {
                var distance = geolib.getDistance(
                  {latitude: userlatitude, longitude: userlongitude},
                  {latitude: result.lat, longitude: result.lng})
                if(distance < nearestdistance) {
                  resolve(
                  nearestdoctor= res._id
                  )
                  nearestdistance= distance
                }
              });
            })
          })
          p.then((result) => {
            doc = nearestdoctor
            if(nearestdoctor !== null) {
              UserModel.findById(result).then((res)=>{
                messageReceived="The nearest doctor to your location is "+res.firstname+" "+res.lastname+", please pick a date by the datepicker."
                ChatTalks.create({messageSent ,messageReceived , date , user, nearestdoctor  });
                docname = res.firstname;
                doclastname = res.lastname;
                docphone = res.phone;
             })
            }     
          })
            
        }) 
        .catch((err) => {
          console.log(err);
        });
      }
      else if (response.allRequiredParamsPresent === false){
        ChatTalks.create({messageSent ,messageReceived , date , user, nearestdoctor  });
      }
    } else if(response.intent.displayName === "Take_appointment_phase2"){
      console.log("Phase2\n")
        var test = true;
      if(doc == null){
        messageReceived = "please choose a doctor before picking a date"
        ChatTalks.create({messageSent ,messageReceived , date , user  });
      }
      if(doc !== null ){
        
          StartDate = req.body.Date
          console.log("test date :"+ StartDate)
          var User = doc
          var test = true
          const pr = new Promise((resolve, reject)=>{
            resolve(
           Appointment.find({User : doc }) )
          })
          pr.then((result) =>{
            const prom = new Promise((resolve, reject)=>{
            result.map((app) =>{
                console.log(app)
               var test1 = new Date(StartDate)
               var test2 = new Date(app.StartDate)
               console.log(test1 + "and" + test2)
                if(test1.getTime() === test2.getTime())
                  {test = false}
                console.log("test"+test)
    
            } )
          resolve(test)
              })
            prom.then((res) => {
            if(res === true)
            {
            var EndDate = moment(StartDate).add(30, 'minutes');
            messageReceived = "Appointment confirmed at  you will get email with all details, and you can always cancel your appointment."
            //messageSent = messageSent + StartDate
            Appointment.create({Firstname,Email, StartDate, EndDate , User,DoctorName: docname + " " +doclastname })
            Appointment.create({Firstname,Email, StartDate, EndDate , User: user, DoctorName: docname + " " +doclastname })  
            ChatTalks.create({messageSent ,messageReceived , date , user  });
            nodemailer.sendAppointementMail(
              docname,
              doclastname,
              StartDate,
              docphone,
              Email
            );
            }
          else if (res === false) {
            messageReceived = "Date unavailable please pick another date"
            ChatTalks.create({messageSent ,messageReceived , date , user  });
          }
          })
        })
          
      }
    } else {
      console.log("Default\n")
      ChatTalks.create({messageSent ,messageReceived , date , user  });

    }


  })
  .catch((error) => {
    console.log('Something went wrong: ' + error)
    res.send({
     error: 'Error occured here',
    })
  })
};
const get_messages = async (req, res) => {
  const id = req.params.id;
    try {
      const talks = await ChatTalks.find({user : id});
      res.status(200).send({msg: "talks", talks})
    }catch(error){
      console.log(error);
      res.status(500).send(error);
    }
  };

const delete_messages = async (req,res) => {
  const id = req.params.id;
  console.log(id)
  ChatTalks.deleteMany({user : id }).then((result)  => {
    res.json();
    console.log("deleted");
  })
  .catch((err) => {
    console.log(err);
  })
}

module.exports = {
    
    send_message,
    get_messages,
    delete_messages
  };
  