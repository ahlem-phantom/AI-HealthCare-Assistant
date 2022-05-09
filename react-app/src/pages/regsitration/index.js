/* eslint-disable import/no-anonymous-default-export */
import React, { Fragment, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
//MY MODULES
import UserDetails from "./UserDetails";
import UserSummary from "./UserSummary";
import UserPayment from "./UserPayment";
import FormComplete from "./FormComplete";
//GENERAL
import { Box, Typography, Snackbar, SnackbarContent } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
//STEPPER
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
//FORM
import Button from "@material-ui/core/Button";
//CONTEXT
import { UserContext } from "./UserContext";
import UserPlan from "./UserPlan";
import AuthService from "../../services/auth.service";
import { useState } from "react";
import Swal from 'sweetalert2';
var bcrypt = require('bcryptjs');


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiStepIcon-active": { color: "#009efb" },
    "& .MuiStepIcon-completed": { color: "#009efb" },
    "& .Mui-disabled .MuiStepIcon-root": { color: "#009efb" },
    padding: 0,
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(8, 12),
    },
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(4, 6),
    },

  },
  center: {
    textAlign: "center",
  },
  content: {
    padding: theme.spacing(3, 0, 3, 5),

  },
  buttonsContainer: {
    margin: theme.spacing(2, 0),
  },
  button: {
    marginRight: theme.spacing(2),
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  message: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const steps = [
  "User Basic Information",
  "User Payment Plan",
  "User Payment Credit Card",
  "Summary",
];

//MAIN COMPONENT
export default (props) => {
  const [completed, setCompleted] = React.useState(false);
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [errors] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [state, setState] = useContext(UserContext);
  const userrole = window.localStorage.getItem('role');
  const userusername = window.localStorage.getItem('username');

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const isStepOptional = (step) => {
    return step === 1;
  };
  const handleCloseSnackbar = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeStep < steps.length - 1) handleNext();
    else {
      setCompleted(true);
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0 :
        return <UserDetails />;
      case 1:
        return <UserPlan />;
      case 2:
        return <UserPayment />;
      case 3:
        return <UserSummary />;
      default:
        return "Unknown step";
    }
  };

  const handleError = (e) => {
    errors[e.target.name] = e.target.validationMessage;
    setState({ ...state, errors: { ...errors } });
    setOpen(true);
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const handleChange = (e) => {
    setShowPassword((show) => !show);
    setShowCPassword((show) => !show);

    //PASSWORD MATCHING
    if (
      e.target.name === "confirmPassword" &&
      e.target.value !== state.user.password
    ) {
      e.target.setCustomValidity("Passwords are not matching");
    } else {
      e.target.setCustomValidity("");
    }
    if (e.target.name === "password") {
      const confirm = e.target.form.querySelector(
        "input[name='confirmPassword']"
      );
      // WHEN WE CHANGE PASSWORD, WE WANT TO VALIDATE CONFIRM PASSWORD AS WELL
      if (e.target.value === state.user.confirmPassword) {
        delete errors[confirm.name];
        confirm.setCustomValidity("");
      } else {
        confirm.setCustomValidity("Passwords are not matching");
        errors[confirm.name] = confirm.validationMessage;
      }
    }
    if (e.target.validity.valid) {
      //OTHER ELEMENTS
      delete errors[e.target.name];
    } else {
      errors[e.target.name] = e.target.validationMessage;
    }
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setState({
      ...state,
      user: { ...state.user, [e.target.name]: value },
      errors: { ...errors },
    });
  };


  const hashedPassword = bcrypt.hashSync(state.user.password, '$2a$10$CwTycUXWue0Thq9StjUM0u') // hash created previously created upon sign up

  const userObject = {
    firstname: state.user.firstname,
    lastname: state.user.lastname,
    username: userusername,
    email: state.user.email,
    birthdate: state.user.birthdate,
    phone: state.user.phone,
    creationDate : new Date(),
    paymentDate : new Date(),
    paymentPlan : 'premium',
    password: hashedPassword,
    role: userrole,
  };
  const submit = (e) => { 
    e.preventDefault();
    AuthService.register(userObject.username, userObject.email, state.user.password, userObject.birthdate, userObject.firstname, userObject.lastname, userObject.phone, userrole);
    Swal.fire({  
      title: 'Successfull resigration',  
      text: 'Your account have been creacted successfully, please check your email to activate your account',
      icon: 'success'
    }).then(window.location.href='login')
  }


  return (
    <Fragment >
      {!completed && (
        <Box className={classes.root} >
          <Stepper activeStep={activeStep} orientation="vertical" style={{    backgroundColor: 'transparent'  }} >
            {steps.map((label, index) => {
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption"></Typography>
                );
              }

              return (
                <Step key={index}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                  <StepContent>
                    <form
                      onSubmit={handleSubmit}
                      onInvalid={handleError}
                      onChange={handleChange}
                      className={classes.content}
                    >
                      {getStepContent(activeStep)}
                      <div className={classes.buttonsContainer}>
                        <Button
                          disabled={activeStep === 0}
                          className={classes.button}
                          variant="contained"
                          onClick={handleBack}
                        >
                          Back
                        </Button>
                        {activeStep < steps.length - 1 && (
                          <Button
                            type="submit"
                            className={classes.button}
                            variant="contained"
                            style={{backgroundColor: '#009efb', color: '#FFFFFF'}}
                          >
                            Next
                          </Button>
                        )}
                        {activeStep === steps.length - 1 && (
                          <Button
                            type="submit"
                            className={classes.button}
                            variant="contained"
                            style={{backgroundColor: '#009efb', color: '#FFFFFF'}}
                            onClick={submit}
                          >
                            Submit
                          </Button>
                        )}
                      </div>
                    </form>
                  </StepContent>
                </Step>
              );
            })}
          </Stepper>
        </Box>
      )}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        resumeHideDuration={3000}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        open={open}
      >
        <SnackbarContent
          className={(classes.error, classes.error)}
          message={
            <span className={classes.message}>
              <ErrorIcon className={classes.icon} />
              {"Please correct the data"}
            </span>
          }
        />
      </Snackbar>
      {completed && (
        <Box className={(classes.root, classes.center)}>
          <FormComplete />
        </Box>
      )}
    </Fragment>
  );
};
