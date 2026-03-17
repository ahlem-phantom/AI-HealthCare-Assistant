import { useEffect, useState } from "react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../../api-config";
import dayjs from "dayjs";
import Iconify from "../../components/common/Iconify";
import { MOCK_BLOGS } from "../../constants/mockRecords";

function BlogDetails() {
  const params = useParams();
  const [blog, setBlog] = useState(null);
  const [search, setSearch] = useState("");
  const [searchR, setSearchR] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogData = async () => {
      setLoading(true);
      try {
        const res = await axios(`${API_BASE_URL}/blogs/blog/${params.id}`);
        if (res.data && res.data.title) {
          setBlog(res.data);
        } else {
          // Fallback to mock data
          const mockMatch = MOCK_BLOGS.find(b => b._id === params.id) || MOCK_BLOGS[0];
          setBlog(mockMatch);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        const mockMatch = MOCK_BLOGS.find(b => b._id === params.id) || MOCK_BLOGS[0];
        setBlog(mockMatch);
      } finally {
        setLoading(false);
      }
    };
    getBlogData();
  }, [params.id]);

  const onChangeSearch = (e) => setSearch(e.target.value);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search) return;
    try {
      const res = await axios(`${API_BASE_URL}/blogs/search/${search}`);
      setSearchR(res.data || []);
    } catch (error) {
      console.error("Search error:", error);
      setSearchR([]);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500"></div>
      </div>
    );
  }

  if (!blog) return null;

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            <Link to="/doctor/app" className="hover:text-sky-500 transition-colors no-underline">Dashboard</Link>
            <Iconify icon="eva:chevron-right-fill" className="w-4 h-4" />
            <Link to="/doctor/blogs" className="hover:text-sky-500 transition-colors no-underline">Medical Library</Link>
            <Iconify icon="eva:chevron-right-fill" className="w-4 h-4" />
            <span className="text-slate-900">Article View</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            {blog.title}
          </h1>
        </div>
        <Link 
          to="/doctor/blogs"
          className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-slate-200 text-slate-600 font-bold hover:text-sky-600 hover:border-sky-200 hover:bg-sky-50/50 transition-all shadow-sm group"
        >
          <Iconify icon="eva:arrow-back-fill" className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Back to list
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-10">
          <article className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
            {/* Featured Image */}
            <div className="relative h-[400px] w-full group overflow-hidden">
              <img
                alt={blog.title}
                src={blog.picture}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-sky-500/20 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl">
                    <span className="text-white text-sm font-bold tracking-wide uppercase">
                      {blog.category || 'Clinical Research'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                    <Iconify icon="eva:calendar-outline" className="w-4 h-4" />
                    {dayjs(blog.dateCreation).isValid() ? dayjs(blog.dateCreation).format('MMMM D, YYYY') : 'Recent Publication'}
                  </div>
                </div>
              </div>
            </div>

            {/* Post Content */}
            <div className="p-8 md:p-12 space-y-8">
              <div className="flex items-center gap-4 pb-8 border-b border-slate-50">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400">
                  <Iconify icon="eva:person-fill" className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-500">Written By</p>
                  <p className="text-slate-900 font-bold">{blog.author || 'Medical Editorial Board'}</p>
                </div>
              </div>

              <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed font-medium">
                <p className="first-letter:text-5xl first-letter:font-black first-letter:text-sky-500 first-letter:mr-3 first-letter:float-left">
                  {blog.description}
                </p>
                {/* Additional mock paragraphs to fill the space */}
                <p className="mt-6">
                  Healthcare professionals across the globe are continuously adapting to new findings in this field. 
                  The integration of digital health tools and patient-centric models has proven to be a game-changer 
                  in improving clinical outcomes. This study highlights the critical intersections between traditional 
                  care and modern technological interventions.
                </p>
                <div className="my-10 p-8 rounded-3xl bg-slate-50 border-l-4 border-sky-500 italic text-slate-700 text-xl font-medium leading-relaxed">
                  "The future of medicine lies not just in treatment, but in the comprehensive understanding of patient data 
                  and the proactive management of health risks long before they manifest into chronic conditions."
                </div>
                <p>
                  In conclusion, the data suggests a strong correlation between early intervention and long-term recovery rates. 
                  Medical professionals are encouraged to review these insights and consider their application within 
                  their specific clinical environments.
                </p>
              </div>

              {/* Share */}
              <div className="pt-10 mt-10 border-t border-slate-50">
                <div className="flex flex-wrap items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-black uppercase tracking-widest text-slate-400">Share This Article</span>
                    <div className="flex gap-2">
                      {['facebook', 'twitter', 'linkedin-fill', 'link-2-fill'].map((icon) => (
                        <button key={icon} className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 hover:bg-sky-500 hover:text-white transition-all flex items-center justify-center">
                          <Iconify icon={`eva:${icon}`} className="w-5 h-5" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Search Widget */}
          <div className="bg-white rounded-[2rem] border border-slate-100 p-8 shadow-lg shadow-slate-200/30">
            <h3 className="text-lg font-black text-slate-900 mb-6">Explore Topics</h3>
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search research database..."
                className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-medium placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500/20 transition-all outline-none"
                value={search}
                onChange={onChangeSearch}
              />
              <Iconify icon="eva:search-fill" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <button type="submit" className="hidden" />
            </form>
            {searchR.length > 0 && (
              <ul className="mt-4 space-y-2">
                {searchR.map((el, index) => (
                  <li key={index}>
                    <a href={el.link} className="text-sky-500 font-bold hover:underline py-1 block">{el.title}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Latest Posts Widget */}
          <div className="bg-white rounded-[2rem] border border-slate-100 p-8 shadow-lg shadow-slate-200/30">
            <h3 className="text-lg font-black text-slate-900 mb-8">Related Articles</h3>
            <ul className="space-y-8">
              {MOCK_BLOGS.filter(b => b._id !== params.id).slice(0, 3).map((item) => (
                <li key={item._id} className="group">
                  <Link to={`/doctor/blog-details/${item._id}`} className="flex gap-4 no-underline cursor-pointer">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
                      <img
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        src={item.picture}
                        alt=""
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2 leading-snug">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <Iconify icon="eva:calendar-fill" className="w-3 h-3" />
                        {dayjs(item.dateCreation).format('MMM D, YYYY')}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags Widget */}
          <div className="bg-white rounded-[2rem] border border-slate-100 p-8 shadow-lg shadow-slate-200/30">
            <h3 className="text-lg font-black text-slate-900 mb-6">Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {['Healthcare', 'Research', 'Diagnostics', 'Pediatrics', 'Safety', 'Technology', 'Medicine'].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-xl bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-widest hover:bg-sky-50 hover:text-sky-600 transition-colors cursor-pointer">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default BlogDetails;
