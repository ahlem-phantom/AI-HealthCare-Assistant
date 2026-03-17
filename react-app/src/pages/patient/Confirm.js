import React from "react";
import Iconify from "../../components/common/Iconify";

const Confirm = ({
  handleNext,
  handleBack,
  values
}) => {
  const data = [
    { label: "Interest", value: values[0]["interest"], icon: "eva:heart-fill" },
    { label: "Sadness", value: values[1]["sadness"], icon: "eva:cloud-fill" },
    { label: "Sleep", value: values[2]["sleep"], icon: "eva:moon-fill" },
    { label: "Energy", value: values[3]["energy"], icon: "eva:flash-fill" },
    { label: "Appetite", value: values[4]["appetite"], icon: "eva:shopping-bag-fill" },
    { label: "Feeling", value: values[5]["feeling"], icon: "eva:person-fill" },
    { label: "Trouble", value: values[6]["trouble"], icon: "eva:alert-circle-fill" },
    { label: "Moving", value: values[7]["moving"], icon: "eva:activity-fill" },
    { label: "Thoughts", value: values[8]["thoughts"], icon: "eva:bulb-fill" },
    { label: "Issues", value: values[9]["issues"], icon: "eva:options-2-fill" },
  ];

  const score = data.reduce((acc, item) => acc + (item.value || 0), 0);

  return (
    <div className="space-y-12 animate-in fade-in zoom-in-95 duration-500">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">Review Your Answers</h2>
        <p className="text-slate-500 font-medium max-w-lg mx-auto italics">
          Please confirm your responses before submitting for AI analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data.map((item, index) => (
          <div key={index} className="group flex items-center justify-between p-6 bg-slate-50/50 rounded-3xl border border-slate-100 hover:border-sky-200 hover:bg-white hover:shadow-xl hover:shadow-sky-50 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-400 group-hover:text-sky-500 shadow-sm transition-colors">
                <Iconify icon={item.icon} className="w-5 h-5" />
              </div>
              <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{item.label}</span>
            </div>
            <div className="flex items-center gap-2">
               <div className="w-12 h-1 bg-slate-100 rounded-full overflow-hidden hidden sm:block">
                  <div className="h-full bg-sky-500 rounded-full" style={{ width: `${(item.value / 5) * 100}%` }} />
               </div>
               <span className="text-lg font-black text-slate-900 bg-white w-10 h-10 rounded-xl flex items-center justify-center shadow-sm border border-slate-50">
                {item.value}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="relative overflow-hidden p-10 bg-slate-900 rounded-[2.5rem] flex flex-col sm:flex-row items-center justify-between shadow-2xl shadow-slate-200">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="relative z-10 text-center sm:text-left">
          <p className="text-sky-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Total Confidence Score</p>
          <h3 className="text-white text-3xl font-black tracking-tight italic">Health Indicator Index</h3>
        </div>
        <div className="relative z-10 mt-6 sm:mt-0 px-10 py-4 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10">
          <span className="text-5xl font-black text-white">{score}</span>
          <span className="text-sky-400 font-bold text-lg ml-2">/ 50</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-10 border-t border-slate-100">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-all active:scale-95"
        >
          <Iconify icon="eva:arrow-back-fill" className="w-5 h-5" />
          <span>Go Back</span>
        </button>
        <button
          onClick={handleNext}
          className="group flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-black px-12 py-5 rounded-2xl shadow-2xl shadow-emerald-100 transition-all transform hover:-translate-y-1 active:scale-95 uppercase text-xs tracking-widest"
        >
          <span>Submit Assessment</span>
          <Iconify icon="eva:paper-plane-fill" className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default Confirm;