import React from 'react';

import StepForm from "./StepForm";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-sky-100">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 bg-sky-50 text-sky-600 rounded-full text-xs font-black uppercase tracking-widest border border-sky-100 mb-2">
            AI Assessment Engine
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Are You Having Mental Health Problems?
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto italic">
            Please answer the following questions on a scale of 1 to 5. 
            Our AI assistant will help analyze your responses.
          </p>
        </div>

        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden">
          {/* Decorative side accent */}
          <div className="absolute top-0 left-0 w-2 h-full bg-sky-500" />
          
          <StepForm />
        </div>

        <div className="mt-16 text-center space-y-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">
            Confidential • Anonymous • Private
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;