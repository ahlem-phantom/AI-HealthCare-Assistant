/* eslint-disable import/no-anonymous-default-export */
import React, { useContext, Fragment } from "react";
import { UserContext } from "./UserContext";
import { makeStyles } from "@material-ui/core/styles";

//GENERAL
import {
  Typography,
  Grid,
  Checkbox,
  FormControlLabel
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  summary: {
    padding: theme.spacing(3),
    border: "1px solid #ddd",
    marginBottom: theme.spacing(5)
  }
}));
// SUMMARY COMPONENT
export default props => {
  const classes = useStyles();
  const [state] = useContext(UserContext);
  const role = window.localStorage.getItem('role')
  const userusername = window.localStorage.getItem('username');

  const { firstname, lastname, username, email, birthdate, phone, country, stat, city, street, zip , password, bio ,website } = state.user;
  return (
    <Fragment>
      <Grid container className={classes.summary}>
        <Grid item xs={12}>
          <Typography variant='h4' style={{color : '#009efb'}}>Summary</Typography>
        </Grid>
     
        <Grid item xs={12}>
          <Typography variant='h6'>Firstname</Typography>
          <Typography variant='body2'>{firstname}</Typography>
          
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6'>Lastname</Typography>
          <Typography variant='body2'>{lastname}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6'>Username</Typography>
          <Typography variant='body2'>{userusername}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6'>Email</Typography>
          <Typography variant='body2'>{email}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6'>Birthdate</Typography>
          <Typography variant='body2'>{birthdate}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6'>Phone</Typography>
          <Typography variant='body2'>{phone}</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.user.newsletter}
                color='primary'
                name='newsletter'
              />
            }
            label='Sign me up for Newsletter, to receive regular updates.'
          />
            <a
                          href="#"
                          data-toggle="modal"
                          data-target="#delete_doctor"
                        >
                          I accept terms and conditions
                        </a>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.user.acceptTerms}
                required
                color='primary'
                name='acceptTerms'
              />
            }
            label='I accept terms and conditions'
          />
        </Grid>
      </Grid>
      <div id="delete_doctor" className="modal fade delete-modal" role="dialog">
                     <div className="modal-dialog modal-dialog-centered">
                       <div className="modal-content">
                         <div className="modal-body text-center">
                           <img src="assets/img/sent.png" alt width={50} height={46} />
                           Use Of The React Website
1.1 The React website is provided to you free of charge for your personal use subject to these Terms and Conditions. By using the React website you agree to be bound by these Terms and Conditions.

1.2 When completing the contact form on our website, you must ensure that the details you provide are correct and complete.

1.3 You must inform us immediately of any changes to the information that you provided when using our contact form by updating your personal details.

1.4 These Terms and Conditions do not affect your statutory rights.
                           <div className="m-t-20">
                             {" "}
                             <a href="#" className="btn btn-white" data-dismiss="modal">
                               Close
                             </a>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
    </Fragment>
  );
};
