import React, { useState } from "react";
import Iconify from '../../components/common/Iconify';
import Swal from 'sweetalert2';

function EditProfile() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    phone: "631-889-3206",
    birthdate: "1985-06-05",
    gender: "Male",
    address: "4487 Snowbird Lane",
    state: "New York",
    country: "United States",
    zip: "10523",
    education: {
      institution: "Oxford University",
      subject: "Computer Science",
      degree: "BE Computer Science",
      grade: "Grade A",
      start: "2002-06-01",
      end: "2006-05-31"
    },
    experience: {
      company: "Digital Development Inc",
      position: "Web Developer",
      location: "United States",
      start: "2007-07-01",
      end: "2018-06-08"
    }
  });

  const handleInputChange = (e, section = null) => {
    const { name, value } = e.target;
    if (section) {
      setFormData(prev => ({
        ...prev,
        [section]: { ...prev[section], [name]: value }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      Swal.fire({
        icon: 'success',
        title: 'Profile Updated',
        text: 'Your information has been successfully saved.',
        timer: 2000,
        showConfirmButton: false
      });
    }, 1000);
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-700 max-w-6xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex flex-row items-center justify-between gap-6 pb-2">
        <div className="text-left">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            Edit <span className="text-sky-500">Profile</span>
          </h1>
          <p className="text-slate-500 font-medium mt-1">Keep your personal and medical information up to date.</p>
        </div>
        <div className="flex items-center gap-3">
           <button 
             onClick={handleSave}
             disabled={loading}
             className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 active:scale-95 disabled:opacity-50"
           >
             {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : (
               <>
                 <Iconify icon="eva:save-fill" className="w-5 h-5" />
                 <span className="hidden sm:inline">Save Changes</span>
                 <span className="sm:hidden text-xs">Save</span>
               </>
             )}
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column: Avatar & Quick Info */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 p-10 flex flex-col items-center text-center">
            <div className="relative group">
              <div className="w-40 h-40 rounded-[3rem] overflow-hidden bg-slate-50 border-4 border-white shadow-inner">
                 <img 
                   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" 
                   alt="Profile"
                   className="w-full h-full object-cover"
                 />
              </div>
              <button className="absolute bottom-2 right-2 p-3 rounded-2xl bg-sky-500 text-white shadow-lg hover:bg-sky-600 transition-all transform hover:scale-110 active:scale-90">
                <Iconify icon="eva:camera-fill" className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mt-8">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">{formData.firstname} {formData.lastname}</h2>
              <p className="text-sky-500 font-bold text-sm tracking-widest uppercase mt-1">Patient Member</p>
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 text-slate-500 text-xs font-bold border border-slate-100">
                <Iconify icon="eva:calendar-outline" className="w-4 h-4" />
                Joined March 2024
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-8 text-white shadow-xl shadow-slate-200 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl font-black" />
            <div className="relative z-10">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Profile Completion</h3>
              <div className="flex items-end justify-between mb-4">
                <span className="text-4xl font-black tracking-tighter">85%</span>
                <span className="text-xs font-bold text-slate-400">Almost there!</span>
              </div>
              <div className="h-3 w-full bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-sky-500 rounded-full" style={{ width: '85%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form Sections */}
        <div className="lg:col-span-2 space-y-10">
          {/* Section: Basic Info */}
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 p-8 sm:p-12">
            <div className="flex items-center gap-4 mb-10 pb-4 border-b border-slate-50">
              <div className="p-3 rounded-2xl bg-sky-50 text-sky-500">
                <Iconify icon="eva:person-fill" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight leading-none">Basic Information</h3>
                <p className="text-slate-400 font-medium text-xs mt-1 uppercase tracking-widest">Update your essential details.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">First Name</label>
                <input 
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-bold text-slate-900" 
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Last Name</label>
                <input 
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-bold text-slate-900" 
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Date of Birth</label>
                <input 
                  type="date"
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-bold text-slate-900 text-sm" 
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Gender</label>
                <select 
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-bold text-slate-900 appearance-none"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section: Contact Details */}
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 p-8 sm:p-12">
            <div className="flex items-center gap-4 mb-10 pb-4 border-b border-slate-50">
              <div className="p-3 rounded-2xl bg-sky-50 text-sky-500">
                <Iconify icon="eva:pin-fill" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight leading-none">Contact Information</h3>
                <p className="text-slate-400 font-medium text-xs mt-1 uppercase tracking-widest">Where can we reach you?</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="sm:col-span-2 space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Physical Address</label>
                <input 
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-bold text-slate-900" 
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">City / State</label>
                <input 
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-bold text-slate-900" 
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                <input 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-bold text-slate-900" 
                />
              </div>
            </div>
          </div>

          {/* Section: Professional & Education */}
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 p-8 sm:p-12">
            <div className="flex items-center gap-4 mb-10 pb-4 border-b border-slate-50">
              <div className="p-3 rounded-2xl bg-sky-50 text-sky-500">
                <Iconify icon="eva:award-fill" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight leading-none">Professional History</h3>
                <p className="text-slate-400 font-medium text-xs mt-1 uppercase tracking-widest">Education and work experience.</p>
              </div>
            </div>

            <div className="space-y-10">
              {/* Education Sub-section */}
              <div>
                <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6 ml-1">Education</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-300 ml-1">Institution</label>
                    <input 
                      name="institution"
                      value={formData.education.institution}
                      onChange={(e) => handleInputChange(e, 'education')}
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50/50 border border-slate-100 focus:border-sky-500 outline-none transition-all font-bold text-slate-900" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-300 ml-1">Subject</label>
                    <input 
                      name="subject"
                      value={formData.education.subject}
                      onChange={(e) => handleInputChange(e, 'education')}
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50/50 border border-slate-100 focus:border-sky-500 outline-none transition-all font-bold text-slate-900" 
                    />
                  </div>
                </div>
              </div>

              {/* Work Sub-section */}
              <div>
                <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6 ml-1">Work Experience</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-300 ml-1">Current Company</label>
                    <input 
                      name="company"
                      value={formData.experience.company}
                      onChange={(e) => handleInputChange(e, 'experience')}
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50/50 border border-slate-100 focus:border-sky-500 outline-none transition-all font-bold text-slate-900" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-300 ml-1">Job Position</label>
                    <input 
                      name="position"
                      value={formData.experience.position}
                      onChange={(e) => handleInputChange(e, 'experience')}
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50/50 border border-slate-100 focus:border-sky-500 outline-none transition-all font-bold text-slate-900" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
