/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, useLocation } from 'react-router-dom';
import Iconify from '../common/Iconify';
import sidebarConfig from '../../pages/doctor/config';

function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[45] transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      <aside 
        className={`fixed md:relative h-full z-50 transition-all duration-300 flex-shrink-0 ${isOpen ? 'w-72 translate-x-0' : 'w-0 -translate-x-full md:w-20 md:translate-x-0'}`}
      >
      <div className="h-full bg-slate-900/95 backdrop-blur-xl border-r border-white/10 shadow-2xl flex flex-col overflow-hidden">
        {/* Brand section */}
        <div className={`p-8 pb-4 transition-all duration-300 ${isOpen ? '' : 'px-4'}`}>
          <Link to="/" className={`flex items-center gap-2.5 no-underline group transition-all duration-300 ${isOpen ? 'px-2' : 'justify-center overflow-hidden'}`}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-sky-500 to-blue-600 shadow-md shadow-sky-500/30 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span className={`text-xl font-bold text-white whitespace-nowrap transition-all duration-300 ${isOpen ? 'w-auto opacity-100 ml-0' : 'w-0 opacity-0 pointer-events-none'}`}>
              Nearest<span className="text-sky-400">Doctor</span>
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto custom-scrollbar">
          {sidebarConfig.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 px-6 py-4 rounded-3xl transition-all duration-300 group no-underline ${
                isActive(item.path)
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/20 translate-x-1'
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              } ${!isOpen ? 'md:justify-center md:px-0 md:rounded-2xl' : ''}`}
              title={!isOpen ? item.title : ''}
            >
              <Iconify 
                icon={item.icon} 
                className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
                  isActive(item.path) ? 'scale-110' : 'group-hover:scale-110'
                }`} 
              />
              {isOpen && <span className="font-bold text-sm tracking-wide whitespace-nowrap overflow-hidden">{item.title}</span>}
            </Link>
          ))}
        </nav>

        {/* Bottom Status Card */}
        {isOpen && (
          <div className="p-6 mt-auto animate-in fade-in duration-500">
            <div className="bg-white/5 rounded-[2rem] p-5 border border-white/5">
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">System Healthy</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-sky-500 w-full rounded-full"></div>
              </div>
              <p className="text-[10px] text-slate-500 font-bold mt-3 leading-tight uppercase tracking-wider text-center">Cloud Sync Active</p>
            </div>
          </div>
        )}
      </div>
    </aside>
  </>
  );
}

export default Sidebar;