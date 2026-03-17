import React, { useState, useRef, useEffect } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from '../../services/auth.service";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import bg1 from "../../assets/bg_1.jpg";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

const required = (value) => {
  if (!value) {
    return (
      <div className="mt-2 text-rose-500 text-xs font-bold flex items-center gap-1.5" role="alert">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        This field is required!
      </div>
    );
  }
};

const ResetPassword = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [successful, setSuccessful] = useState(false);

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.forgotPass(email).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
          setLoading(false);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
          setLoading(false);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-sky-100">
      <Navbar />
      
      <main className="flex-1 flex flex-col">
        {/* Banner Section */}
        <div className="relative h-72 md:h-96 w-full flex items-center justify-center overflow-hidden">
          <img 
            src={bg1} 
            alt="Background" 
            className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
          />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
              Password Reset
            </h1>
            <div className="flex items-center justify-center gap-2 text-slate-300 font-bold text-sm uppercase tracking-widest">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-sky-400">Security</span>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="max-w-xl w-full mx-auto px-6 -mt-16 mb-24 relative z-20">
          <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 italic">
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-3xl font-black text-slate-800">Forgot Password?</h2>
              <p className="text-slate-500 mt-2 font-medium">Enter your account email to receive reset instructions</p>
            </div>

            <Form onSubmit={handleLogin} ref={form} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <Input
                    type="email"
                    className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 text-slate-800 font-bold placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500/20 transition-all outline-none"
                    name="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={onChangeEmail}
                    validations={[required]}
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black py-4 rounded-2xl shadow-xl shadow-sky-200 transition-all transform hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50 disabled:transform-none"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send Reset Link</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>

              {message && (
                <div 
                  className={`p-4 rounded-2xl border flex items-start gap-3 ${
                    successful 
                      ? "bg-emerald-50 border-emerald-100 text-emerald-800" 
                      : "bg-rose-50 border-rose-100 text-rose-800"
                  }`}
                >
                  <svg className={`w-5 h-5 mt-0.5 ${successful ? "text-emerald-500" : "text-rose-500"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm font-bold leading-relaxed">{message}</p>
                </div>
              )}
            </Form>

            <div className="mt-10 text-center">
              <p className="text-slate-400 font-bold text-sm">
                Remembered your password?{" "}
                <Link to="/login" className="text-sky-500 hover:text-sky-600 transition-colors underline decoration-sky-500/30 underline-offset-4">Sign In</Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <Outlet />
    </div>
  );
};

export default ResetPassword;
