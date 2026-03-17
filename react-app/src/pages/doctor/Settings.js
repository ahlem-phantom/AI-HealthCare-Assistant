import React from 'react';
import Iconify from '../../components/common/Iconify';

const Settings = () => {
    const settingsSections = [
        {
            title: "Professional Profile",
            icon: "eva:briefcase-outline",
            description: "Update your medical credentials and clinic information.",
            options: ["Specialization", "Clinic Details", "Work Hours"]
        },
        {
            title: "Practice Management",
            icon: "eva:settings-2-outline",
            description: "Control how you manage appointments and patient data.",
            options: ["Booking Rules", "Record Visibility", "Electronic Signatures"]
        },
        {
            title: "Security & Access",
            icon: "eva:lock-outline",
            description: "Manage your login methods and session security.",
            options: ["Password Update", "Two-Factor Auth", "Access Logs"]
        }
    ];

    return (
        <div className="space-y-10 animate-in fade-in duration-700">
            {/* Page Header */}
            <div className="flex flex-row items-center justify-between gap-6 pb-2">
                <div className="text-left">
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                        System <span className="text-sky-500">Settings</span>
                    </h1>
                    <p className="text-slate-500 font-medium mt-1">Configure your professional workspace and security parameters.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {settingsSections.map((section, idx) => (
                    <div key={idx} className="group bg-white rounded-[2.5rem] border border-slate-50 p-8 shadow-sm hover:shadow-xl hover:shadow-sky-50/50 transition-all duration-500">
                        <div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Iconify icon={section.icon} width={28} />
                        </div>
                        <h3 className="text-xl font-black text-slate-900 mb-2">{section.title}</h3>
                        <p className="text-slate-500 text-sm font-medium mb-6">{section.description}</p>
                        
                        <div className="space-y-3">
                            {section.options.map((opt, i) => (
                                <button key={i} className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 text-slate-600 hover:text-sky-600 transition-all text-sm font-bold border border-transparent hover:border-slate-100">
                                    {opt}
                                    <Iconify icon="eva:chevron-right-fill" />
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h2 className="text-2xl font-black mb-2">Practice Support</h2>
                        <p className="text-slate-400 font-medium">Need help with system configuration? Contact our professional support desk.</p>
                    </div>
                    <button className="px-8 py-4 rounded-2xl bg-sky-500 text-white font-black hover:bg-sky-600 transition-all shadow-xl shadow-sky-500/20 whitespace-nowrap">
                        Get Professional Support
                    </button>
                </div>
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl"></div>
            </div>
        </div>
    );
};

export default Settings;
