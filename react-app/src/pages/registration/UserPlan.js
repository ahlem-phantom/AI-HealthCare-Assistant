/* eslint-disable import/no-anonymous-default-export */
import React, { useContext } from "react";
//CONTEXT
import { UserContext } from "./UserContext";

// NO MUI STYLES REQUIRED


const tiers = [
  {
    title: 'Basic Plan',
    price: '30',
    mon: 'month',

    description: [
      'All features included',
      'Available for one month',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: <div><input type="radio" value="30" name="plan" /></div> ,
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro Plan',
    price: '60',
    mon: 'month',
    description: [
      'All features included',
      'Available for 6 months',
      'Help center access',
      'Phone & email support',
    ],
    buttonText:  <div><input type="radio" value="60" name="plan" /></div>,
    buttonVariant: 'outlined',
  },
  {
    title: 'Premium Plan',
    price: '90',
    mon: 'year',
    description: [
      'All features included',
      'Available for one year',
      'Help center access',
      'Phone & email support',
    ],
    buttonText:  <div><input type="radio" value="120" name="plan" /></div>,
    buttonVariant: 'outlined',
  },
];



const UserPlan = (props) => {
  const [state, setState] = useContext(UserContext);
  const { user } = state;

  const handlePlanSelect = (price) => {
    setState({
      ...state,
      user: { ...state.user, plan: price }
    });
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-slate-800">Select Your Plan</h2>
        <p className="text-slate-500 mt-2">Choose the best medical service coverage for your needs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier) => {
          const isSelected = user.plan === tier.price;
          return (
            <div 
              key={tier.title}
              onClick={() => handlePlanSelect(tier.price)}
              className={`relative cursor-pointer group transition-all duration-500 ${
                isSelected 
                ? 'scale-105 z-10' 
                : 'hover:scale-[1.02]'
              }`}
            >
              <div className={`h-full rounded-3xl p-8 flex flex-col border-2 transition-all duration-500 ${
                isSelected 
                ? 'bg-white border-sky-400 shadow-2xl shadow-sky-100' 
                : 'bg-slate-50 border-transparent hover:border-slate-200'
              }`}>
                {isSelected && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                    Selected
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-slate-900 font-bold text-lg mb-1">{tier.title}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-slate-900">${tier.price}</span>
                    <span className="text-slate-400 text-sm font-medium">/ {tier.mon}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.description.map((line) => (
                    <li key={line} className="flex items-center gap-3 text-sm text-slate-500">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isSelected ? 'bg-sky-100 text-sky-500' : 'bg-white text-slate-300'}`}>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {line}
                    </li>
                  ))}
                </ul>

                <div className={`w-full py-3 rounded-2xl font-bold text-center transition-all ${
                  isSelected 
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-200' 
                  : 'bg-white text-slate-600 border border-slate-200 group-hover:bg-slate-100'
                }`}>
                  {isSelected ? 'Current Choice' : 'Choose Plan'}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserPlan;
