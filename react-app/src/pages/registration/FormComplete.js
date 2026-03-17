import React from "react";
import { useNavigate } from "react-router-dom";

const FormComplete = () => {
  const navigate = useNavigate();
  const goToDashboard = () => {
    navigate("/patient/app", { replace: true });
  };
  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-10">
      <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-bounce-in">
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">Congratulations!</h2>
        <p className="text-slate-500 max-w-xs mx-auto">
          You have successfully completed the registration process. Welcome to <span className="text-sky-500 font-bold">NearestDoctor</span>.
        </p>
      </div>

      <button 
        onClick={goToDashboard}
        className="bg-slate-900 hover:bg-black text-white font-black px-12 py-4 rounded-2xl shadow-xl shadow-slate-200 transition-all transform hover:-translate-y-1 active:scale-95 uppercase text-xs tracking-widest"
      >
        Go to Dashboard
      </button>
    </div>
  );
};

export default FormComplete;
