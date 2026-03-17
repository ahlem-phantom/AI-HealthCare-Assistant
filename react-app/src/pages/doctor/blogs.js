import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../../api-config";
import dayjs from "dayjs";
import Iconify from '../../components/common/Iconify';

import { MOCK_BLOGS } from "../../constants/mockRecords";

function Blogs() {
  const [blogs, setBlog] = useState([]);
  const [categories, setCategories] = useState([]);
  const doctors = JSON.parse(localStorage.getItem('user')).id;

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios(`${API_BASE_URL}/blogs/blog-doctor/${doctors}`);
        if (res.data && res.data.length > 0) {
          setBlog(res.data);
        } else {
          console.log("Backend empty, using mock blogs");
          setBlog(MOCK_BLOGS);
        }
      } catch (err) {
        console.error("Failed to fetch blogs, using mock data:", err);
        setBlog(MOCK_BLOGS);
      }
    };
    getBlogs();

    const getCategories = async () => {
      try {
        const res = await axios(`${API_BASE_URL}/blogs/categories`);
        if (res.data && res.data.length > 0) {
          setCategories(res.data);
        } else {
          setCategories(["General", "News", "Health"]);
        }
      } catch (err) {
        setCategories(["General", "News", "Health"]);
      }
    };
    getCategories();
  }, [doctors]);

  const deletehandler = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      axios
        .delete(`${API_BASE_URL}/blogs/delete-blog/${id}`)
        .then(() => {
          setBlog(blogs.filter(b => b._id !== id));
        });
    }
  };

  const [search, setSearch] = useState("");
  const [searchR, setSearchR] = useState([]);
  const [filtreR, setFiltreR] = useState([]);
  const [showResults, setShowResults] = useState(true);

  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await axios(`${API_BASE_URL}/blogs/search-blog/${search}`);
    setSearchR(res.data);
    setShowResults(false);
  };

  const handleFilter = async (filtre) => {
    const res = await axios(`${API_BASE_URL}/blogs/filter-blog/${filtre}`);
    setFiltreR(res.data);
    setShowResults(false);
  };

  const renderBlogCard = (el) => (
    <div key={el._id} className="group relative bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-sky-50 transition-all duration-300 overflow-hidden flex flex-col h-full">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={el.picture} 
          alt={el.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 flex gap-2">
            <Link to={`/doctor/edit-blog/${el._id}`} className="p-2 rounded-xl bg-white/90 backdrop-blur text-slate-600 hover:bg-sky-500 hover:text-white transition-all shadow-sm">
                <Iconify icon="eva:edit-2-fill" width={18} />
            </Link>
            <button onClick={() => deletehandler(el._id)} className="p-2 rounded-xl bg-white/90 backdrop-blur text-slate-600 hover:bg-rose-500 hover:text-white transition-all shadow-sm">
                <Iconify icon="eva:trash-2-fill" width={18} />
            </button>
        </div>
        <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 rounded-lg bg-sky-500/90 backdrop-blur text-white text-[10px] font-black uppercase tracking-widest">
                {dayjs(el.dateCreation).format("MMM DD, YYYY")}
            </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-black text-slate-900 leading-tight mb-3 line-clamp-2 hover:text-sky-600 transition-colors">
            <Link to={`/doctor/blog-details/${el._id}`} className="no-underline text-inherit">
                {el.title}
            </Link>
        </h3>
        <p className="text-slate-500 text-sm font-medium line-clamp-3 mb-6 flex-1">
            {el.description}
        </p>
        
        <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-4 text-slate-400">
                <div className="flex items-center gap-1.5">
                    <Iconify icon="eva:heart-fill" className="text-rose-400" />
                    <span className="text-xs font-bold">21</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Iconify icon="eva:eye-fill" />
                    <span className="text-xs font-bold">8</span>
                </div>
            </div>
            <Link to={`/doctor/blog-details/${el._id}`} className="text-sky-500 font-black text-[10px] uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                Read Article
                <Iconify icon="eva:arrow-forward-fill" />
            </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-row items-center justify-between gap-6 pb-2">
        <div className="text-left">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            Medical <span className="text-sky-500">Insights</span>
          </h1>
          <p className="text-slate-500 font-medium mt-1">Manage and publish your latest healthcare research and news.</p>
        </div>
        
        <div className="flex items-center gap-4">
            <form className="relative hidden lg:block w-80 group" onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search blogs..."
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 outline-none transition-all font-medium text-sm"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Iconify icon="eva:search-fill" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-sky-500" width={18} />
            </form>
            <Link to="/doctor/add-blog" className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 no-underline whitespace-nowrap">
                <Iconify icon="eva:plus-fill" />
                <span className="hidden sm:inline">New Post</span>
                <span className="sm:hidden">New</span>
            </Link>
        </div>
      </div>

      {/* Categories / Tags */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
        <button 
            onClick={() => { setShowResults(true); setFiltreR([]); setSearchR([]); }}
            className={`px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all whitespace-nowrap ${showResults && filtreR.length === 0 ? 'bg-sky-500 text-white shadow-lg shadow-sky-100' : 'bg-white text-slate-500 hover:bg-slate-50'}`}
        >
            All Posts
        </button>
        {categories.map((cat) => (
            <button 
                key={cat}
                onClick={() => handleFilter(cat)}
                className={`px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all whitespace-nowrap ${filtreR.some(r => r.category === cat) ? 'bg-sky-500 text-white' : 'bg-white text-slate-500 hover:bg-slate-50'}`}
            >
                {cat}
            </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {showResults ? (
            blogs.map(renderBlogCard)
        ) : searchR.length > 0 ? (
            searchR.map(renderBlogCard)
        ) : filtreR.length > 0 ? (
            filtreR.map(renderBlogCard)
        ) : (
            <div className="col-span-full py-20 text-center bg-white rounded-[2.5rem] border border-slate-50 shadow-sm">
                <div className="max-w-xs mx-auto space-y-4 opacity-40 grayscale">
                    <Iconify icon="eva:file-text-outline" width={64} className="mx-auto text-slate-300" />
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">No posts matching your criteria</p>
                </div>
            </div>
        )}
      </div>
    </div>
  );
}

export default Blogs;
