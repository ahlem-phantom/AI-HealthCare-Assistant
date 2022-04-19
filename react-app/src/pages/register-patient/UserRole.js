/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { createGenerateClassName } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { textAlign } from "@mui/system";
import { RadioGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Radio } from "@mui/material";
import { UserContext } from "./UserContext";
import { useContext, useState } from "react";

const muiBaseTheme = createMuiTheme();
const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true,
});

export default (props) => {
  // eslint-disable-next-line no-lone-blocks
  const [state] = useContext(UserContext);
  const { user, errors } = state;


  const theme = {
    overrides: {
      MuiCard: {
        root: {
          "&.MuiEngagementCard--01": {
            transition: "0.3s",
            display: "inline-block",
            margin: "15px",
            width: "320px",
            boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
            "&:hover": {
              boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
            },
            "& .MuiCardMedia-root": {
              paddingTop: "100%",
              paddingLeft: "90%",
            },
            "& .MuiCardContent-root": {
              textAlign: "left",
              padding: muiBaseTheme.spacing.unit * 1,
              margin: "30px",
            },
            "& .MuiTypography--heading": {
              fontWeight: "bold",
              color: "blue",
              textAlign: "center",
            },
            "& .MuiTypography--subheading": {
              lineHeight: 1.8,
            },
          },
        },
      },
    },
  };

  return (
    <MuiThemeProvider
      theme={createMuiTheme(theme)}
      style={{ display: "inline-block" }}
    >
      <RadioGroup row value={user.role}>
        <Card className={"MuiEngagementCard--01"}>
          <CardMedia
            image={
              "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
            }
            onClick={(e) => {
              console.log("this vaut :", e);
            }}
          />
          <CardContent>
            <Typography
              className={"MuiTypography--heading"}
              variant={"h6"}
              gutterBottom
            >
              <FormControlLabel
                value="patient"
                checked={user.role==="patient"}
                control={<Radio />}
                label="Patient"
              />
            </Typography>
          </CardContent>
        </Card>

        <Card className={"MuiEngagementCard--01"}>
          <CardMedia
            image={
              "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
            }
          />
          <CardContent>
            <Typography
              className={"MuiTypography--heading"}
              variant={"h6"}
              gutterBottom
            >
              <FormControlLabel
                value="doctor"
                control={<Radio />}
                label="Doctor"
              />
            </Typography>
          </CardContent>
        </Card>
      </RadioGroup>
    </MuiThemeProvider>
  );
};
