import { Link } from 'react-router-dom';

const quickLinks = [
  { to: '/',        label: 'Home' },
  { to: '/contact', label: 'Contact' },
  { to: '/team',    label: 'Team' },
  { to: '/blog',    label: 'Blog' },
  { to: '/price',   label: 'Pricing' },
  { to: '/shop',    label: 'Shop' },
];

const services = [
  { to: '/upload', label: 'X-Ray Analysis' },
  { to: '/role',   label: 'Get Started' },
  { to: '/login',  label: 'Sign In' },
  { to: '/blog',   label: 'Health Blog' },
];

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/nearestdoctor/',
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    label: 'Email',
    href: 'mailto:nearestdoctor.reply@gmail.com',
    icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ahlem-phantom/AI-HealthCare-Assistant',
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.28-1.23 3.28-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" /></svg>,
  },
];

function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: '#060c1a' }}>
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-40 rounded-full bg-sky-500/5 blur-3xl" />

      <div className="section-shell py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            {/* Logo mark */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-md shadow-sky-500/30">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="text-white text-xl font-bold">
                Nearest<span className="text-sky-400">Doctor</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              AI Healthcare Assistant providing medical services to patients and doctors via chatbots, blockchain records, and ML illness detection.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/8 text-slate-400 hover:text-white hover:bg-sky-500/20 hover:border-sky-500/40 transition-all duration-200 hover:scale-110"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-slate-400 hover:text-sky-400 text-sm transition-colors duration-200 no-underline flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-sky-400 transition-all duration-300 inline-block" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">Services</h3>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {services.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-slate-400 hover:text-sky-400 text-sm transition-colors duration-200 no-underline flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-sky-400 transition-all duration-300 inline-block" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter mini */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">Stay Updated</h3>
            <p className="text-slate-400 text-sm mb-4">Get the latest AI health news and platform updates.</p>
            <form
              className="flex flex-col gap-2"
              onSubmit={e => { e.preventDefault(); e.target.reset(); }}
            >
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 outline-none focus:border-sky-500/60 focus:ring-1 focus:ring-sky-500/30 text-sm transition-all"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-sm font-semibold py-2.5 rounded-xl transition-all duration-300 hover:scale-[1.02]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/6 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} NearestDoctor. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Built with
            <svg className="w-4 h-4 text-rose-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            by
            <a
              href="https://github.com/ahlem-phantom/AI-HealthCare-Assistant"
              target="_blank"
              rel="noreferrer"
              className="text-sky-400 hover:text-sky-300 no-underline transition-colors font-medium"
            >
              AlphaCoders
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
