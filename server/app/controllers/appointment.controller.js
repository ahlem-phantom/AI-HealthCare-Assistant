const Appointement = require("../models/appointement");

const get_appointment = async (req, res) => {
  try {
    const appointments = await Appointement.find();
    res.status(200).send({msg: "appointments", appointments})
  }catch(error){
    console.log(error);
    res.status(500).send(error);
  }
};
const appointment_create_post = async (req, res) => {
    const { Title, StartDate,EndDate} = req.body;
  
    try {
      const appointment = await Appointement.create({Title, StartDate,EndDate});
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
  
  module.exports = {
    appointment_create_post,
    appointment_delete,
    get_appointment,
    UpdateAppointement,
    get_one_appointment
  };
  
  