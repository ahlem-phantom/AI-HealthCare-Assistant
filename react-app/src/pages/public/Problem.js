import { useEffect, useRef, useState } from 'react';

const features = [
  {
    title: 'Early Detection',
    desc: 'Early and quick detection with recommendations, precautions, and best practices.',
    gradient: 'from-rose-500 to-pink-600',
    glow: 'shadow-rose-500/25',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'User History',
    desc: 'Access all your previous Chest X-ray test reports on the platform anytime.',
    gradient: 'from-sky-500 to-blue-600',
    glow: 'shadow-sky-500/25',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: 'Ease of Access',
    desc: 'Readily available to any patient in the world with a click of a button.',
    gradient: 'from-violet-500 to-purple-600',
    glow: 'shadow-violet-500/25',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Decentralised & Secure',
    desc: 'Completely immutable and enduring — medical records stored on Blockchain.',
    gradient: 'from-amber-500 to-orange-500',
    glow: 'shadow-amber-500/25',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Further Help',
    desc: 'Precautions and safety measures recommended by leading health institutions.',
    gradient: 'from-teal-500 to-emerald-600',
    glow: 'shadow-teal-500/25',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Multilayered AI',
    desc: 'Multilayered AI model for improving accuracy and minimizing diagnostic faults.',
    gradient: 'from-indigo-500 to-blue-700',
    glow: 'shadow-indigo-500/25',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
];

const Problem = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-24 mesh-gradient-light overflow-hidden" ref={ref}>
      <div className="section-shell">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-tag">What We Solve</span>
          <h2 className="heading-xl mt-4">Platform Features</h2>
          <p className="text-slate-500 mt-3 max-w-lg mx-auto text-lg font-light">
            Every tool you need for modern AI-powered healthcare, in one place.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ title, desc, gradient, glow, icon }, i) => (
            <div
              key={title}
              className={`group relative bg-white/70 backdrop-blur-sm border border-white/80 rounded-3xl p-7 shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500 overflow-hidden ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Subtle hover backdrop glow */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />

              {/* Top row */}
              <div className="flex items-start justify-between mb-5">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-lg ${glow} group-hover:scale-110 transition-transform duration-300`}>
                  {icon}
                </div>
                <span className="text-xs font-bold text-slate-300 font-display tracking-widest">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Text */}
              <h3 className="text-slate-800 text-lg font-bold mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>

              {/* Bottom accent line */}
              <div className={`mt-6 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${gradient} rounded-full transition-all duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
