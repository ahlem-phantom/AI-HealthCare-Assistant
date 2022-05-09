import { Link} from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import {  Container, Typography } from "@mui/material";
import { Grid } from "@material-ui/core";
// components
import Page from "../page";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import RegisterForm from "./index";
//CONTEXT
import UserContextProvider from "./UserContext";
// material
import { useEffect } from "react";
// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
    minHeight: "100vh",
    alignContent: "stretch",
    [theme.breakpoints.down("sm")]: {
      alignContent: "flex-start",
    },
}));


// ----------------------------------------------------------------------

export default function Register() {
  const loadScript = (src) => {
    return new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.src = src;
      script.addEventListener("load", function () {
        resolve();
      });
      script.addEventListener("error", function (e) {
        reject(e);
      });
      document.body.appendChild(script);
      document.body.removeChild(script);
    });
  };

  useEffect(() => {
    loadScript(`${process.env.PUBLIC_URL}js/main.js`);
  });

  return (
    <div>
      <Navbar />
      <section className="home-slider owl-carousel">
        <div
          className="slider-item bread-item"
          style={{ backgroundImage: 'url("images/bg_1.jpg")' }}
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay" />
          <div className="container" data-scrollax-parent="true">
            <div className="row slider-text align-items-end">
              <div className="col-md-7 col-sm-12 ftco-animate mb-5">
                <p
                  className="breadcrumbs"
                  data-scrollax=" properties: { translateY: '70%', opacity: 1.6}"
                >
                  <span className="mr-2">
                    <a href="index.html">Home</a>
                  </span>{" "}
                  <span>Sign Up</span>
                </p>
                <h1
                  className="mb-3 navbar-brand"
                  data-scrollax=" properties: { translateY: '70%', opacity: .9}"
                >
                  Sign Up In <span style={{ fontWeight: "bold" }}>Nearest</span>
                  <span style={{ color: "#009efb", fontWeight: "bold" }}>
                    Doctor
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br/>
      <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 text-center heading-section ftco-animate">
          <h2 >Sign Up</h2>
          <p>Already have an account ? </p>
          </div>
          </div>
          </div>
      <RootStyle title="Login | NearestDoctor">
        <Container>
            <UserContextProvider>
              <Grid container>
                <Grid item>
                  <RegisterForm />
                </Grid>
              </Grid>
            </UserContextProvider>

            <Typography
              variant="body2"
              align="center"
              sx={{
                mt: 3,
                display: { sm: "none" },
              }}
            >
              Don’t have an account?&nbsp;
              <Link
                variant="subtitle2"
                component={Link}
                to="register"
                underline="hover"
              >
                Get started
              </Link>
            </Typography>
        </Container>
      </RootStyle>
      <Footer />
    </div>
  );
}
