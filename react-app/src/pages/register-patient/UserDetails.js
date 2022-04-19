/* eslint-disable import/no-anonymous-default-export */
import React, { useContext,useState } from "react";
//GENERAL
import { TextField, Grid } from "@mui/material";
import { IconButton, InputAdornment } from '@mui/material';

import { isWidthDown } from "@material-ui/core/withWidth";
import ReactPhoneInput from "react-phone-input-2";
//CONTEXT
import { UserContext } from "./UserContext";
import "react-phone-input-2/lib/material.css";
import Iconify from '../../components/Iconify';

export default (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [state] = useContext(UserContext);
  const { user, errors } = state;
  const dateLimit = new Date();
  dateLimit.setFullYear(dateLimit.getFullYear() - 18);
// eslint-disable-next-line no-lone-blocks
{/*
  const states = [
    "Ariana",
    "Tunis",
    "Ben Arous",
    "Nabeul",
    "Hammamet",
    "Sousse",
    "Sfax",
    "Gabes",
    "Gafsa",
    "Djerba",
  ];
  const countries = [
    "Tunisia",
    "Morroco",
    "Algeria",
    "Eygpt",
    "Unitet States",
    "Iran",
    "Canada",
    "Russia",
    "Ukrania",
    "Serbia",
    "Spain",
    "United Kingdom",
  ]; */}


  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={6}>
        <TextField
          placeholder="Type your lastname here"
          label="Firstname"
          name="firstname"
          value={user.firstname}
          type="firstname"
          variant="outlined"
          margin="normal"
          FormHelperTextProps={{ style: { color: "red" } }}
          helperText={errors["firstname"] && "Firstname must be at least 5"}
          InputLabelProps={{
            shrink: true,
          }}
          error={!!errors["firstname"]}
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
          placeholder="Type your lastname here"
          FormHelperTextProps={{ style: { color: "red" } }}
          helperText={errors["lastname"] && "Lastname must be at least 5"}
          label="Lastname"
          name="lastname"
          value={user.lastname}
          type="lastname"
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          error={!!errors["lastname"]}
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
          placeholder="Type your username here"
          FormHelperTextProps={{ style: { color: "red" } }}
          helperText={errors["username"] && "Username must be at least 6"}
          name="username"
          label="Username"
          value={user.username}
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          required
          inputProps={{
            minLength: 3,
            maxLength: 20,
          }}
          error={!!errors["username"]}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TextField
          placeholder="Type your email here"
          name="email"
          label="Email"
          value={user.email}
          type="email"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          FormHelperTextProps={{ style: { color: "red" } }}
          helperText={errors["email"] && "Type a valid email"}
          error={!!errors["email"]}
          required
          fullWidth={isWidthDown("sm")}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TextField
          type="date"
          name="birthdate"
          id="birthdate"
          label="Birthdate"
          defaultValue={user.birthdate}
          FormHelperTextProps={{ style: { color: "red" } }}
          helperText={errors["birthdate"] && "You need to be at least 18"}
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            min: "1920-01-01",
            max: dateLimit.toISOString().slice(0, 10),
          }}
          error={!!errors["birthdate"]}
          required
          fullWidth={isWidthDown("sm")}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <br />
        <ReactPhoneInput
          specialLabel={"Phone Number *"}
          regions={"africa"}
          country={"tn"}
          name="phone"
          id="phone"
          value={user.phone}
          placeholder="Type your phone here"
          buttonStyle={{ borderRadius: "5px 0 0 5px" }}
          inputStyle={{
            width: "460px",
            height: "50px",
            fontSize: "15px",
            borderRadius: "5px",
          }}
          inputProps={{
            name: 'phone',
            required: true,
            autoFocus: false
          }}
          FormHelperTextProps={{ style: { color: "red" } }}
          isValid={(value, country) => {
            if (value.length > 11) {
              return "Phone number max lenght is 11 ";
            } else if (value.slice(3).match(/0/)) {
              return "First phone number cannot be 0";
            } else {
              return true;
            }
          }}
        />
      </Grid>
     {/* <Grid item xs={12} lg={6}>
        <Autocomplete
          multiple
          autoHighlight
          options={countries}
          getOptionLabel={(option) => option}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="Countries"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
              placeholder="Select Your Country"
              variant="outlined"
              id="country"
              name="country"
              type="country"
              value={user.country}

            />  
            
          )}
         
          onChange={handleChange}

            />
      </Grid>
      

      <Grid item xs={12} lg={6}>
        <Autocomplete
          multiple
          autoHighlight
          value={user.stat}
          options={states}
          onChange={handleChange}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="States"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
              placeholder="Select Your State"
              variant="outlined"
              id="stat"
              name="stat"
              type="stat"
            />
          )}
        />
      </Grid>
*/}

<Grid item xs={12} lg={6}>
        <TextField
          placeholder="Type your country here"
          label="Country"
          name="country"
          value={user.country}
          variant="outlined"
          margin="normal"
          FormHelperTextProps={{ style: { color: "red" } }}
          helperText={errors["country"] && "You must type a country"}
          InputLabelProps={{
            shrink: true,
          }}
          error={!!errors["country"]}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TextField
          placeholder="Type your state here"
          FormHelperTextProps={{ style: { color: "red" } }}
          helperText={errors["lastname"] && "Please type your state"}
          label="State"
          name="stat"
          value={user.stat}
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          error={!!errors["stat"]}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12} lg={5}>
        <TextField
          placeholder="Type your city here"
          name="city"
          label="City"
          value={user.city}
          type="city"
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          error={!!errors["city"]}
          FormHelperTextProps={{ style: { color: "red" } }}
          helperText={errors["city"] && "Please type your city"}
          inputProps={{
            minLength: 6,
            maxLength: 20,
          }}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12} lg={5}>
        <TextField
          placeholder="Type your street here"
          name="street"
          label="Street"
          value={user.street}
          type="street"
          variant="outlined"
          margin="normal"
          required
          InputLabelProps={{
            shrink: true,
          }}
          FormHelperTextProps={{ style: { color: "red" } }}
          helperText={errors["street"] && "Please type your street"}
          error={!!errors["street"]}
          inputProps={{
            minLength: 6,
            maxLength: 20,
          }}
          fullWidth
        />
      </Grid>

      <Grid item xs={12} lg={2}>
        <TextField
          placeholder="Type code"
          name="zip"
          label="Zip Code"
          value={user.zip}
          type="zip"
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          required
          error={!!errors["zip"]}
          FormHelperTextProps={{ style: { color: "red" } }}
          helperText={errors["country"] && "Your code length"}
          inputProps={{
            minLength: 4,
            maxLength: 4,
          }}
          fullWidth
        />
      </Grid>

      <Grid item xs={12} lg={6}>
        <TextField
          placeholder="Type your password here"
          name="password"
          label="Password"
          value={user.password}
          type="password"
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            )
          }}
          required
          error={!!errors["password"]}
          FormHelperTextProps={{ style: { color: "red" } }}
          helperText={errors["password"] && "Your password min length is 8"}
          inputProps={{
            minLength: 8,
            maxLength: 20,
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TextField
          placeholder="Re-type your password here"
          label="Confirm Password"
          name="confirmPassword"
          value={user.confirmPassword}
          type="password"
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          error={!!errors["confirmPassword"]}
          FormHelperTextProps={{ style: { color: "red" } }}
          helperText={errors["confirmPassword"] && "Your passwords are not the same"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            )
          }}
          inputProps={{
            minLength: 8,
            maxLength: 20,
          }}
          required
          fullWidth
        />
      </Grid>

      
    </Grid>
  );
};
