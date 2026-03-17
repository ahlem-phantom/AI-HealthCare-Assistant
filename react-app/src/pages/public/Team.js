import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { useEffect, useRef, useState } from 'react';

import team1 from '../../assets/ahlem.jpg';
import team2 from '../../assets/nesrine.png';
import team3 from '../../assets/syrine.jpg';
import team4 from '../../assets/skander.jpg';
import team5 from '../../assets/hichem.png';

const teamMembers = [
  { name: 'Ahlem Laajili',      role: 'Lead Maintainer & Software Engineer', image: team1, bio: 'Contributed the global design, implementation, Face Recognition (DeepFace), and X-Ray classification. Leading the development of v2 and v3.', email: 'ahlem.laajili@esprit.tn',          github: 'https://github.com/ahlem-phantom',   linkedin: 'https://www.linkedin.com/in/ahlem-laajili/' },
  { name: 'Syrine Zahras',      role: 'Software Engineer (v1)',  image: team3, bio: 'Contributed to the Dialogflow symptom detection and the depression testing module during v1 development.', email: 'syrine.zahras@esprit.tn',           github: 'https://github.com/SyrineZahras',                linkedin: 'https://www.linkedin.com/in/syrine-zahras-95ab51161' },
  { name: 'Nesrine Ben Mahmoud',role: 'Software Engineer (v1)',  image: team2, bio: 'Contributed to the automated blog scraping engine during the initial v1 phase of the project.', email: 'nesrine.benmahmoud@esprit.tn',      github: 'https://github.com/nesrine1999',                linkedin: 'https://www.linkedin.com/in/nesrine-ben-mahmoud-09147523a' },
  { name: 'Skander Turki',      role: 'Backend Architect (v1)',  image: team4, bio: 'Contributed to the appointment booking chatbot and nearest doctor localization in v1.', email: 'skander.turki@esprit.tn',           github: 'https://github.com/skander-turki',                linkedin: 'https://www.linkedin.com/in/skander-turki' },
  { name: 'Hichem Ben Zammal', role: 'Security Specialist (v1)',  image: team5, bio: 'Contributed to the secure medical records system and internal security protocols for v1.', email: 'hichem.bemzammal@esprit.tn',        github: 'https://github.com/hichembenzammel',                linkedin: 'https://www.linkedin.com/in/hichembenzammel' },
];

const SocialIcon = ({ type, url }) => {
  const icons = {
    email: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    github: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.28-1.23 3.28-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" /></svg>,
    linkedin: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
  };
  return (
    <a href={type === 'email' ? `mailto:${url}` : url} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 hover:bg-sky-500 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm">
      {icons[type]}
    </a>
  );
};

