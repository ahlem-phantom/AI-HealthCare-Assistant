import React, { Fragment } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

// Destructure props
const Confirm = ({
  handleNext,
  handleBack,
  values
}) => {

console.log(values)

let interest = values[0]["interest"]
let sadness = values[1]["sadness"]
let sleep = values[2]["sleep"]
let energy = values[3]["energy"]
let app = values[4]["appetite"]
let feel = values[5]["feeling"]
let troub = values[6]["trouble"]
let move = values[7]["moving"]
let thought = values[8]["thoughts"]
let issues = values[9]["issues"]

let score = interest + sadness + sleep + energy + app + feel + troub + move + thought + issues;


  return (
    <Fragment>
       <List disablePadding>
        <ListItem>
          <ListItemText primary="Interest" secondary={values[0]["interest"]}/>
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Sadness" secondary={values[1]["sadness"]} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Sleep" secondary={values[2]["sleep"]} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Energy" secondary={values[3]["energy"]} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Appetite" secondary={values[4]["appetite"]} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Feeling" secondary={values[5]["feeling"]} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Trouble" secondary={values[6]["trouble"]} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Moving" secondary={values[7]["moving"]} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Thoughts" secondary={values[8]["thoughts"]} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Issues" secondary={values[9]["issues"]} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Score" secondary={score} />
        </ListItem>
        <Divider />
      

      </List> 

      <div
        style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
      >
        <Button variant="contained" color="default" onClick={handleBack}>
          Back
        </Button>
        <Button
          style={{ marginLeft: 20 }}
          variant="contained"
          color="secondary"
          onClick={handleNext}
        >
          Confirm & Continue
        </Button>
      </div>
    </Fragment>
  );
};

export default Confirm;