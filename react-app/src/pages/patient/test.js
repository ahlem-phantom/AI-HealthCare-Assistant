import React from 'react';
import './chat.css';
import PropTypes from "prop-types"
import withStyles from "@material-ui/core/styles/withStyles"
import CssBaseline from "@material-ui/core/CssBaseline"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import StepForm from "./StepForm"


const styles = theme => ({
    appBar: {
      position: "relative",
      paddingRight: 10,
      paddingLeft: 10
    },
    layout: {
      width: "auto",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
        width: 800,
        marginLeft: "auto",
        marginRight: "auto"
      }
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(800 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
        padding: theme.spacing(3)
      }
    }
  })
  const App = ({ classes }) => {
    return (

      <div className="main-wrapper">
 
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
          <div className="col-md-12">
      <div className="card-box">

        <div className="App">
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
 
         
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Typography variant="h3" align="center" style={{ marginTop: 80, fontWeight: "bold" }}>
        Are You Having Mental Health Problems?
        </Typography>
        <Typography
          variant="h5"
          align="center"
          style={{ marginTop: 10, marginBottom: 10 }}
        >
             Please answer the following questions on a scale of 1 to 5. 
        </Typography>
        <Paper className={classes.paper}>
          <StepForm />
        </Paper>
        <Divider style={{ marginTop: 100 }} />
        <Typography
          component="p"
          align="center"
          style={{ margin: "10px 0", fontSize: "12px" }}
        >
        
       
        </Typography>
      </main>
    </div>

        
        
        
         
                </div>
              </div>
    
          </div>
         
        </div>
      </div>
    </div>
    
  
    );
    }


App.propTypes = {
    classes: PropTypes.object.isRequired
  }

  export default withStyles(styles)(App)