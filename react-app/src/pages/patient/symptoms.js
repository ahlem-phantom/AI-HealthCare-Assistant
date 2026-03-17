import React, { useEffect } from 'react';

import Iconify from '../../components/common/Iconify';
import generalistImg from '../../assets/specialities-01.png';
const dermoImg = 'https://images.unsplash.com/photo-1576091160550-217359f481bd?auto=format&fit=crop&w=400&q=80';
const orlImg = 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80';



function Symptoms() {


  const loadScript = (src) => {
    return new Promise(function (resolve, reject) {
      var script = document.createElement('script')
      script.src = src
      script.addEventListener('load', function () {
        resolve()
      })
      script.addEventListener('error', function (e) {
        reject(e)
      })
      document.body.appendChild(script)
      document.body.removeChild(script)
    })
  }
  
   useEffect(() => {
    [...document.getElementsByClassName("alan")].map(n => n && n.remove());
   loadScript(`https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1`)
  
    })

    


    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Standardized Header */}
            <div className="flex flex-row items-center justify-between gap-6 pb-2">
                <div className="text-left">
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                        Symptom <span className="text-sky-500">Detection</span>
                    </h1>
                    <p className="text-slate-500 font-medium mt-1">Get instant guidance and specialist recommendations.</p>
                </div>
                <div className="hidden sm:flex items-center gap-3 px-6 py-3 rounded-[2rem] bg-white border border-slate-100 shadow-sm whitespace-nowrap">
                    <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">AI Active</span>
                </div>
            </div>

            {/* Content Card */}
            <div className="bg-white rounded-[2.5rem] border border-slate-50 shadow-xl shadow-slate-100/50 p-10 overflow-hidden relative">
                <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 text-sky-500 font-black text-[10px] uppercase tracking-widest border border-sky-100">
                        <Iconify icon="eva:activity-fill" className="w-4 h-4" />
                        Professional Guidance
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">
                        Discover Our Most <br />
                        <span className="text-sky-500">Visited Specialists</span>
                    </h2>
                    <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-2xl mx-auto">
                        To help find a suitable doctor for you, please consult our smart assistant below and provide us with your current symptoms.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
                    {[
                        { title: 'Generalist', img: generalistImg, desc: 'An internist, family physician, or pediatrician who performs general medicine; one who treats most diseases that do not require surgery.' },
                        { title: 'Dermatologist', img: dermoImg, desc: 'A specialist who focuses on conditions involving the skin, hair, and nails, providing expert diagnosis for various cutaneous issues.' },
                        { title: 'Otolaryngologist', img: orlImg, desc: 'A specialist treating conditions that affect the ears, nose, and throat (ENT), ensuring comprehensive care for upper respiratory health.' },
                    ].map((spec) => (
                        <div key={spec.title} className="group flex flex-col bg-slate-50/50 rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-sky-100/50 transition-all duration-500">
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={spec.img} 
                                    alt={spec.title} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                />
                            </div>
                            <div className="p-8 space-y-4">
                                <h3 className="text-xl font-black text-slate-900">{spec.title}</h3>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{spec.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <df-messenger
                    intent="WELCOME"
                    chat-title="Specialist Guidance"
                    agent-id="d46dffb7-6992-4c58-92f0-a5d7561e4700"
                    language-code="en"
                ></df-messenger>
            </div>
        </div>
    );
}


export default Symptoms;