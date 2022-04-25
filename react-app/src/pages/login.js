import React, { useState, useRef, useEffect } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Button, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import { Container, Stack,Typography } from "@mui/material";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import Iconify from '../components/Iconify';

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 700,
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }));
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
       //   props.history.push("/profile");
       navigate("/patient/app", { replace: true });
       window.location.reload();

        },

        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

 
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

  const handleface = (e) => {
    navigate("/face-log", { replace: true });

  }
  const handlelinkedin =(e) => {
    const linkedinRedirectUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.REACT_APP_CLIENTID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=r_liteprofile,r_emailaddress`;
    window.location.href = linkedinRedirectUrl
  }
 
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
                  Sign In <span style={{ fontWeight: "bold" }}>Nearest</span>
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    Doctor
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br/><br/>

      <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 text-center heading-section ftco-animate">
          <h2 >Sign In</h2>
          </div>
          </div>
          </div>
          <br/><br/>
          <ContentStyle>

<Container>
      <Stack direction="row" spacing={2}>
<Button fullWidth size="large" color="error" variant="contained">
  <Iconify icon="eva:google-fill" color="white" height={24} width={20} /> &nbsp;<b> Gmail </b>
</Button>
<Button fullWidth size="large" color="primary" variant="contained" >
  <Iconify icon="eva:linkedin-fill" color="white" height={24} width={20} onClick={handlelinkedin} />   &nbsp;<b> Linkedin </b>
</Button>
<Button fullWidth size="large" color="secondary" variant="contained" onClick={handleface}>
  <Iconify icon="mdi:face-recognition" color="white" height={24} width={20} />   &nbsp;<b> Face ID  </b>
</Button>
</Stack>

<Divider sx={{ my: 3 }}>
<Typography variant="body2" sx={{ color: 'text.secondary' }}>
  OR
  
</Typography>

</Divider>
</Container>
<Container maxWidth="sm">
            <Stack sx={{ mb: 5 }}>
              <Typography sx={{ color: "text.secondary" }}>
                Enter your info details below.
              </Typography>
            </Stack>
          
            <Form onSubmit={handleLogin} ref={form}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>
          <div class="form-group text-right">
          <Link
                  variant="subtitle2"
                  component={Link}
                  to="/forgot"
                  underline="hover"
                >
                                <b>  Forgot your password ?</b>
                </Link>
                        </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
            
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
        <div class="text-center register-link">
        Don’t have an account? &nbsp;
        <Link
                  variant="subtitle2"
                  component={Link}
                  to="/role"
                  underline="hover"
                >
                                <b>  Register Now</b>
                </Link>
                        </div>
            <br/><br/>

        </Container>
</ContentStyle>
        
      <Footer />
    </div>
  );
};
export default Login;

