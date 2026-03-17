const contactDetails = [
  {
    label: 'Address',
    value: 'Lot 13, Résidence Essalem II, Avenue Fethi Zouhir, Cebalat Ben Ammar 2083',
    gradient: 'from-rose-500 to-pink-600',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+1 234 567 8900',
    gradient: 'from-sky-500 to-blue-600',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'nearestdoctor.reply@gmail.com',
    gradient: 'from-violet-500 to-purple-600',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/nearestdoctor',
    gradient: 'from-blue-600 to-blue-700',
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    gradient: 'from-sky-400 to-sky-500',
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ahlem-phantom/AI-HealthCare-Assistant',
    gradient: 'from-slate-700 to-slate-900',
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.28-1.23 3.28-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" /></svg>,
  },
];

const Info = () => (
  <div className="bg-white/70 backdrop-blur-sm border border-white/80 rounded-3xl shadow-card p-8 md:p-10 h-full flex flex-col">
    <h2 className="text-2xl font-bold text-slate-800 mb-8 font-display">Contact information</h2>

    <div className="space-y-5 flex-1">
      {contactDetails.map(({ label, value, gradient, icon }) => (
        <div key={label} className="flex items-start gap-4">
          <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white flex-shrink-0 shadow-sm mt-0.5`}>
            {icon}
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-0.5">{label}</p>
            <p className="text-slate-700 text-sm leading-relaxed">{value}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-8 pt-6 border-t border-slate-100">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">Follow us</p>
      <div className="flex gap-3">
        {socials.map(({ label, href, gradient, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm`}
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Info;
