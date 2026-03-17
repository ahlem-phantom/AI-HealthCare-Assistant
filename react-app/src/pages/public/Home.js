import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { useState, useEffect } from 'react';
import Categories from './Categories';
import About from './About';
import Problems from './Problem';
import { Link } from 'react-router-dom';
import bg1 from '../../assets/bg_1.jpg';
import bg2 from '../../assets/bg_2.jpg';

const slides = [
  {
    bg: bg1,
    tag: 'AI Healthcare Platform',
    title: 'Your Health,',
    titleAccent: 'One Click Away',
    sub: 'AI Assistant providing medical services with chatbots, blockchain records, and ML illness detection.',
  },
  {
    bg: bg2,
    tag: 'Smart Radiology',
    title: 'Smart Diagnosis',
    titleAccent: 'at Home',
    sub: 'Upload your chest X-ray and get instant AI-powered analysis — COVID, Pneumonia, Tuberculosis, and more.',
  },
];

const stats = [
  { value: '10K+', label: 'Patients Served' },
  { value: '500+', label: 'Doctors' },
  { value: '99%', label: 'AI Accuracy' },
  { value: '24/7', label: 'Support' },
];

function Home() {
  const [current, setCurrent] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    const timer = setInterval(() => setCurrent(c => (c + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#070d1a]">
      <Navbar />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[600px] flex flex-col overflow-hidden bg-[#070d1a]">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === current ? 'opacity-40' : 'opacity-0'}`}
            >
              <img 
                src={slide.bg} 
                alt={slide.tag} 
                className={`w-full h-full object-cover transition-transform duration-[10000ms] ${i === current ? 'scale-110' : 'scale-100'}`} 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#070d1a] via-[#070d1a]/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a] via-transparent to-transparent" />
            </div>
          ))}
          {/* Subtle Ambient Blobs */}
          <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] animate-float-slow" />
          <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] animate-float-slow-reverse" />
        </div>

        {/* Content Layer - Centered but with top bias */}
        <div className="relative z-10 flex-1 flex items-center pt-20">
          <div className="section-shell">
            {slides.map((slide, i) => (
              <div key={i} className={i === current ? 'block' : 'hidden'}>
                <div className={`transition-all duration-700 delay-100 ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sky-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                    {slide.tag}
                  </span>
                </div>
                
                <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tight transition-all duration-700 delay-200 ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  {slide.title}<br />
                  <span className="text-gradient drop-shadow-sm">{slide.titleAccent}</span>
                </h1>
                
                <p className={`text-slate-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light transition-all duration-700 delay-300 ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  {slide.sub}
                </p>

                <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-400 ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <Link to="/role" className="btn-primary px-8 py-4 text-sm font-bold uppercase tracking-wider min-w-[200px]">
                    Get Started Free
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link to="/upload" className="btn-ghost px-8 py-4 text-sm font-bold uppercase tracking-wider border-white/10 hover:bg-white/5 text-white backdrop-blur-sm min-w-[200px]">
                    Analyze X-Ray
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Sleek Bottom Bar HUD ───────────────────────────── */}
        <div className="relative z-20 w-full bg-gradient-to-t from-[#070d1a] via-[#070d1a]/80 to-transparent">
          <div className="section-shell">
            <div className="border-t border-white/5 py-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
              
              {/* Stats Grid */}
              <div className="flex items-center gap-8 md:gap-14 order-1 md:order-1">
                {stats.map(({ value, label }) => (
                  <div key={label} className="text-center md:text-left transition-transform hover:scale-105 duration-300">
                    <p className="text-white font-bold text-xl md:text-2xl leading-none mb-1 font-display tracking-tight">{value}</p>
                    <p className="text-slate-500 text-[9px] uppercase tracking-[0.2em] font-black">{label}</p>
                  </div>
                ))}
              </div>

              {/* Status / Page Indicator */}
              <div className="flex items-center gap-10 order-2">
                <div className="flex flex-col items-center md:items-end gap-2.5">
                  <div className="flex gap-2">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-1 transition-all duration-500 rounded-full ${
                          i === current ? 'w-10 bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.4)]' : 'w-3 bg-white/20 hover:bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest opacity-60">
                    Slide {current + 1} of {slides.length}
                  </span>
                </div>

                <div className="hidden lg:flex flex-col items-center gap-1 text-slate-500 opacity-40 hover:opacity-100 transition-opacity">
                  <span className="text-[9px] uppercase tracking-[0.25em] font-black">Scroll</span>
                  <svg className="w-4 h-4 animate-bounce-soft" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Page sections ── */}
      <div className="bg-white">
        <About />
        <Categories />
        <Problems />
      </div>

      {/* ── Testimonials strip ───────────────────────────────── */}
      <section className="py-20 mesh-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-indigo-500/5" />
        <div className="section-shell relative z-10">
          <div className="text-center mb-14">
            <span className="section-tag-dark">Trusted by patients worldwide</span>
            <h2 className="heading-xl-white mt-4">What our users say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Sarah M.', role: 'Patient', quote: 'Got my X-ray results in minutes. The AI diagnosis was spot-on and I could consult a doctor right after.', stars: 5 },
              { name: 'Dr. James K.', role: 'General Practitioner', quote: 'The platform streamlines my workflow significantly. Patient records are always accessible and secure.', stars: 5 },
              { name: 'Fatima Z.', role: 'Patient', quote: 'Easy to use, fast results, and the chatbot answered all my health questions professionally.', stars: 5 },
            ].map((t, i) => (
              <div
                key={i}
                className="glass-card rounded-3xl p-6 flex flex-col gap-4"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <svg key={s} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic">"{t.quote}"</p>
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ───────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28 bg-white">
        {/* Decorative blobs */}
        <div className="absolute -left-20 top-0 w-96 h-96 rounded-full bg-sky-100 blur-[80px] opacity-60" />
        <div className="absolute -right-20 bottom-0 w-96 h-96 rounded-full bg-indigo-100 blur-[80px] opacity-60" />

        <div className="section-shell relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="section-tag mb-5 inline-flex">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Newsletter
            </span>
            <h2 className="heading-xl mb-4">Stay Ahead in AI Health</h2>
            <p className="text-slate-500 text-lg font-light mb-10">
              Join thousands getting the latest health news, AI innovations, and platform updates.
            </p>

            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={e => {
                e.preventDefault();
                e.target.reset();
              }}
            >
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="flex-1 px-5 py-3.5 rounded-full border border-slate-200 bg-white text-slate-800 placeholder-slate-400 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/25 transition-all text-sm"
              />
              <button
                type="submit"
                className="btn-primary text-sm whitespace-nowrap px-6 py-3.5"
              >
                Subscribe
              </button>
            </form>
            <p className="text-slate-400 text-xs mt-4">No spam, ever. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;