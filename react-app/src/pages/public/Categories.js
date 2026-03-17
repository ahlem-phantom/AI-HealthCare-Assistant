import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    num: '01',
    name: 'Covid-19',
    desc: 'Detect COVID-19 patterns in chest X-ray scans with high accuracy.',
    gradient: 'from-rose-500 to-pink-600',
    glow: 'shadow-rose-500/30',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    num: '02',
    name: 'Pneumonia',
    desc: 'Identify pneumonia infections through AI-assisted radiograph analysis.',
    gradient: 'from-sky-500 to-blue-600',
    glow: 'shadow-sky-500/30',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    num: '03',
    name: 'Tuberculosis',
    desc: 'Spot TB markers early for faster treatment and better outcomes.',
    gradient: 'from-violet-500 to-purple-600',
    glow: 'shadow-violet-500/30',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    num: '04',
    name: 'Normal',
    desc: 'Confirm a clear, healthy scan and get peace of mind instantly.',
    gradient: 'from-emerald-500 to-teal-600',
    glow: 'shadow-emerald-500/30',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const Categories = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleMouseMove = (e, idx) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) scale(1.03)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = '';
    setHovered(null);
  };

  return (
    <section className="py-24 mesh-gradient overflow-hidden" ref={ref}>
      <div className="section-shell">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-tag-dark">How Can We Help You?</span>
          <h2 className="heading-xl-white mt-4">Prediction Categories</h2>
          <p className="text-slate-400 mt-3 max-w-lg mx-auto text-lg font-light">
            Upload a chest X-ray and our AI identifies conditions with clinical accuracy.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((cat, i) => (
            <div
              key={cat.num}
              className={`relative rounded-3xl p-7 flex flex-col gap-4 cursor-pointer transition-all duration-500 gradient-border ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${i * 100}ms`,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
              }}
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => setHovered(i)}
            >
              {/* Number */}
              <span className="text-xs font-bold tracking-widest text-slate-500">{cat.num}</span>

              {/* Icon circle */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-white shadow-lg ${cat.glow} transition-transform duration-300 ${hovered === i ? 'scale-110' : ''}`}>
                {cat.icon}
              </div>

              <div>
                <h3 className="text-white text-xl font-bold mb-2">{cat.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{cat.desc}</p>
              </div>

              {/* Arrow on hover */}
              <div className={`mt-auto flex items-center gap-2 text-sm font-medium transition-all duration-300 ${hovered === i ? 'text-sky-400 translate-x-1' : 'text-transparent'}`}>
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <Link to="/upload" className="btn-primary">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            Check Your X-Ray Now
          </Link>
          <p className="text-slate-500 text-sm mt-3">Free for all registered users</p>
        </div>
      </div>
    </section>
  );
};

export default Categories;
