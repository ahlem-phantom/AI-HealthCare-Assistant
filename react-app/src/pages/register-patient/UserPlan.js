/* eslint-disable import/no-anonymous-default-export */
import React, { useContext } from "react";
//GENERAL
import { Grid } from "@material-ui/core";

//CONTEXT
import { UserContext } from "./UserContext";
import { RadioGroup, RadioButton } from "react-radio-buttons";
export default (props) => {
  const [state] = useContext(UserContext);
  const { user, errors } = state;

  return (
    <Grid>
      <RadioGroup vertical>
        <RadioButton rootColor="green" value="apple"><b>Basic  23$/month</b></RadioButton>
        <RadioButton rootColor="green" value="orange"><b>Standard  23$/month</b></RadioButton>
        <RadioButton rootColor="green" value="melon"><b>Premium  23$/month</b></RadioButton>
      </RadioGroup>
    </Grid>
  );
};
