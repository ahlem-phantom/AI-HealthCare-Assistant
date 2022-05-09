var express = require('express');
const appointmentcontroller = require("../controllers/appointment.controller");

var router = express.Router();

    router.get("/getAll/:id", appointmentcontroller.get_appointment);
    router.get("/:id", appointmentcontroller.get_one_appointment);
    router.post("/:id", appointmentcontroller.appointment_create_post);
    router.delete("/delete/:id", appointmentcontroller.appointment_delete);
    router.put("/:id", appointmentcontroller.UpdateAppointement);

    router.post("/postlocation", appointmentcontroller.addlocation);
module.exports = router;