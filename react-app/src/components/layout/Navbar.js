/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthService from '../../services/auth.service';
import Iconify from '../common/Iconify';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(typeof window !== 'undefined' ? window.scrollY > 60 : false);
  const location = useLocation();

  const [currentUser, setCurrentUser] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, [location.pathname]); // Update when route changes to catch logouts/logins

  const logout = () => {
    AuthService.logout();
    setCurrentUser(undefined);
    navigate('/');
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [location.pathname]);


  const visitorLinks = [
    { to: '/',        label: 'Home' },
    { to: '/team',    label: 'About' },
    { to: '/price',   label: 'Pricing' },
    { to: '/blog',    label: 'Blog' },
    { to: '/contact', label: 'Contact' },
    { to: '/shop',    label: 'Shop' },
  ];

  const doctorLinks = [
    { to: '/doctor/app', label: 'Dashboard' },
    { to: '/doctor/appointments', label: 'Appointments' },
    { to: '/doctor/scanner', label: 'Scanner' },
    { to: '/doctor/blogs', label: 'Articles' },
  ];

  const patientLinks = [
    { to: '/patient/app', label: 'Dashboard' },
    { to: '/patient/doctors', label: 'Doctors' },
    { to: '/patient/appointments', label: 'Schedule' },
    { to: '/patient/records', label: 'Records' },
  ];

  const userRole = (currentUser?.role || (currentUser?.roles && currentUser.roles[0]) || "").toLowerCase();
  const navLinks = currentUser 
    ? userRole.includes('doctor') ? doctorLinks : patientLinks 
    : visitorLinks;

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <div>
        {/* ── Visitor navbar — scroll-aware glassmorphism ── */}
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            scrolled
              ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-100/80'
              : 'bg-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-18 py-4">

              {/* Logo */}
              <Link to="/" className="flex items-center gap-2.5 no-underline group">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  scrolled ? 'bg-gradient-to-br from-sky-500 to-blue-600 shadow-md shadow-sky-500/30' : 'bg-white/20 backdrop-blur-md'
                }`}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className={`text-xl font-bold transition-colors duration-300 ${scrolled ? 'text-slate-800' : 'text-white'}`}>
                  Nearest<span className="text-sky-400">Doctor</span>
                </span>
              </Link>

              {/* Desktop links */}
              <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
                {navLinks.map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className={`relative px-4 py-2 rounded-full text-sm font-medium no-underline transition-all duration-200 ${
                        isActive(to)
                          ? scrolled
                            ? 'text-sky-600 bg-sky-50'
                            : 'text-white bg-white/15'
                          : scrolled
                          ? 'text-slate-600 hover:text-sky-600 hover:bg-slate-50'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {label}
                      {isActive(to) && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-sky-500 animate-scale-in" />
                      )}
                    </Link>
                  </li>
                ))}


                {currentUser ? (
                  <>
                    <li className="ml-3">
                      <button
                        onClick={logout}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold no-underline transition-all duration-200 border ${
                          scrolled
                            ? 'border-rose-500 text-rose-600 hover:bg-rose-50'
                            : 'border-white/40 text-white hover:bg-white/10 hover:border-white/60'
                        }`}
                      >
                        <Iconify icon="eva:log-out-fill" />
                        Sign Out
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="ml-3">
                      <Link
                        to="/role"
                        className="btn-primary text-sm px-5 py-2.5"
                      >
                        Get Started
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/login"
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold no-underline transition-all duration-200 border ${
                          scrolled
                            ? 'border-sky-500 text-sky-600 hover:bg-sky-50'
                            : 'border-white/40 text-white hover:bg-white/10 hover:border-white/60'
                        }`}
                      >
                        Sign In
                      </Link>
                    </li>
                  </>
                )}
              </ul>

              {/* Mobile hamburger */}
              <button
                className={`md:hidden p-2 rounded-xl transition-all duration-200 ${
                  scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile menu — animated slide-down */}
            {mobileOpen && (
              <div className="md:hidden animate-slide-down border-t border-white/10 py-4 space-y-1 bg-slate-900/95 backdrop-blur-xl rounded-2xl mb-3 px-3 shadow-2xl">
                {navLinks.map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className={`block px-4 py-3 rounded-xl font-medium no-underline text-sm transition-all duration-200 ${
                      isActive(to)
                        ? 'text-sky-300 bg-sky-500/15'
                        : 'text-slate-300 hover:text-sky-300 hover:bg-white/5'
                    }`}
                  >
                    {label}
                  </Link>
                ))}
                {currentUser ? (
                  <button
                    onClick={logout}
                    className="block w-full text-center bg-rose-500 text-white font-semibold px-4 py-2.5 rounded-xl no-underline text-sm mt-2"
                  >
                    Sign Out
                  </button>
                ) : (
                  <div className="pt-3 grid grid-cols-2 gap-2 border-t border-white/10 mt-2">
                    <Link
                      to="/role"
                      className="block text-center bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold px-4 py-2.5 rounded-xl no-underline text-sm"
                    >
                      Get Started
                    </Link>
                    <Link
                      to="/login"
                      className="block text-center border border-sky-400/40 text-sky-300 font-semibold px-4 py-2.5 rounded-xl no-underline text-sm hover:bg-sky-500/10 transition-all"
                    >
                      Sign In
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </nav>
    </div>
  );
}

export default Navbar;
