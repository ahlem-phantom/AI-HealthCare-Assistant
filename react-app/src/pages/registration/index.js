import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
//MY MODULES
import UserDetails from "./UserDetails";
import UserSummary from "./UserSummary";
import UserPayment from "./UserPayment";
import FormComplete from "./FormComplete";
//GENERAL
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { UserContext } from "./UserContext";
import UserPlan from "./UserPlan";
import AuthService from "../../services/auth.service";
import Swal from 'sweetalert2';



// NO MUI STYLES

const steps = [
  "User Basic Information",
  "User Payment Plan",
  "User Payment Credit Card",
  "Summary",
];

//MAIN COMPONENT
const Registration = (props) => {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [errors] = useState({});
  const [open, setOpen] = useState(false);
  const [state, setState] = useContext(UserContext);
  const userrole = window.localStorage.getItem('role');
  const userusername = window.localStorage.getItem('username');

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleCloseSnackbar = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeStep < steps.length - 1) handleNext();
    else {
      setCompleted(true);
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0 :
        return <UserDetails />;
      case 1:
        return <UserPlan />;
      case 2:
        return <UserPayment />;
      case 3:
        return <UserSummary />;
      default:
        return "Unknown step";
    }
  };

  const handleError = (e) => {
    errors[e.target.name] = e.target.validationMessage;
    setState({ ...state, errors: { ...errors } });
    setOpen(true);
  };

  const handleChange = (e) => {

    //PASSWORD MATCHING
    if (
      e.target.name === "confirmPassword" &&
      e.target.value !== state.user.password
    ) {
      e.target.setCustomValidity("Passwords are not matching");
    } else {
      e.target.setCustomValidity("");
    }
    if (e.target.name === "password") {
      const confirm = e.target.form.querySelector(
        "input[name='confirmPassword']"
      );
      // WHEN WE CHANGE PASSWORD, WE WANT TO VALIDATE CONFIRM PASSWORD AS WELL
      if (e.target.value === state.user.confirmPassword) {
        delete errors[confirm.name];
        confirm.setCustomValidity("");
      } else {
        confirm.setCustomValidity("Passwords are not matching");
        errors[confirm.name] = confirm.validationMessage;
      }
    }
    if (e.target.validity.valid) {
      //OTHER ELEMENTS
      delete errors[e.target.name];
    } else {
      errors[e.target.name] = e.target.validationMessage;
    }
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setState({
      ...state,
      user: { ...state.user, [e.target.name]: value },
      errors: { ...errors },
    });
  };


  const hashedPassword = state.user.password; // Removed insecure frontend bcrypt hashing

  const userObject = {
    firstname: state.user.firstname,
    lastname: state.user.lastname,
    username: userusername,
    email: state.user.email,
    birthdate: state.user.birthdate,
    phone: state.user.phone,
    creationDate : new Date(),
    paymentDate : new Date(),
    paymentPlan : 'premium',
    password: hashedPassword,
    role: userrole,
  };
  const submit = async (e) => { 
    e.preventDefault();
    try {
      await AuthService.register(userObject.username, userObject.email, state.user.password, userObject.birthdate, userObject.firstname, userObject.lastname, userObject.phone, userObject.role);
      Swal.fire({  
        title: 'Registration Successful',  
        text: 'Your account has been created successfully. For the demo, you can now login directly.',
        icon: 'success'
      }).then(() => {
        navigate("/login");
      });
    } catch (error) {
      // Demo Fallback: If backend is down, still simulate success for the demo
      console.warn("Backend registration failed, using demo fallback", error);
      Swal.fire({  
        title: 'Registration (Demo Mode)',  
        text: 'Backend is offline, but we have simulated a successful registration for this demonstration.',
        icon: 'success'
      }).then(() => {
        // Set mock data so the demo user can "login" immediately
        localStorage.setItem('user', JSON.stringify({ ...userObject, id: 'demo-id' }));
        navigate("/login");
      });
    }
  }


  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />

      <div className="relative pt-32 pb-20 overflow-hidden mesh-gradient flex items-center">
        <div className="absolute top-6 left-[20%] w-72 h-72 rounded-full bg-sky-500/10 blur-[80px] animate-float-slow" />
        <div className="absolute bottom-0 right-[15%] w-64 h-64 rounded-full bg-indigo-500/10 blur-[90px] animate-float-slow-reverse" />
        
        <div className="relative section-shell z-10 text-center">
          <p className="text-slate-400 text-sm mb-2 uppercase tracking-widest font-bold">Registration</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Create Your <span className="text-gradient">Profile</span>
          </h1>
        </div>
      </div>

      <section className="py-20 bg-slate-50">
        <div className="section-shell">
          <div className="max-w-6xl mx-auto">
            {!completed ? (
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
                {/* Premium Vertical Stepper */}
                <div className="lg:col-span-1 border-r border-slate-100 pr-8 hidden lg:block">
                  <div className="sticky top-32 space-y-10">
                    {steps.map((label, index) => {
                      const isActive = index === activeStep;
                      const isPast = index < activeStep;
                      return (
                        <div key={index} className="flex items-start gap-4 group">
                          <div className="flex flex-col items-center group/dot">
                            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black transition-all duration-500 ${
                              isActive 
                              ? 'bg-sky-500 text-white shadow-[0_10px_20px_-5px_rgba(14,165,233,0.4)] rotate-12 scale-110' 
                              : isPast 
                              ? 'bg-emerald-500 text-white shadow-[0_10px_20px_-5px_rgba(16,185,129,0.3)]' 
                              : 'bg-slate-100 text-slate-400 border border-slate-200'
                            }`}>
                              {isPast ? (
                                <svg className="w-5 h-5 animate-scale-in" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              ) : <span className="text-xs">{index + 1}</span>}
                            </div>
                            {index < steps.length - 1 && (
                              <div className={`w-0.5 h-10 my-2 rounded-full transition-all duration-700 ${
                                isPast ? 'bg-emerald-400' : 'bg-slate-100'
                              }`} />
                            )}
                          </div>
                          <div className="pt-1">
                            <p className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-300 ${
                              isActive ? 'text-sky-500' : isPast ? 'text-emerald-500' : 'text-slate-400'
                            }`}>Step {index + 1}</p>
                            <p className={`text-sm font-bold transition-all duration-300 ${
                              isActive ? 'text-slate-900 translate-x-1' : 'text-slate-400'
                            }`}>{label}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Form Content */}
                <div className="lg:col-span-3">
                  <div className="bg-white/90 backdrop-blur-2xl border border-white rounded-[2.5rem] p-8 md:p-14 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.08)]">
                    <form onSubmit={handleSubmit} onInvalid={handleError} onChange={handleChange} className="space-y-10">
                      <div className="min-h-[420px]">
                        {getStepContent(activeStep)}
                      </div>

                      <div className="flex items-center justify-between pt-10 border-t border-slate-100">
                        <button
                          type="button"
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={`px-10 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
                            activeStep === 0 
                            ? 'text-slate-200 cursor-not-allowed' 
                            : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50 active:scale-95'
                          }`}
                        >
                          Previous Step
                        </button>
                        
                        {activeStep < steps.length - 1 ? (
                          <button
                            type="submit"
                            className="bg-sky-500 hover:bg-sky-600 text-white font-black px-12 py-4 rounded-2xl shadow-[0_15px_30px_-5px_rgba(14,165,233,0.3)] transition-all transform hover:-translate-y-1 active:scale-[0.98] uppercase text-xs tracking-widest"
                          >
                            Continue
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={submit}
                            className="bg-slate-900 hover:bg-black text-white font-black px-14 py-4 rounded-2xl shadow-[0_15px_30px_-5px_rgba(15,23,42,0.3)] transition-all transform hover:-translate-y-1 active:scale-[0.98] uppercase text-xs tracking-widest"
                          >
                            Complete Registration
                          </button>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            ) : (
              <div className="max-w-xl mx-auto">
                <div className="bg-white rounded-3xl p-12 text-center shadow-card border border-white">
                  <FormComplete />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Custom Tailwind Snackbar */}
      {open && (
        <div className="fixed bottom-8 right-8 z-[9999] animate-bounce-in">
          <div className="bg-red-500 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-red-400">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span className="font-bold">Please correct the highlighted errors.</span>
            <button onClick={handleCloseSnackbar} className="ml-4 hover:opacity-70 transition-opacity">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Registration;
