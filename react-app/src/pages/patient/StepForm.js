import React, { useState } from "react";
import QuestionStep from "./QuestionStep";
import Confirm from "./Confirm";
import Success from "./Success";
import Iconify from "../../components/common/Iconify";

const questions = [
  { id: "interest", label: "Interest", text: "Have you lost interest or pleasure in doing things?" },
  { id: "sadness", label: "Sadness", text: "Have you been feeling down, depressed, or hopeless?" },
  { id: "sleep", label: "Sleep", text: "Trouble falling or staying asleep, or sleeping too much?" },
  { id: "energy", label: "Energy", text: "Feeling tired or having little energy?" },
  { id: "appetite", label: "Appetite", text: "Poor appetite or overeating?" },
  { id: "feeling", label: "Feeling", text: "Feeling bad about yourself, or that you are a failure?" },
  { id: "trouble", label: "Trouble", text: "Trouble concentrating on things, such as reading or watching TV?" },
  { id: "moving", label: "Moving", text: "Moving or speaking so slowly that other people noticed?" },
  { id: "thoughts", label: "Thoughts", text: "Thoughts that you would be better off dead?" },
  { id: "issues", label: "Issues", text: "How difficult have these problems made your daily life?" }
];

const labels = [...questions.map(q => q.label), "Confirmation"];

export default function StepForm() {
  const [steps, setSteps] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleNext = () => setSteps(steps + 1);
  const handleBack = () => setSteps(steps - 1);

  const handleAnswerChange = (evt, value) => {
    const questionId = questions[steps].id;
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  // Convert answers object to the array format expected by Confirm and Success
  const formattedAnswers = questions.map(q => ({ [q.id]: answers[q.id] || 0 }));

  const renderContent = () => {
    if (steps < questions.length) {
      const currentQuestion = questions[steps];
      return (
        <QuestionStep
          question={currentQuestion.text}
          value={answers[currentQuestion.id] || 0}
          onChange={handleAnswerChange}
          handleNext={handleNext}
          handleBack={handleBack}
          isFirst={steps === 0}
          isLast={steps === questions.length - 1}
        />
      );
    }

    if (steps === questions.length) {
      return (
        <Confirm
          handleNext={handleNext}
          handleBack={handleBack}
          values={formattedAnswers}
        />
      );
    }

    return <Success values={formattedAnswers} />;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {steps <= questions.length ? (
        <div className="space-y-12">
          {/* Custom Step Indicator */}
          <div className="relative pt-4 pb-8">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 rounded-full" />
            <div 
              className="absolute top-1/2 left-0 h-1 bg-sky-500 -translate-y-1/2 rounded-full transition-all duration-700 ease-out shadow-[0_0_15px_rgba(14,165,233,0.3)]"
              style={{ width: `${(steps / (labels.length - 1)) * 100}%` }}
            />
            
            <div className="relative flex justify-between items-center">
              {labels.map((label, index) => {
                const isActive = index === steps;
                const isPast = index < steps;
                return (
                  <div key={label} className="relative flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xs font-black transition-all duration-500 z-10 border-4 border-slate-50 ${
                      isActive 
                      ? 'bg-slate-900 text-white shadow-2xl shadow-slate-200 scale-125 rotate-6' 
                      : isPast 
                      ? 'bg-sky-500 text-white border-sky-100' 
                      : 'bg-white text-slate-300'
                    }`}>
                      {isPast ? (
                        <Iconify icon="eva:checkmark-fill" className="w-5 h-5" />
                      ) : index + 1}
                    </div>
                    <span className={`absolute -bottom-10 whitespace-nowrap text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-500 hidden md:block ${
                      isActive ? 'text-slate-900 translate-y-1' : 'text-slate-300'
                    }`}>
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-[3rem] p-8 md:p-16 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.04)] mt-12">
             {renderContent()}
          </div>
        </div>
      ) : (
        <Success values={formattedAnswers} />
      )}
    </div>
  );
}