import React from "react";
import Iconify from "../../components/common/Iconify";

const QuestionStep = ({
  question,
  description,
  value,
  onChange,
  handleNext,
  handleBack,
  isFirst = false,
  isLast = false
}) => {
  const marks = [
    { value: 1, label: "Not At All", icon: "eva:smiling-face-outline" },
    { value: 2, label: "Rarely", icon: "eva:diagonal-arrow-right-up-outline" },
    { value: 3, label: "Somewhat", icon: "eva:minus-outline" },
    { value: 4, label: "Often", icon: "eva:diagonal-arrow-right-down-outline" },
    { value: 5, label: "A Lot", icon: "eva:frown-outline" }
  ];

  return (
    <div className="space-y-12 animate-in slide-in-from-right-8 duration-500">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-sky-100">
          <Iconify icon="eva:question-mark-circle-fill" className="w-3 h-3" />
          <span>Patient Assessment</span>
        </div>
        <h2 className="text-3xl font-black text-slate-800 leading-tight tracking-tight">
          {question}
        </h2>
        {description && (
          <p className="text-slate-500 font-medium text-lg leading-relaxed italic">
            {description}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
        {marks.map((mark) => {
          const isActive = value === mark.value;
          return (
            <button
              key={mark.value}
              onClick={() => onChange(null, mark.value)}
              className={`relative flex flex-col items-center gap-4 p-8 rounded-[2rem] border-2 transition-all duration-300 group ${
                isActive
                  ? "bg-slate-900 border-slate-900 text-white shadow-2xl shadow-slate-200 scale-[1.05] z-10"
                  : "bg-white border-slate-50 text-slate-400 hover:border-slate-200 hover:bg-slate-50"
              }`}
            >
              <div className={`p-4 rounded-2xl transition-colors duration-300 ${
                isActive ? "bg-white/10 text-sky-400" : "bg-slate-50 text-slate-400 group-hover:bg-white group-hover:text-slate-600"
              }`}>
                <Iconify icon={mark.icon} className="w-8 h-8" />
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${
                  isActive ? "text-sky-400" : "text-slate-300 group-hover:text-slate-500"
                }`}>
                  Level {mark.value}
                </span>
                <span className="font-bold text-sm">{mark.label}</span>
              </div>
              {isActive && (
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <Iconify icon="eva:checkmark-fill" className="w-4 h-4 text-white" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-between pt-12 border-t border-slate-100">
        {!isFirst ? (
          <button
            onClick={handleBack}
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl text-slate-400 font-bold hover:text-slate-900 hover:bg-slate-50 transition-all transition-all font-bold transition-all"
          >
            <Iconify icon="eva:arrow-back-fill" className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Previous</span>
          </button>
        ) : <div />}

        <button
          onClick={handleNext}
          disabled={!value}
          className="flex items-center gap-3 px-10 py-4 rounded-2xl bg-sky-500 text-white font-black hover:bg-sky-600 transition-all shadow-xl shadow-sky-100 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          <span>{isLast ? "Review Assessment" : "Next Question"}</span>
          <Iconify icon={isLast ? "eva:eye-fill" : "eva:arrow-forward-fill"} className={`w-5 h-5 ${!isLast && "group-hover:translate-x-1"} transition-transform`} />
        </button>
      </div>
    </div>
  );
};

export default QuestionStep;
