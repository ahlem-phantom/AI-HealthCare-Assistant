const Appointement = require("../models/appointement");
const Location = require("../models/location");



const get_appointment = async (req, res) => {
  const IdUser = req.params.id;
  try {
    const appointments = await Appointement.find({User :IdUser});
    res.status(200).send({msg: "appointments", appointments})
  }catch(error){
    console.log(error);
    res.status(500).send(error);
  }
};
const appointment_create_post = async (req, res) => {
    const User = req.params.id;
    const {Firstname,Lastname,Email, Phone, StartDate, EndDate} = req.body;
  
    try {
      const appointment = await Appointement.create({Firstname,Lastname,Email, Phone, StartDate, EndDate , User});
      res.status(201).json({ appointment: appointment});
    }
    catch(err) {
      const errors = handleErrors(err);
      res.status(400).json({ errors });
    }
};
const appointment_delete = (req, res) => {
    const id = req.params.id;
   
    Appointement.findByIdAndDelete(id).then((result) => {
         res.json();
      }) 
      .catch((err) => {
        console.log(err);
      });
    };
    const UpdateAppointement = async (req, res) => {
      try {
          const A = await Appointement.updateOne(
              { _id: req.params.id },
              { $set: { ...req.body } }
          );
          console.log(A);
          if (A.modifiedCount) {
              return res.send({ msg: "updated" });
          }
          res.send({ msg: "there is no modification" });
      } catch (error) {
          res.send({ msg: "can not modify it" });
      }
  };
    const get_one_appointment = async (req, res) => {
      const id = req.params.id;
      try {
        const appointment = await Appointement.findById(id);
        res.status(200).send({msg: "appointment", appointment})
      }catch(error){
        console.log(error);
        res.status(500).send(error);
      }
    };
    const addlocation = async (req, res) => {
      const { lat , lng} = req.body;
    
      try {
        const loc = await Location.create({lat, lng});
        res.status(201).json({ location : loc});
      }
      catch(err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
      }
  };
    
  
  module.exports = {
    appointment_create_post,
    appointment_delete,
    get_appointment,
    UpdateAppointement,
    get_one_appointment,
    addlocation
    
  };
  
  