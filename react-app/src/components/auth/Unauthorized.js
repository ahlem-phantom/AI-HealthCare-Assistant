import React from "react";
import { Link } from "react-router-dom";
import Iconify from '../common/Iconify';

const Unauthorized = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 w-full max-w-2xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 text-center shadow-2xl">
        <div className="w-24 h-24 rounded-3xl bg-red-500/10 text-red-500 flex items-center justify-center mx-auto mb-8 ring-1 ring-red-500/20">
          <Iconify icon="eva:shield-off-fill" className="w-12 h-12" />
        </div>
        
        <h1 className="text-4xl font-black text-white tracking-tight mb-4">
          Unauthorized <span className="text-red-500">Access</span>
        </h1>
        
        <p className="text-slate-400 text-lg font-medium max-w-md mx-auto mb-10 leading-relaxed">
          It looks like you don't have permission to view this page. Please make sure you're logged in with the correct account role.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/" 
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-slate-900 font-bold hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
          >
            <Iconify icon="eva:home-fill" className="w-5 h-5" />
            Back to Home
          </Link>
          <Link 
            to="/login" 
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            <Iconify icon="eva:log-in-fill" className="w-5 h-5" />
            Switch Account
          </Link>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 opacity-40 grayscale pointer-events-none">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-white">Security Protocol 403 active</span>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
