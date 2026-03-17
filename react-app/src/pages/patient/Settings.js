import React from 'react';
import Iconify from '../../components/common/Iconify';

const Settings = () => {
    const settingsSections = [
        {
            title: "Account Preferences",
            icon: "eva:person-outline",
            description: "Manage your personal information and account visibility.",
            options: ["Language", "Time Zone", "Privacy Settings"]
        },
        {
            title: "Notifications",
            icon: "eva:bell-outline",
            description: "Configure how you receive alerts and updates.",
            options: ["Email Notifications", "Push Notifications", "SMS Alerts"]
        },
        {
            title: "Security & Privacy",
            icon: "eva:shield-outline",
            description: "Control your account security and data sharing.",
            options: ["Two-Factor Authentication", "Device Management", "Data Privacy"]
        }
    ];

    return (
        <div className="space-y-10 animate-in fade-in duration-700">
            {/* Page Header */}
            <div className="flex flex-row items-center justify-between gap-6 pb-2">
                <div className="text-left">
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                        Account <span className="text-sky-500">Settings</span>
                    </h1>
                    <p className="text-slate-500 font-medium mt-1">Configure your portal experience and security preferences.</p>
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
                        <h2 className="text-2xl font-black mb-2">Need help with your account?</h2>
                        <p className="text-slate-400 font-medium">Our support team is available 24/7 for any technical issues.</p>
                    </div>
                    <button className="px-8 py-4 rounded-2xl bg-sky-500 text-white font-black hover:bg-sky-600 transition-all shadow-xl shadow-sky-500/20 whitespace-nowrap">
                        Contact Support
                    </button>
                </div>
                {/* Decorative element */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl"></div>
            </div>
        </div>
    );
};

export default Settings;
