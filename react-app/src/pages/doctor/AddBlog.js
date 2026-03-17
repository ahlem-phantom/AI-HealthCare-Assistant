import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../../api-config";
import Iconify from "../../components/common/Iconify";

function AddBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const [picture, setPicture] = useState("");
  const [status, setStatus] = useState("active");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeCategory = (e) => setCategory(e.target.value);
  const onChangeDescription = (e) => setDescription(e.target.value);

  const onChangePicture = (e) => {
    const img = e.target.files[0];
    if (img) {
      setFile(img);
      setPicture(URL.createObjectURL(img));
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const doctorId = user?.id || user?._id;

      const formData = new FormData();
      formData.append('profileImg', file);
      formData.append('title', title);
      formData.append('description', description);
      formData.append('doctors', doctorId);
      formData.append('category', category);
      formData.append('status', status);

      const config = {
        headers: { 'content-type': 'multipart/form-data' }
      };
      
      await axios.post(`${API_BASE_URL}/blogs/create-blog`, formData, config);
      navigate("/doctor/blogs", { replace: true });
    } catch (error) {
      console.error("Error creating blog:", error);
      alert("Failed to upload blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-1000 pb-20">
      {/* Page Header */}
      <div className="flex flex-row items-center justify-between gap-8 pb-4">
        <div className="text-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center">
              <Iconify icon="solar:pen-new-square-bold-duotone" className="w-6 h-6 text-sky-500" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-500">Article Studio</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">
            Create <span className="text-sky-500">Context</span>
          </h1>
          <p className="text-slate-500 font-medium mt-2 text-lg">Draft and publish medical insights for your patient community.</p>
        </div>

        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 text-slate-600 font-bold hover:bg-slate-50 transition-all active:scale-95"
        >
          <Iconify icon="eva:arrow-back-fill" />
          Discard Changes
        </button>
      </div>

      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleAdd} className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[3.5rem] p-8 md:p-14 shadow-2xl shadow-slate-200/50 space-y-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Column: Details */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-xl font-black text-slate-900 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-sm">1</span>
                  Blog Essentials
                </h3>
                
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Article Title</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. The Future of Telemedicine"
                      value={title} 
                      onChange={onChangeTitle}
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 transition-all font-bold text-slate-700" 
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Category</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Health Tips, Research"
                      value={category} 
                      onChange={onChangeCategory}
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 transition-all font-bold text-slate-700" 
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-4">
                <h3 className="text-xl font-black text-slate-900 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-sm">2</span>
                  Publishing Options
                </h3>
                
                <div className="flex gap-4">
                  {['active', 'inactive'].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setStatus(s)}
                      className={`flex-1 py-4 rounded-2xl border-2 transition-all font-black uppercase tracking-widest text-[10px] flex flex-col items-center gap-2
                        ${status === s 
                          ? 'bg-sky-50 border-sky-500 text-sky-600' 
                          : 'bg-white border-slate-100 text-slate-400 hover:border-slate-200'}`}
                    >
                      <Iconify 
                        icon={s === 'active' ? 'solar:play-circle-bold-duotone' : 'solar:pause-circle-bold-duotone'} 
                        className="w-6 h-6" 
                      />
                      {s}
                    </button>
                  ))}
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                    <div className="flex items-center gap-2 text-slate-400">
                        <Iconify icon="solar:shield-warning-bold-duotone" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Visibility Tip</span>
                    </div>
                    <p className="text-[11px] font-medium text-slate-500 leading-relaxed">
                        Public blogs are immediately visible to all patients. Setting to "Inactive" allows you to save as a draft.
                    </p>
                </div>
              </div>
            </div>

            {/* Right Column: Visuals & Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-black text-slate-900 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-sm">3</span>
                  Cover Imagery
                </h3>

                <div className="relative group/upload">
                  <input
                    type="file"
                    id="blog_image"
                    className="hidden"
                    onChange={onChangePicture}
                    accept="image/*"
                  />
                  <label 
                    htmlFor="blog_image"
                    className={`block w-full cursor-pointer rounded-3xl border-4 border-dashed transition-all duration-500 overflow-hidden relative
                      ${picture ? 'border-sky-500 scale-[1.02]' : 'border-slate-100 bg-slate-50/50 hover:bg-sky-50/30 hover:border-sky-200 min-h-[220px]'}`}
                  >
                    {picture ? (
                      <div className="relative group/preview min-h-[220px]">
                        <img src={picture} alt="Preview" className="w-full h-full object-cover max-h-[300px]" />
                        <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                          <p className="text-white font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                             <Iconify icon="solar:refresh-bold" /> Change Media
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-4">
                        <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center">
                          <Iconify icon="solar:camera-add-bold-duotone" className="w-8 h-8 text-sky-500" />
                        </div>
                        <div>
                          <p className="text-sm font-black text-slate-700">Add Cover Image</p>
                          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">PNG, JPG or GIF (Max 50MB)</p>
                        </div>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-black text-slate-900 flex items-center gap-3 py-2">
                  <span className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-sm">4</span>
                  Content Body
                </h3>
                <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Detailed Description</label>
                    <textarea 
                        required
                        value={description} 
                        onChange={onChangeDescription}
                        rows={8}
                        placeholder="Write your blog content here..."
                        className="w-full px-8 py-6 rounded-[2rem] bg-white border border-slate-100 outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 transition-all font-medium text-slate-600 leading-relaxed text-sm"
                    />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-slate-400">
                <Iconify icon="solar:info-circle-bold-duotone" className="w-5 h-5" />
                <span className="text-xs font-bold">Standard community guidelines apply to all medical blogs.</span>
            </div>
            
            <button 
              type="submit"
              disabled={loading}
              className={`w-full md:w-auto px-12 py-5 rounded-2xl font-black text-lg transition-all active:scale-95 flex items-center justify-center gap-4 shadow-2xl
                ${loading 
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                  : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-200'}`}
            >
              {loading ? (
                <>
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Publishing...</span>
                </>
              ) : (
                <>
                  <Iconify icon="solar:paper-plane-bold-duotone" width={24} className="text-sky-400" />
                  <span>Launch Blog Post</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBlog;
