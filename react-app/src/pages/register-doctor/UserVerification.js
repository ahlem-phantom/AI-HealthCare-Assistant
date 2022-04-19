/* eslint-disable import/no-anonymous-default-export */
import React, { useContext } from "react";
import { UserContext } from "./UserContext";

//GENERAL
import { Grid } from "@material-ui/core";
import Sketch from "react-p5";
import "./video.css";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

//USER PREFERENCES
export default (props) => {
  const [state] = useContext(UserContext);
  const { user } = state;
  let x = 50;
  let y = 50;
  let video;
  const setup = (p5, canvasParentRef) => {
    p5.noCanvas();
    video = p5.createCapture(p5.VIDEO);
    const v = document.querySelector("video");
    let st = "position: absolute; top: 255px;";
    v.setAttribute("style", st);
  };

  let video2;
  const setup2 = (p5, canvasParentRef) => {
    p5.noCanvas();
    video2 = p5.createCapture(p5.VIDEO);
    const v = document.querySelector("video");
    let st = "position: absolute; top: 255px;";
    v.setAttribute("style", st);
  };

  const draw = (p5) => {
    p5.background(0);
    p5.ellipse(x, y, 70, 70);
    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes
    x++;
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} justify="center">
        <Typography variant="h5" align="center" >       
                            Identity Verification
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Sketch setup={setup} draw={draw} />
      </Grid>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Grid item xs={12} lg={5} justify="center"></Grid>
      <Grid item xs={12} lg={7} justify="center">
        <Button
          type="submit"
          variant="contained"
          size="large"
          fullwidth
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "green",
            left: "100%",
          }}
        >
          Verify Your Identity
        </Button>
      </Grid>
      <br />
      <br />
      <br />
      <br />
    </Grid>
  );
};