function MemberCard({ member, delay, visible }) {
  return (
    <div
      className={`group relative bg-white rounded-[2.5rem] p-4 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border border-slate-100 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative h-80 w-full rounded-[2rem] overflow-hidden mb-8">
        <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-6 left-6 right-6 flex justify-center gap-3 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
            <SocialIcon type="email" url={member.email} />
            <SocialIcon type="github" url={member.github} />
            <SocialIcon type="linkedin" url={member.linkedin} />
        </div>
      </div>
      
      <div className="px-6 pb-8">
        <div className="flex justify-between items-start mb-2">
            <span className="text-sky-500 text-[10px] font-black uppercase tracking-[0.2em] inline-block">{member.role}</span>
            {member.name === 'Ahlem Laajili' && (
                <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-[8px] font-black uppercase tracking-widest">
                    <span className="w-1 h-1 rounded-full bg-amber-500 animate-pulse" />
                    Maintainer
                </span>
            )}
        </div>
        <h3 className="text-slate-900 font-black text-2xl mb-4">{member.name}</h3>
        <p className="text-slate-500 text-sm font-semibold leading-relaxed">
          {member.bio}
        </p>
      </div>
    </div>
  );
}

function Team() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen font-sans antialiased" ref={ref}>
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-48 pb-24 overflow-hidden mesh-gradient flex items-center min-h-[60vh]">
        <div className="absolute top-10 left-[10%] w-96 h-96 rounded-full bg-sky-500/10 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-0 right-[5%] w-80 h-80 rounded-full bg-indigo-500/10 blur-[100px] animate-float-slow-reverse" />
        
        <div className="relative section-shell z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
                <span className="inline-block px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-[10px] font-black uppercase tracking-[0.3em]">
                    The Alpha Coders
                </span>
                <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Active: v2.0
                </span>
            </div>
            <h1 className="text-white text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-10">
              Meet the Visionaries <br/><span className="text-gradient font-display">Behind the App.</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl">
              From our Esprit roots in 2022 to leading the next wave of healthcare technology. 
              We are building the future, one commit at a time.
            </p>
          </div>

          <div className="relative group/award">
            <div className="absolute inset-0 bg-sky-500/30 blur-[100px] rounded-full animate-pulse-ring" />
            <div className="relative glass-light border border-white/20 p-10 md:p-14 rounded-[4rem] shadow-2xl max-w-sm backdrop-blur-3xl overflow-hidden text-center group">
                <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-4xl shadow-2xl shadow-orange-500/40 mx-auto mb-8 animate-bounce-slow">🎖️</div>
                <p className="text-sky-400 text-[10px] font-black uppercase tracking-[0.3em] mb-3">Prestigious Recognition</p>
                <h3 className="text-white text-3xl font-black leading-tight mb-6">Best Engineering <br/>Project 2022</h3>
                <p className="text-slate-300 text-sm font-medium leading-relaxed mb-8">
                    Selected among dozens of projects at the 9th Edition Ceremony of Esprit School of Engineering.
                </p>
                <div className="inline-flex items-center gap-3 py-3 px-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white text-xs font-black uppercase tracking-widest">Esprit Excellence</span>
                </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-32 bg-slate-50 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-sky-100/50 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-indigo-100/50 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="section-shell relative z-10">
          
          {/* Product Vision Section */}
          <div className="max-w-7xl mx-auto mb-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className={`space-y-12 transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                    <div>
                        <span className="text-sky-500 text-[10px] font-black uppercase tracking-[0.4em]">Product Narrative</span>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mt-6">
                            Building NearestDoctor: A Journey of <span className="text-sky-500">Innovation.</span>
                        </h2>
                    </div>
                    <div className="space-y-6">
                        <p className="text-slate-600 text-lg font-semibold leading-relaxed">
                            NearestDoctor didn't start as just a project; it started as a mission to make 
                            healthcare accessible, secure, and intelligent.
                        </p>
                        <p className="text-slate-500 text-md font-medium leading-relaxed">
                            Throughout our development journey at Esprit, we tackled complex challenges in 
                            Artificial Intelligence, Blockchain technology, and User Experience. Every member 
                            of the Alpha Coders brought a unique expertise to ensure that a patient's 
                            first symptom to their final secured record is handled with world-class technology.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-slate-900 font-black text-3xl mb-2">100%</h4>
                            <p className="text-slate-500 text-xs font-black uppercase tracking-widest">Student Created</p>
                        </div>
                        <div>
                            <h4 className="text-slate-900 font-black text-3xl mb-2">2022</h4>
                            <p className="text-slate-500 text-xs font-black uppercase tracking-widest">Year Founded</p>
                        </div>
                    </div>
                </div>
                <div className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                     <div className="space-y-6 pt-12">
                        <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-slate-100 group hover:bg-slate-900 transition-all duration-500">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🤖</div>
                            <h4 className="text-slate-900 font-black group-hover:text-white transition-colors">AI Core</h4>
                            <p className="text-slate-500 text-xs mt-2 font-semibold group-hover:text-slate-400 transition-colors">Symptom detection & OCR.</p>
                        </div>
                        <div className="bg-sky-500 p-8 rounded-[3rem] shadow-xl shadow-sky-500/20 text-white transform hover:scale-105 transition-all">
                            <div className="text-4xl mb-4">🔐</div>
                            <h4 className="text-white font-black">Security</h4>
                            <p className="text-sky-100 text-xs mt-2 font-semibold">Face ID & Blockchain privacy.</p>
                        </div>
                     </div>
                     <div className="space-y-6">
                        <div className="bg-slate-900 p-8 rounded-[3rem] shadow-xl text-white transform hover:scale-105 transition-all">
                            <div className="text-4xl mb-4">⛓️</div>
                            <h4 className="text-white font-black">Blockchain</h4>
                            <p className="text-slate-400 text-xs mt-2 font-semibold">Immutable medical records.</p>
                        </div>
                        <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-slate-100 group hover:bg-sky-500 transition-all duration-500">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏥</div>
                            <h4 className="text-slate-900 font-black group-hover:text-white transition-colors">Access</h4>
                            <p className="text-slate-500 text-xs mt-2 font-semibold group-hover:text-sky-100 transition-colors">Connecting patients to doctors.</p>
                        </div>
                     </div>
                </div>
            </div>
          </div>

          {/* Member Grid */}
          <div className="text-center mb-24">
            <span className="text-sky-500 text-[10px] font-black uppercase tracking-[0.4em]">The Engineering Team</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 leading-tight">Masterminds behind the Code.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, i) => (
              <MemberCard key={member.name} member={member} delay={i * 150} visible={visible} />
            ))}
          </div>

          {/* v3 Roadmap / Vision Section */}
          <div className="mt-48 max-w-7xl mx-auto">
            <div className="relative overflow-hidden rounded-[4rem] bg-slate-900 p-8 md:p-20 shadow-2xl">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-500/10 blur-[120px] rounded-full translate-x-1/2" />
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-10">
                        <div>
                            <span className="flex items-center gap-2 text-sky-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
                                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                                Future Proofing
                            </span>
                            <h2 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
                                The Next Generation: <span className="text-sky-400">NearestDoctor v3.</span>
                            </h2>
                        </div>
                        <p className="text-slate-400 text-lg font-medium leading-relaxed">
                            Under the leadership of our core maintainers, we are actively developing the next major evolution 
                             of the platform. Version 3 isn't just an update it's a complete technological leap.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { title: 'FastAPI Backend', desc: 'Migrating to a monolithic, hyper-fast Python backend for better performance.' },
                                { title: 'LLM Integration', desc: 'Deploying advanced language models for smarter, more human-like symptom analysis.' },
                                { title: 'Modern UI/UX', desc: 'A total design overhaul using the latest premium components and fluid animations.' },
                                { title: 'Cloud Scalability', desc: 'Transitioning to a highly scalable, cloud-native architecture ready for global impact.' }
                            ].map((item, i) => (
                                <div key={i} className="space-y-2">
                                    <h4 className="text-white font-black text-sm uppercase tracking-wider flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                                        {item.title}
                                    </h4>
                                    <p className="text-slate-500 text-xs font-semibold">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="relative w-72 h-72 md:w-96 md:h-96">
                            {/* Rotating geometric elements for v3 feel */}
                            <div className="absolute inset-0 border-4 border-dashed border-sky-500/20 rounded-full animate-spin-slow" />
                            <div className="absolute inset-8 border-4 border-sky-500/40 rounded-full animate-spin-slow-reverse" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white text-9xl font-black opacity-10 font-display">v3</span>
                                <div className="absolute bg-sky-500 text-white px-8 py-4 rounded-2xl font-black text-2xl shadow-2xl shadow-sky-500/50 -rotate-12 hover:rotate-0 transition-transform cursor-default">
                                    IN PROGRESS
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Team;
