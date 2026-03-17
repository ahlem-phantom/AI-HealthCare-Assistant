import React, { useState, useRef, useEffect } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../../api-config";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { Link } from "react-router-dom";
import { InlineIcon } from '@iconify/react';
import Swal from 'sweetalert2';

const required = (value) => {
  if (!value) {
    return (
      <p className="text-red-500 text-sm mt-1">This field is required!</p>
    );
  }
};

const Login = (props) => {
  const navigate = useNavigate();

  // Linkedin oauth
  const handlelinkedin = (event) => {
    const clientId = process.env.REACT_APP_LINKEDIN_CLIENT_ID || "78zj0z0qx941dq";
    const redirectUri = process.env.REACT_APP_LINKEDIN_REDIRECT_URI || `${API_BASE_URL}/oauth`;
    const authUrl = process.env.REACT_APP_LINKEDIN_AUTH_URL || "https://www.linkedin.com/oauth/v2/authorization";
    
    var oauthUrl = `${authUrl}?response_type=code&client_id=${clientId}&scope=r_liteprofile%20r_emailaddress&state=123456&redirect_uri=${redirectUri}`
    var width = 700,
      height = 730,
      left = window.screen.width / 2 - width / 2,
      top = window.screen.height / 2 - height / 2;

    window.open(
      oauthUrl,
      "Linkedin",
      "menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=" +
        width +
        ", height=" +
        height +
        ", top=" +
        top +
        ", left=" +
        left
    );
  }

  const handlePostMessage = React.useCallback((event) => {
    if (event.data.type === "profile") {
      AuthService.loginlinkedin(event.data.profile.elements[0]["handle~"].emailAddress).then(
        () => {
          if (localStorage.getItem('role')?.match("doctor")) {
            navigate("/doctor/app", { replace: true });
          }
          else if (localStorage.getItem('role')?.match("patient")) {
            navigate("/patient/app", { replace: true });
          }
        }).catch(error => Swal.fire({
          title: 'Not a registered user',
          text: 'Try Again',
          icon: 'warning'
        }));
    }
  }, [navigate]);

  useEffect(() => {
    window.addEventListener('message', handlePostMessage);
    return () => window.removeEventListener('message', handlePostMessage);
  }, [handlePostMessage]);

  const form = useRef();
  const checkBtn = useRef();
  

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

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
       if (window.localStorage.getItem('role').match('doctor')){
        navigate("/doctor/app", { replace: true });
       }
       if (window.localStorage.getItem('role').match('patient')){
        navigate("/patient/app", { replace: true });
       }
       if (window.localStorage.getItem('role').match('admin')){
        navigate("/admin/app", { replace: true });
       }
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


  const handleface = (e) => {
    navigate("/face-login", { replace: true });
  };

  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />

      <div className="relative pt-32 pb-20 overflow-hidden mesh-gradient flex items-center">
        <div className="absolute top-6 left-[20%] w-72 h-72 rounded-full bg-sky-500/10 blur-[80px] animate-float-slow" />
        <div className="absolute bottom-0 right-[10%] w-56 h-56 rounded-full bg-indigo-500/10 blur-[60px] animate-float-slow" style={{ animationDelay: '2s' }} />

        <div className="relative section-shell z-10">
          <p className="text-slate-400 text-sm mb-2">
            <Link to="/" className="text-sky-400 no-underline hover:text-sky-300 transition-colors">Home</Link>
            <span className="mx-2 text-slate-600">›</span>
            <span>Sign In</span>
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Welcome <span className="text-gradient">Back</span>
          </h1>
        </div>
      </div>

      <div className="min-h-[60vh] bg-slate-50 flex flex-col items-center justify-center py-16 px-4">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-slate-800 text-2xl font-bold mb-2 text-center">Welcome back</h2>
            <p className="text-slate-500 text-sm text-center mb-6">Enter your credentials to access your account</p>
            <div className="flex gap-3 mb-5">
              <button
                onClick={handlelinkedin}
                className="flex-1 flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 rounded-xl transition-colors duration-200 text-sm"
              >
                <InlineIcon icon="eva:linkedin-fill" color="white" width={20} height={20} />
                LinkedIn
              </button>
              <button
                onClick={handleface}
                className="flex-1 flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-800 text-white font-semibold py-2.5 rounded-xl transition-colors duration-200 text-sm"
              >
                <InlineIcon icon="mdi:face-recognition" color="white" width={20} height={20} />
                Face ID
              </button>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 h-px bg-slate-200" />
              <span className="text-slate-400 text-sm">or</span>
              <div className="flex-1 h-px bg-slate-200" />
            </div>
            <Form onSubmit={handleLogin} ref={form}>
              <div className="mb-6">
                <label className="block text-slate-700 text-sm font-bold uppercase tracking-wider mb-2 ml-1" htmlFor="username">Username</label>
                <Input
                  id="username"
                  type="text"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-800 outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-all shadow-sm"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required]}
                  placeholder="Enter your username"
                />
              </div>
              <div className="mb-6">
                <label className="block text-slate-700 text-sm font-bold uppercase tracking-wider mb-2 ml-1" htmlFor="password">Password</label>
                <Input
                  id="password"
                  type="password"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-800 outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-all shadow-sm"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required]}
                  placeholder="••••••••"
                />
              </div>
              <div className="text-right mb-5">
                <Link to="/forgot" className="text-sky-500 hover:text-sky-600 text-sm font-medium no-underline">
                  Forgot your password?
                </Link>
              </div>
              <button
                className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-sky-300 text-white font-semibold py-3 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
                disabled={loading}
              >
                {loading && <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                Login
              </button>

              <div className="mt-8 pt-8 border-t border-slate-100 space-y-4">
                <p className="text-center text-slate-400 text-xs font-black uppercase tracking-[0.2em]">Quick Demo Access</p>
                <div className="grid grid-cols-2 gap-3">
                   <button
                    type="button"
                    onClick={() => {
                      localStorage.setItem('user', JSON.stringify({ id: 'demo-doc', username: 'DemoDoctor', roles: ['ROLE_DOCTOR'] }));
                      localStorage.setItem('role', 'doctor');
                      localStorage.setItem('username', 'DemoDoctor');
                      navigate("/doctor/app");
                    }}
                    className="bg-slate-50 hover:bg-sky-50 text-slate-600 hover:text-sky-600 border border-slate-200 hover:border-sky-200 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
                  >
                    <InlineIcon icon="mdi:doctor" width={16} />
                    Demo Doctor
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      localStorage.setItem('user', JSON.stringify({ id: 'demo-pat', username: 'DemoPatient', roles: ['ROLE_PATIENT'] }));
                      localStorage.setItem('role', 'patient');
                      localStorage.setItem('username', 'DemoPatient');
                      navigate("/patient/app");
                    }}
                    className="bg-slate-50 hover:bg-sky-50 text-slate-600 hover:text-sky-600 border border-slate-200 hover:border-sky-200 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
                  >
                    <InlineIcon icon="mdi:account" width={16} />
                    Demo Patient
                  </button>
                </div>
              </div>

              {message && (
                <div className="mt-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
                  {message}
                </div>
              )}
              <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>
            <p className="text-center text-slate-500 text-sm mt-6">
              Don&apos;t have an account?{" "}
              <Link to="/role" className="text-sky-500 font-semibold no-underline hover:underline">Register Now</Link>
            </p>
          </div>
      </div>
      <Footer />
    </div>
  );
};
export default Login;


