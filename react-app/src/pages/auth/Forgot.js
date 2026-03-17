import React, { useState, useRef } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import AuthService from '../../services/auth.service';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Link } from 'react-router-dom';

const required = (value) => {
  if (!value) {
    return <p className="text-red-500 text-sm mt-1">This field is required!</p>;
  }
};

const Forgot = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState('');
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage('');
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
            (error.response && error.response.data && error.response.data.message) ||
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
    <div className="bg-slate-950 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section - Matching login.js */}
      <div className="relative pt-32 pb-20 overflow-hidden mesh-gradient flex items-center">
        <div className="absolute top-6 left-[20%] w-72 h-72 rounded-full bg-sky-500/10 blur-[80px] animate-float-slow" />
        <div className="absolute bottom-0 right-[10%] w-56 h-56 rounded-full bg-indigo-500/10 blur-[60px] animate-float-slow" style={{ animationDelay: '2s' }} />

        <div className="relative section-shell z-10">
          <p className="text-slate-400 text-sm mb-2">
            <Link to="/" className="text-sky-400 no-underline hover:text-sky-300 transition-colors">Home</Link>
            <span className="mx-2 text-slate-600">›</span>
            <span>Forgot Password</span>
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Reset <span className="text-gradient">Password</span>
          </h1>
        </div>
      </div>

      {/* Content Section - Matching login.js */}
      <div className="min-h-[60vh] bg-slate-50 flex flex-col items-center justify-center py-16 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-slate-800 text-2xl font-bold mb-2 text-center">Recover Account</h2>
          <p className="text-slate-500 text-sm text-center mb-10">Enter your email and we will send you a reset link.</p>

          <Form onSubmit={handleSubmit} ref={form}>
            <div className="mb-6">
              <label className="block text-slate-700 text-sm font-bold uppercase tracking-wider mb-2 ml-1" htmlFor="email">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-800 outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-all shadow-sm"
                name="email"
                value={email}
                onChange={onChangeEmail}
                validations={[required]}
                placeholder="Enter your email"
              />
            </div>

            <button
              className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-sky-300 text-white font-semibold py-3.5 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading && <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
              Send Reset Link
            </button>

            {message && (
              <div
                className={`mt-6 text-sm rounded-xl px-4 py-3 border ${
                  successful
                    ? 'bg-green-50 border-green-200 text-green-700'
                    : 'bg-red-50 border-red-200 text-red-700'
                }`}
              >
                {message}
              </div>
            )}

            <CheckButton style={{ display: 'none' }} ref={checkBtn} />
          </Form>

          <div className="mt-8 pt-8 border-t border-slate-100 text-center">
            <p className="text-slate-500 text-sm">
              Remember your password?{' '}
              <Link to="/login" className="text-sky-500 font-semibold no-underline hover:underline ml-1">
                Back to Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Forgot;
