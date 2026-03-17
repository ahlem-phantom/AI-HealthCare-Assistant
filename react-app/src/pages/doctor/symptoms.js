import React, { useEffect } from 'react';
import UploadImage from '../patient/upload-image/UploadImage';
import Iconify from '../../components/common/Iconify';

function Symptoms() {
  useEffect(() => {
    // Remove legacy Alan AI instance if present
    [...document.getElementsByClassName("alan")].map(n => n && n.remove());
  }, []);

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-1000">
      {/* Page Header */}
      <div className="flex flex-row items-center justify-between gap-8 pb-4">
        <div className="text-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center">
              <Iconify icon="solar:scanner-bold-duotone" className="w-6 h-6 text-sky-500" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-500">Diagnostic Suite</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">
            Scanner <span className="text-sky-500 outline-text">Insights</span>
          </h1>
          <p className="text-slate-500 font-medium mt-2 text-lg">Harness artificial intelligence for instant medical imaging analysis.</p>
        </div>
        
        <div className="hidden sm:flex items-center gap-4 px-6 py-3 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 group hover:border-emerald-200 transition-all">
            <div className="relative">
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
            </div>
            <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-emerald-500 transition-colors">AI Core Status</span>
                <span className="text-xs font-bold text-slate-700">Deep-Analysis Active</span>
            </div>
        </div>
      </div>

      {/* Main Scanner Section */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
        
        {/* Guidance Column */}
        <div className="xl:col-span-4 space-y-8 order-2 xl:order-1">
            <div className="p-10 rounded-[3rem] bg-slate-900 text-white shadow-2xl shadow-slate-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-sky-500/20 via-transparent to-transparent opacity-50" />
                <div className="relative z-10 space-y-10">
                    <div className="space-y-4">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                            <Iconify icon="solar:lightbulb-bolt-bold-duotone" width={32} className="text-sky-400" />
                        </div>
                        <h3 className="text-2xl font-black leading-tight">Expert <br/>Instructions</h3>
                        <p className="text-slate-400 text-sm font-medium leading-relaxed">
                            Follow these protocols to ensure maximum diagnostic accuracy from the neural engine.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            { title: 'Contrast Fidelity', desc: 'Ensure the scan has balanced exposure and clear edges.', icon: 'eva:expand-fill' },
                            { title: 'Zero Glare', desc: 'Medical scans must be free of reflections or digital artifacts.', icon: 'eva:sun-fill' },
                            { title: 'Raw Format', desc: 'Original high-res JPEG/PNG files provide best spectral data.', icon: 'eva:file-text-fill' }
                        ].map((guide, i) => (
                            <div key={i} className="flex gap-4 group/item">
                                <div className="mt-1 w-5 h-5 flex-shrink-0 text-sky-500 group-hover/item:scale-125 transition-transform">
                                    <Iconify icon={guide.icon} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-black uppercase tracking-widest text-white">{guide.title}</p>
                                    <p className="text-[11px] font-medium text-slate-400 line-clamp-2">{guide.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/30 flex items-start gap-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
                    <Iconify icon="solar:shield-keyhole-bold-duotone" width={80} />
                </div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center flex-shrink-0">
                    <Iconify icon="solar:shield-check-bold-duotone" width={24} />
                </div>
                <div className="space-y-2">
                    <h4 className="text-sm font-black uppercase tracking-widest text-slate-900">Privacy & Security</h4>
                    <p className="text-slate-500 text-xs font-medium leading-relaxed">
                        End-to-end encrypted processing compliant with <span className="text-slate-900 font-bold">HIPAA</span> standards. Your clinical data remains private.
                    </p>
                </div>
            </div>
        </div>

        {/* Neural Engine / Upload Column */}
        <div className="xl:col-span-8 order-1 xl:order-2">
            <div className="relative group/scanner">
                {/* Decorative Background Glows */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-sky-500/10 via-transparent to-emerald-500/10 rounded-[4rem] blur-3xl opacity-0 group-hover/scanner:opacity-100 transition-opacity duration-1000" />
                
                <div className="relative rounded-[4rem] bg-white border border-slate-50 shadow-2xl shadow-slate-300/40 p-4 md:p-12 overflow-hidden flex flex-col items-center justify-center min-h-[600px] border-b-8 border-b-sky-500/10">
                    {/* Interior Design Elements */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
                    
                    <div className="w-full max-w-2xl text-center space-y-10">
                        <UploadImage />
                    </div>
                </div>

                {/* Bottom Stats or Info Line */}
                <div className="mt-8 flex flex-wrap justify-center gap-12 opacity-50 group-hover:opacity-100 transition-opacity">
                    {[
                        { label: 'Latency', value: '< 2.4s', icon: 'solar:bolt-bold' },
                        { label: 'Engine', value: 'V4.0 Neural', icon: 'solar:cpu-bold' },
                        { label: 'Precision', value: '99.2%', icon: 'solar:graph-bold' }
                    ].map((stat, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-400">
                            <Iconify icon={stat.icon} className="w-4 h-4" />
                            <span className="text-[10px] font-black uppercase tracking-widest leading-none">{stat.label}: {stat.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}

export default Symptoms;