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



  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={6}>
      <TextField
          id='bio'
          label='Bio'
          value={user.bio}
          name='bio'
          placeholder='Type few words about you'
          variant='outlined'
          margin='normal'
          multiline
          InputLabelProps={{
            shrink: true
          }}
          inputProps={{
            maxLength: 200
          }}
          fullWidth
          rows={3}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
      <TextField
          id='bio'
          label='Bio'
          value={user.bio}
          name='bio'
          placeholder='Type few words about you'
          variant='outlined'
          margin='normal'
          multiline
          InputLabelProps={{
            shrink: true
          }}
          inputProps={{
            maxLength: 200
          }}
          fullWidth
          rows={3}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
      <TextField
          id='bio'
          label='Bio'
          value={user.bio}
          name='bio'
          placeholder='Type few words about you'
          variant='outlined'
          margin='normal'
          multiline
          InputLabelProps={{
            shrink: true
          }}
          inputProps={{
            maxLength: 200
          }}
          fullWidth
          rows={3}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
      <TextField
          id='bio'
          label='Bio'
          value={user.bio}
          name='bio'
          placeholder='Type few words about you'
          variant='outlined'
          margin='normal'
          multiline
          InputLabelProps={{
            shrink: true
          }}
          inputProps={{
            maxLength: 200
          }}
          fullWidth
          rows={3}
        />
      </Grid>
     
      
    </Grid>
  );
};
