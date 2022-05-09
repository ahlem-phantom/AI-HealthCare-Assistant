/* eslint-disable import/no-anonymous-default-export */
import React, { useContext } from "react";
//GENERAL
import { TextField, Grid } from "@mui/material";


//CONTEXT
import { UserContext } from "./UserContext";
import axios from 'axios';
import Swal from 'sweetalert2';
import StripeCheckout from 'react-stripe-checkout';
const STRIPE_PUBLISHABLE = 'pk_test_51KkgQ1BHNzRaB25PEYP77hzfRdhQQhRyu58DiteDA7sHdE4QG5gsOQYzUG9JPvGtF0eBFEvH7ZyMEXqnn3Nc71xQ00u2WOqoGf'

const CURRENCY = 'USD';
const successPayment = data => {
  Swal.fire({  
    title: 'Successful Payment',  
    text: 'You have been successfully charged for this transaction',
    icon: 'success'
  })
  console.log(data);
};

const errorPayment = data => {
  alert('Payment Error');
  console.log(data);
};

const onToken = (amount, description) => token =>
  axios.post("http://localhost:8080/stripe",
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: amount
    })
    .then(successPayment)
    .catch(errorPayment);


export default (props) => {
  const [state] = useContext(UserContext);
  const { user, errors } = state;
  const dateLimit = new Date();
  dateLimit.setFullYear(dateLimit.getFullYear() - 18);
  const cardsLogo = [
    "amex",
    "cirrus",
    "diners",
    "discover",
    "maestro",
    "mastercard",
    "visa",
    "visaelectron",
  ];
  const name='NearestDoctor Payment';
  const  description='Stripe Checkout Gateway';
  const amount=user.plan+"00" ;
  return (
    <Grid container spacing={2}>


  
  
      <Grid container item xs={12} sm={9} justify="space-between">
        {cardsLogo.map((e) => (
          <img
            key={e}
            src={`./cards/${e}.png`}
            alt={e}
            width="50px"
            align="bottom"
            style={{ padding: "0 5px" }}
          />
        ))}
      </Grid>
      <Grid item xs={12} lg={12}>
        <TextField
          placeholder="Type your Security code here"
          FormHelperTextProps={{ style: { color: "red" } }}
          helperText={errors["secCode"] && "Security code must be at least 6"}
          name="secCode"
          label="Amount"
          value={user.plan}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          required
          inputProps={{
            minLength: 3,
            maxLength: 20,
          }}
          error={!!errors["secCode"]}
          fullWidth
        />
      </Grid>
     
      <Grid item xs={12} lg={12}>
      <StripeCheckout
      image="https://user-images.githubusercontent.com/78981558/155504905-3bd2d8db-64f5-413c-b7d2-d4e7842ddad8.png"
    name={name}
    description={description}
    amount={amount}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />
      </Grid>
  
    </Grid>
  );
};
