/* eslint-disable import/no-anonymous-default-export */
import React, { useContext } from "react";
//GENERAL
import { TextField, Grid } from "@mui/material";


//CONTEXT
import { UserContext } from "./UserContext";

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
      <Grid item xs={12} lg={6}>
        <TextField
          placeholder="1111 1111 1111 111"
          FormHelperTextProps={{ style: { color: "red" } }}
          helperText={errors["cardNumber"] && "Card Number must be at least 5"}
          label="Card Holder"
          name="cardNumber"
          value={user.cardNumber}
          type="cardNumber"
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          error={!!errors["cardNumber"]}
          inputProps={{
            minLength: 5,
            maxLength: 20,
          }}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TextField
          placeholder="1111 1111 1111 111"
          FormHelperTextProps={{ style: { color: "red" } }}
          helperText={errors["cardNumber"] && "Card Number must be at least 5"}
          label="Expiry Date"
          name="cardNumber"
          value={user.cardNumber}
          type="cardNumber"
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          error={!!errors["cardNumber"]}
          inputProps={{
            minLength: 5,
            maxLength: 20,
          }}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TextField
          placeholder="1111 1111 1111 111"
          FormHelperTextProps={{ style: { color: "red" } }}
          helperText={errors["cardNumber"] && "Card Number must be at least 5"}
          label="Card Number"
          name="cardNumber"
          value={user.cardNumber}
          type="cardNumber"
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          error={!!errors["cardNumber"]}
          inputProps={{
            minLength: 5,
            maxLength: 20,
          }}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TextField
          placeholder="Type your Security code here"
          FormHelperTextProps={{ style: { color: "red" } }}
          helperText={errors["secCode"] && "Security code must be at least 6"}
          name="secCode"
          label="CVC"
          value={user.secCode}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          required
          inputProps={{
            minLength: 4,
            maxLength: 4,
          }}
          error={!!errors["secCode"]}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TextField
          placeholder="Type your Security code here"
          FormHelperTextProps={{ style: { color: "red" } }}
          helperText={errors["secCode"] && "Security code must be at least 6"}
          name="secCode"
          label="Amount"
          value={user.secCode}
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
    </Grid>
  );
};
