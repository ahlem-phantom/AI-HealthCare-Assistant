import { useEffect, useRef, useState } from 'react';
import aboutImg from '../../assets/about1.jpg';

function useCountUp(target, duration = 2000, enabled = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    const numeric = parseInt(target.replace(/\D/g, ''), 10);
    if (!numeric) return;
    let start = 0;
    const step = numeric / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= numeric) { setCount(numeric); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, enabled]);
  const suffix = target.replace(/[0-9]/g, '');
  return `${count}${suffix}`;
}

const statsData = [
  { raw: '10K+', label: 'Patients Served', icon: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  )},
  { raw: '500+', label: 'Doctors Registered', icon: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
  )},
  { raw: '99%', label: 'AI Accuracy', icon: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  )},
  { raw: '24/7', label: 'Support', icon: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  )},
];

function StatCard({ raw, label, icon, enabled }) {
  const value = useCountUp(raw, 1800, enabled);
  return (
    <div className="glass-light rounded-2xl p-5 text-center flex flex-col items-center gap-3 hover:-translate-y-1 transition-transform duration-300">
      <div className="icon-circle w-12 h-12 text-sm">{icon}</div>
      <p className="text-3xl font-bold text-slate-800 font-display">{value}</p>
      <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{label}</p>
    </div>
  );
}

const About = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen font-sans antialiased" ref={ref}>
      


      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="section-shell">
          <div className="max-w-6xl mx-auto">
            
            {/* The Vision & Problems */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
                <div className={`space-y-10 transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                            Addressing the Core <span className="text-sky-500">Challenges</span> of Digital Health.
                        </h2>
                        <p className="text-slate-500 text-lg font-medium leading-relaxed">
                            Despite advances, healthcare remains fragmented. NearestDoctor was designed to solve 
                            three universal pain points for patients and doctors alike.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            { title: 'Finding the Right Expert', desc: 'AI-driven specialist recommendations based on real symptom analysis.', icon: '🎯' },
                            { title: 'Instant Appointment Access', desc: 'Location-aware scheduling that eliminates manual delays through automation.', icon: '⚡' },
                            { title: 'Immutable Medical Security', desc: 'Fragmented records unified and secured on the blockchain.', icon: '🛡️' }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-sky-100 transition-all group">
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">{item.icon}</div>
                                <div>
                                    <h4 className="text-slate-900 font-black text-lg mb-1">{item.title}</h4>
                                    <p className="text-slate-500 text-sm font-semibold">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`relative transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                    <div className="absolute inset-10 bg-sky-500/20 blur-[100px] rounded-full animate-pulse-ring" />
                    <img src={aboutImg} alt="Healthcare Technology" className="relative z-10 w-full rounded-[3rem] shadow-2xl border-4 border-white" />
                    
                    {/* Floating Achievement Badge */}
                    <div className="absolute -top-10 -right-10 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 max-w-[280px] z-20 animate-float-slow">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="text-4xl">🎖️</div>
                            <div>
                                <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Awarded</p>
                                <p className="text-slate-900 font-black">Best Project 2022</p>
                            </div>
                        </div>
                        <p className="text-slate-500 text-xs font-bold leading-relaxed">
                            Selected among dozens of engineering projects at Esprit School of Engineering.
                        </p>
                    </div>
                </div>
            </div>

            {/* The Ecosystem */}
            <div className="text-center mb-20">
                <span className="text-sky-500 text-[10px] font-black uppercase tracking-[0.4em]">Technology Ecosystem</span>
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 mt-4">How It Works.</h3>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40 transition-all duration-1000 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                {[
                    { title: "Symptom Detection", tech: "NLP & Dialogflow", desc: "Chat with our AI bot to identify potential specialists based on your symptoms." },
                    { tech: "TensorFlow & OCR", title: "Biometric Security", desc: "Secure doctor registration with Nanonets identity verification and Face ID login." },
                    { tech: "Ethereum / Solidity", title: "Blockchain Records", desc: "Patient records are encrypted and stored immutably on the medical ledger." },
                    { tech: "Deep Learning / CNN", title: "X-Ray Diagnosis", desc: "Automated radiology screening for lung conditions like COVID-19 or Pneumonia." }
                ].map((feature, i) => (
                    <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all flex flex-col items-center text-center group">
                        <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-sky-500 mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                        </div>
                        <p className="text-[10px] font-black text-sky-500 uppercase tracking-widest mb-2">{feature.tech}</p>
                        <h4 className="text-xl font-black text-slate-900 mb-4">{feature.title}</h4>
                        <p className="text-slate-500 text-sm font-semibold leading-relaxed">{feature.desc}</p>
                    </div>
                ))}
            </div>

            {/* Impact Counters */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {statsData.map((s) => <StatCard key={s.label} {...s} enabled={visible} />)}
            </div>

          </div>
        </div>
      </section>
      {/* Hero Section */}
      <div className="relative pt-48 pb-24 overflow-hidden mesh-gradient flex items-center min-h-[50vh]">
        <div className="absolute top-10 left-[10%] w-96 h-96 rounded-full bg-sky-500/10 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-0 right-[5%] w-80 h-80 rounded-full bg-indigo-500/10 blur-[100px] animate-float-slow-reverse" />
        
        <div className="relative section-shell z-10 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6 animate-fade-in">
                Core Mission
            </span>
            <h1 className="text-white text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-[1.1]">
                Your AI-Powered Companion for <br/><span className="text-gradient">Smarter Healthcare.</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed mb-10">
                A seamless platform bridging the gap between patients and professionals through 
                Machine Learning, Blockchain, and Biometrics.
            </p>
        </div>
      </div>
      {/* Team CTA */}
      <section className="py-32 bg-white text-center px-4">
        <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
                Built by <span className="text-gradient">AlphaCoders.</span>
            </h2>
            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
                NearestDoctor was developed by 5 engineering students from Esprit School of Engineering, 
                Tunisia, with the vision that every patient deserves instant, secure medical guidance.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-6">
                <a href="#github" className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-black transition-all shadow-xl">
                    View Project Repo
                </a>
                <a href="#contact" className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-slate-50 transition-all shadow-sm">
                    Connect With Us
                </a>
            </div>
        </div>
      </section>
      
    </div>
  );
};

export default About;
