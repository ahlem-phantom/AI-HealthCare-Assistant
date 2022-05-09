require("dotenv").config();
const nodemailer = require("nodemailer");
const config = require("../config/auth.config");

const user = config.user;
const pass = config.pass;

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: user,
    pass: pass,
  },
});

module.exports.sendConfirmationEmail = (name, email, confirmationCode) => {
  transport.sendMail({
    from: user,
    to: email,
    subject: "Please confirm your account",
    html: `<h1>Email Confirmation</h1>
        <h2>Hello ${name}</h2>
        <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
        <a href=http://localhost:8081/confirm/${confirmationCode}> Click here</a>
        </div>`,
  }).catch(err => console.log(err));
};

module.exports.sendResetPasswordEmail = (name, email, confirmationCode) => {
  transport.sendMail({
    from: user,
    to: email,
    subject: "[NearestDoctor] Please reset your password",
    html: `<h1>Reset your account's password </h1>
        <h2>NearestDoctor password reset</h2>
        <p>We heard that you lost your password. Sorry about that!<br>
        But don’t worry! You can use the following button to reset your password:</p>
        <a href=http://localhost:8081/resetPassword/${confirmationCode}> Click here</a>
        </div>`,
  }).catch(err => console.log(err));


  
};

module.exports.sendAppointementMail = (docname, doclastname,StartDate,docphone,Email) => {
  transport.sendMail({
    from: user,
    to: Email,
    subject: "[NearestDoctor] Appointement Confirmation",
    html: `<h1>Get Your Appointement Details </h1>
        <p>You have an appointment with ${docname} ${doclastname} at ${StartDate}if you want to cancel the appointment call this number : ${docphone}</p>
        </div>`,
  }).catch(err => console.log(err));
};