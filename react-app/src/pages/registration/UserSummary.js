import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import Iconify from "../../components/common/Iconify";

const UserSummary = (props) => {
  const [state, setState] = useContext(UserContext);
  const userusername = window.localStorage.getItem('username');
  const [showTerms, setShowTerms] = useState(false);

  const { firstname, lastname, email, birthdate, phone, plan, newsletter, acceptTerms } = state.user;

  const summaryItems = [
    { label: 'Full Name', value: `${firstname} ${lastname}`, icon: 'eva:person-fill' },
    { label: 'Username', value: userusername, icon: 'eva:at-fill' },
    { label: 'Email Address', value: email, icon: 'eva:email-fill' },
    { label: 'Phone', value: phone, icon: 'eva:phone-fill' },
    { label: 'Birthdate', value: birthdate, icon: 'eva:calendar-fill' },
    { label: 'Selected Plan', value: `$${plan}/mo`, icon: 'eva:credit-card-fill', highlight: true },
  ];

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {summaryItems.map((item) => (
          <div key={item.label} className={`p-6 rounded-3xl border transition-all ${item.highlight ? 'bg-sky-50 border-sky-100' : 'bg-slate-50 border-slate-100'}`}>
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${item.highlight ? 'bg-sky-500 text-white shadow-lg shadow-sky-100' : 'bg-white text-slate-400 border border-slate-100 shadow-sm'}`}>
                <Iconify icon={item.icon} className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">{item.label}</p>
                <p className={`font-bold ${item.highlight ? 'text-sky-600' : 'text-slate-800'}`}>{item.value || '-'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4 pt-6 border-t border-slate-100">
        <label className="flex items-start gap-4 cursor-pointer group">
          <div className="relative flex items-center mt-0.5">
            <input
              type="checkbox"
              name="newsletter"
              checked={newsletter}
              onChange={(e) => setState({ ...state, user: { ...state.user, newsletter: e.target.checked } })}
              className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-slate-200 transition-all checked:bg-sky-500 checked:border-sky-500 hover:border-sky-400"
            />
            <svg className="pointer-events-none absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-sm text-slate-500 group-hover:text-slate-700 transition-colors">Sign me up for the Newsletter to receive the latest medical updates and offers.</span>
        </label>

        <label className="flex items-start gap-4 cursor-pointer group">
          <div className="relative flex items-center mt-0.5">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={acceptTerms}
              required
              onChange={(e) => setState({ ...state, user: { ...state.user, acceptTerms: e.target.checked } })}
              className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-slate-200 transition-all checked:bg-slate-800 checked:border-slate-800 hover:border-slate-400"
            />
            <svg className="pointer-events-none absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-sm text-slate-500">
            I accept the <button type="button" onClick={() => setShowTerms(true)} className="text-slate-900 font-bold underline hover:text-sky-600 transition-colors">Terms and Conditions</button>
          </span>
        </label>
      </div>

      {showTerms && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-md" onClick={() => setShowTerms(false)} />
          <div className="relative bg-white rounded-3xl w-full max-w-2xl max-h-[80vh] overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in duration-300">
            <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <h3 className="text-xl font-bold text-slate-900">Terms & Conditions</h3>
              <button 
                onClick={() => setShowTerms(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-200 hover:text-slate-900 transition-all"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <div className="p-8 overflow-y-auto prose prose-slate text-sm text-slate-600 leading-relaxed space-y-4">
              <p className="font-bold text-slate-900">1. Use Of The NearestDoctor Platform</p>
              <p>1.1 The platform is provided to you free of charge for your personal use subject to these Terms and Conditions. By using the platform you agree to be bound by these Terms and Conditions.</p>
              <p>1.2 When completing the contact form or registration on our platform, you must ensure that the details you provide are correct and complete.</p>
              <p>1.3 You must inform us immediately of any changes to the information that you provided when using our contact form by updating your personal details.</p>
              <p>1.4 These Terms and Conditions do not affect your statutory rights.</p>
              <p className="font-bold text-slate-900">2. Privacy & Data</p>
              <p>All data provided during registration is protected under our Privacy Policy and used solely for medical service coordination.</p>
            </div>

            <div className="p-8 bg-slate-50/50 border-t border-slate-100 flex justify-end">
              <button 
                onClick={() => setShowTerms(false)}
                className="bg-slate-900 text-white font-bold px-10 py-3 rounded-2xl hover:bg-black transition-all shadow-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserSummary;
