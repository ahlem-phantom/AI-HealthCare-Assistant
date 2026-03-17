import Footer from '../../components/layout/Footer';
import Navbar from '../../components/layout/Navbar';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Basic',
    monthlyPrice: 24.50,
    annualPrice: 19.50,
    popular: false,
    color: 'from-slate-500 to-slate-600',
    features: ['Diagnostic Services', 'Professional Consultation', 'Health Report Summary', 'Email Support'],
  },
  {
    name: 'Standard',
    monthlyPrice: 34.50,
    annualPrice: 27.50,
    popular: false,
    color: 'from-sky-500 to-blue-600',
    features: ['Everything in Basic', 'Priority Consultation', 'Appointment Management', 'Medical History Access'],
  },
  {
    name: 'Premium',
    monthlyPrice: 54.50,
    annualPrice: 43.50,
    popular: true,
    color: 'from-violet-500 to-purple-600',
    features: ['Everything in Standard', 'Advanced AI Analysis', 'Specialist Recommendation', '24/7 Support'],
  },
  {
    name: 'Platinum',
    monthlyPrice: 89.50,
    annualPrice: 71.50,
    popular: false,
    color: 'from-amber-500 to-orange-500',
    features: ['Everything in Premium', 'Dedicated Assistance', 'Fastest Queue', 'Comprehensive Reports'],
  },
];

const trustBadges = [
  { label: 'Secure Payment', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg> },
  { label: 'Cancel Anytime', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
  { label: 'HIPAA Compliant', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
  { label: '24/7 Available', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
];

function Price() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />

      {/* Hero banner */}
      <div className="relative pt-32 pb-20 overflow-hidden mesh-gradient flex items-center">
        <div className="absolute top-6 left-[25%] w-72 h-72 rounded-full bg-sky-500/10 blur-[80px] animate-float-slow" />
        <div className="absolute bottom-0 right-[15%] w-56 h-56 rounded-full bg-violet-500/10 blur-[60px] animate-float-slow" style={{ animationDelay: '3s' }} />
        <div className="relative section-shell z-10">
          <p className="text-slate-400 text-sm mb-2">
            <Link to="/" className="text-sky-400 no-underline hover:text-sky-300 transition-colors">Home</Link>
            <span className="mx-2 text-slate-600">›</span>
            Pricing
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h1>
        </div>
      </div>

      <section className="py-20 bg-slate-50">
        <div className="section-shell">
          {/* Heading + toggle */}
          <div className="text-center mb-14">
            <span className="section-tag mb-4 inline-flex">Plans & Pricing</span>
            <h2 className="heading-xl mb-4">Choose the right plan for your health journey</h2>
            <p className="text-slate-500 text-lg font-light mb-8 max-w-md mx-auto">
              Flexible options for patients and healthcare professionals.
            </p>

            {/* Toggle */}
            <div className="inline-flex items-center gap-4 bg-white rounded-2xl p-1.5 shadow-card border border-slate-100">
              <button
                onClick={() => setAnnual(false)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  !annual ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  annual ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Annual
                <span className="bg-emerald-100 text-emerald-600 text-xs font-bold px-2 py-0.5 rounded-full">-20%</span>
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
            {plans.map((plan, i) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl flex flex-col overflow-hidden transition-all duration-500 ${
                  plan.popular
                    ? 'shadow-glow-lg scale-105 z-10'
                    : 'bg-white border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1'
                }`}
              >
                {/* Popular header */}
                {plan.popular && (
                  <div className={`bg-gradient-to-r ${plan.color} p-5 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/4" />
                    <span className="inline-block text-xs font-bold bg-white/20 text-white px-3 py-1 rounded-full mb-2 uppercase tracking-wide">
                      ⚡ Most Popular
                    </span>
                    <h3 className="text-white text-2xl font-bold">{plan.name}</h3>
                    <div className="mt-1">
                      <span className="text-white text-4xl font-extrabold font-display">
                        ${annual ? plan.annualPrice.toFixed(2) : plan.monthlyPrice.toFixed(2)}
                      </span>
                      <span className="text-white/70 text-sm ml-1">/ session</span>
                    </div>
                    {annual && (
                      <p className="text-white/60 text-xs mt-1 line-through">
                        ${plan.monthlyPrice.toFixed(2)} / session
                      </p>
                    )}
                  </div>
                )}

                {/* Non-popular header */}
                {!plan.popular && (
                  <div className="p-6 border-b border-slate-100">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center text-white mb-3 shadow-sm`}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <h3 className="text-slate-800 text-xl font-bold">{plan.name}</h3>
                    <div className="mt-2">
                      <span className="text-slate-900 text-3xl font-extrabold font-display">
                        ${annual ? plan.annualPrice.toFixed(2) : plan.monthlyPrice.toFixed(2)}
                      </span>
                      <span className="text-slate-400 text-sm ml-1">/ session</span>
                    </div>
                    {annual && (
                      <p className="text-slate-400 text-xs mt-1 line-through">
                        ${plan.monthlyPrice.toFixed(2)} / session
                      </p>
                    )}
                  </div>
                )}

                {/* Features */}
                <ul className={`space-y-3 flex-1 p-6 ${plan.popular ? 'bg-white' : ''}`}>
                  {plan.features.map((feature, fi) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-slate-600 text-sm"
                      style={{ animationDelay: `${fi * 60}ms` }}
                    >
                      <span className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center flex-shrink-0`}>
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className={`p-6 ${plan.popular ? 'bg-white' : ''}`}>
                  <Link
                    to="/role"
                    className={`block w-full text-center py-3 rounded-2xl font-semibold transition-all duration-300 no-underline text-sm ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.color} text-white shadow-lg hover:scale-[1.02] hover:shadow-xl`
                        : 'border border-slate-200 text-slate-700 hover:border-sky-400 hover:text-sky-600 hover:bg-sky-50'
                    }`}
                  >
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
            {trustBadges.map(({ label, icon }) => (
              <div key={label} className="flex items-center gap-2 text-slate-500 text-sm bg-white/80 border border-slate-100 px-4 py-2 rounded-full shadow-sm">
                <span className="text-slate-400">{icon}</span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Price;
