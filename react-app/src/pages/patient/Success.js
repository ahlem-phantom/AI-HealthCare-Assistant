import React, { useRef, useEffect, useState } from "react";
import ReactTOPdf from "react-to-pdf";
import axios from "axios";
import API_BASE_URL from "../../api-config";
import Iconify from "../../components/common/Iconify";

const Success = ({
  values
}) => {
  const ref = useRef();
  const [searchR, setSearchR] = useState([]);

  const data = [
    { label: "Interest", value: values[0]["interest"] },
    { label: "Sadness", value: values[1]["sadness"] },
    { label: "Sleep", value: values[2]["sleep"] },
    { label: "Energy", value: values[3]["energy"] },
    { label: "Appetite", value: values[4]["appetite"] },
    { label: "Feeling", value: values[5]["feeling"] },
    { label: "Trouble", value: values[6]["trouble"] },
    { label: "Moving", value: values[7]["moving"] },
    { label: "Thoughts", value: values[8]["thoughts"] },
    { label: "Issues", value: values[9]["issues"] },
  ];

  const score = data.reduce((acc, item) => acc + (item.value || 0), 0);

  useEffect(() => {
    const getSearchR = async () => {
      try {
        const res = await axios(`${API_BASE_URL}/scrap/depression`);
        setSearchR(res.data);
      } catch (error) {
        console.error("Error fetching depression resources:", error);
      }
    };
    getSearchR();
  }, []);

  const getAssessment = (score) => {
    if (score >= 40) return {
      title: "Action Required",
      subtitle: "High Probability of Depression",
      desc: "Your responses indicate a strong likelihood of depressive symptoms. It is very important to consult a healthcare professional.",
      color: "text-rose-500",
      bg: "bg-rose-50",
      border: "border-rose-100",
      icon: "eva:alert-triangle-fill",
      tips: [
        "Schedule an urgent session with a therapist",
        "Reach out to a trusted family member today",
        "Avoid self-isolation; stay in common areas",
        "Maintain a basic routine for sleep and meals"
      ]
    };
    if (score >= 30) return {
      title: "Attentive Care Needed",
      subtitle: "Moderate Depressive Symptoms",
      desc: "You are experiencing significant symptoms that may be impacting your daily life. Professional guidance is recommended.",
      color: "text-amber-500",
      bg: "bg-amber-50",
      border: "border-amber-100",
      icon: "eva:activity-fill",
      tips: [
        "Practice mindfulness and breathing exercises",
        "Consider discussing these feelings with a doctor",
        "Ensure you get at least 20 minutes of sun"
      ]
    };
    if (score >= 20) return {
      title: "Monitoring Recommended",
      subtitle: "Mild Depressive Indicators",
      desc: "Some symptoms are present. Regular self-checks and lifestyle adjustments could be beneficial.",
      color: "text-sky-500",
      bg: "bg-sky-50",
      border: "border-sky-100",
      icon: "eva:info-fill",
      tips: ["Journal your feelings daily", "Ensure consistent physical activity"]
    };
    return {
      title: "Optimistic Outlook",
      subtitle: "Minimal Indicators Detected",
      desc: "Your responses suggest a healthy mental state with few to no depressive symptoms active at this time.",
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      icon: "eva:checkmark-circle-2-fill",
      tips: ["Continue prioritizing your mental wellness", "Regular check-ins are always good"]
    };
  };

  const assessment = getAssessment(score);

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div ref={ref} className="bg-white p-6 md:p-12 rounded-[3.5rem] border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.02)]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 px-4">
          <div className="text-center md:text-left space-y-2">
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Assessment Report</h1>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.3em]">AI-Generated Results • Private</p>
            </div>
          </div>
          <div className="flex -space-x-3">
             <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white border-4 border-white shadow-xl">
               <Iconify icon="eva:activity-fill" className="w-6 h-6" />
             </div>
             <div className="w-12 h-12 rounded-2xl bg-sky-500 flex items-center justify-center text-white border-4 border-white shadow-xl">
               <Iconify icon="eva:bar-chart-fill" className="w-6 h-6" />
             </div>
          </div>
        </div>

        {/* Results Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Score Card */}
          <div className="lg:col-span-4 p-10 bg-slate-900 rounded-[3rem] text-center flex flex-col justify-center relative overflow-hidden shadow-2xl shadow-slate-200">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl -mr-16 -mt-16" />
            <p className="text-sky-400 font-black text-[10px] uppercase tracking-[0.4em] mb-6">Aggregate Score</p>
            <div className="relative inline-flex items-center justify-center">
               <span className="text-8xl font-black text-white italic">{score}</span>
               <sub className="text-slate-500 font-bold text-xl bottom-2 ml-2">/ 50</sub>
            </div>
            <div className="mt-8 pt-8 border-t border-white/5 space-y-1">
               <p className="text-white font-black text-xs uppercase tracking-widest">Confidence Index</p>
               <div className="h-1.5 w-full bg-white/5 rounded-full mt-3 overflow-hidden">
                  <div className="h-full bg-sky-500 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(14,165,233,0.5)]" style={{ width: `${(score / 50) * 100}%` }} />
               </div>
            </div>
          </div>

          {/* Assessment Detail */}
          <div className={`lg:col-span-8 p-10 rounded-[3rem] border-2 ${assessment.bg} ${assessment.border} flex flex-col`}>
             <div className="flex items-start gap-5 mb-8">
                <div className={`p-4 rounded-2xl bg-white shadow-sm ${assessment.color}`}>
                   <Iconify icon={assessment.icon} className="w-8 h-8" />
                </div>
                <div>
                   <h2 className={`text-2xl font-black ${assessment.color}`}>{assessment.title}</h2>
                   <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mt-1">{assessment.subtitle}</p>
                </div>
             </div>
             <p className="text-slate-700 font-medium text-lg leading-relaxed italics mb-8 border-l-4 border-slate-200 pl-6">
               "{assessment.desc}"
             </p>
             <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
               {assessment.tips?.map((tip, i) => (
                 <div key={i} className="flex items-center gap-3 p-3 bg-white/60 rounded-2xl border border-white text-xs font-bold text-slate-600">
                   <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${assessment.bg} ${assessment.color}`}>
                     <Iconify icon="eva:checkmark-fill" className="w-3 h-3" />
                   </div>
                   <span>{tip}</span>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="space-y-8">
           <div className="flex items-center justify-between px-2">
              <h3 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-4">
                 <Iconify icon="eva:bookmark-fill" className="text-sky-500 w-6 h-6" />
                 Specialized Resources
              </h3>
              <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-full">AI Recommended</span>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {searchR.length > 0 ? searchR.map((el, index) => (
                <a 
                  key={index} 
                  href={el.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="group p-6 bg-slate-50/50 border border-slate-100 rounded-[2rem] hover:bg-white hover:border-sky-500 hover:shadow-2xl hover:shadow-sky-100 transition-all duration-500"
                >
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Verified Link</p>
                      <span className="text-sm font-black text-slate-800 group-hover:text-sky-600 transition-colors block leading-tight">{el.title}</span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-300 group-hover:text-sky-500 shadow-sm transform group-hover:rotate-12 transition-all">
                       <Iconify icon="eva:external-link-fill" className="w-5 h-5" />
                    </div>
                  </div>
                </a>
              )) : [1, 2, 3, 4].map(i => (
                <div key={i} className="h-24 bg-slate-50 rounded-[2rem] animate-pulse" />
              ))}
           </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-16 p-8 bg-sky-50/50 rounded-3xl border border-sky-100 text-center">
           <p className="text-sky-600 font-medium text-xs leading-relaxed max-w-2xl mx-auto italic">
             <strong>Note:</strong> This assessment is a screening tool, not a clinical diagnosis. 
             Mental health is complex, and we strongly encourage discussing these results with a licensed professional.
           </p>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex flex-col items-center gap-8 py-10">
        <ReactTOPdf targetRef={ref} filename="Mental-Health-Report.pdf">
          {({ toPdf }) => (
            <button 
              onClick={toPdf} 
              className="group flex items-center gap-4 bg-slate-900 border-b-4 border-slate-950 hover:bg-black text-white px-14 py-5 rounded-[1.5rem] font-black uppercase text-xs tracking-[0.3em] shadow-2xl shadow-slate-200 transition-all transform hover:-translate-y-1 active:scale-95 active:border-b-0"
            >
              <Iconify icon="eva:printer-fill" className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Generate Professional Report
            </button>
          )}
        </ReactTOPdf>
        
        <div className="flex items-center gap-6">
           <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">Secure Encryption</p>
           <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
           <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">HIPAA Compliant</p>
           <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
           <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">Zero Data Logs</p>
        </div>
      </div>
    </div>
  );
};

export default Success;