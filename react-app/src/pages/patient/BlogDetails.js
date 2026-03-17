import { useEffect, useState } from "react";
import React from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../../api-config";
import dayjs from "dayjs";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const MOCK_BLOGS = [
  {
    _id: 'mock-1',
    title: 'Modern AI in Diagnostic Radiology',
    description: 'Discover how deep learning models are revolutionizing the way radiologist detect lung conditions with unprecedented accuracy. From CNNs to automated reporting, the future of radiology is here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    picture: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    dateCreation: new Date().toISOString()
  },
  {
    _id: 'mock-2',
    title: 'The Role of Blockchain in Patient Security',
    description: 'Data privacy is paramount in modern healthcare. Explore how Ethereum-based ledgers are providing patients with immutable control over their medical history and securing sensitive records. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    picture: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80',
    dateCreation: new Date().toISOString()
  },
  {
    _id: 'mock-3',
    title: 'Telemedicine: Bridging the Distance Gap',
    description: 'Post-pandemic healthcare has evolved. Learn how remote consultation platforms are ensuring that specialized medical advice is accessible to everyone, regardless of their geographical location. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    picture: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    dateCreation: new Date().toISOString()
  },
  {
    _id: 'mock-4',
    title: 'Understanding Personalized Nutrition via AI',
    description: 'Your diet should be as unique as your DNA. Read about how machine learning algorithms analyze metabolic data to provide customized nutritional plans for better long-term health. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    picture: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80',
    dateCreation: new Date().toISOString()
  }
];

function BlogDetails() {
  const params = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchR, setSearchR] = useState([]);

  useEffect(() => {
    const getBlog = async () => {
      setLoading(true);
      // Check for mock data first
      const mock = MOCK_BLOGS.find(b => b._id === params.id);
      if (mock) {
        setBlog(mock);
        setLoading(false);
        return;
      }

      try {
        const res = await axios(`${API_BASE_URL}/blogs/blog/${params.id}`);
        setBlog(res.data);
      } catch (err) {
        console.error("Error fetching blog:", err);
        // Fallback to first mock if something goes wrong
        setBlog(MOCK_BLOGS[0]);
      } finally {
        setLoading(false);
      }
    };
    getBlog();
  }, [params.id]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    try {
      const res = await axios(`${API_BASE_URL}/blogs/search/${search}`);
      setSearchR(res.data);
    } catch (err) {
      console.error("Search error:", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="animate-pulse text-sky-400 font-bold uppercase tracking-widest">Loading Article...</div>
      </div>
    );
  }

  if (!blog) return null;

  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />

      {/* ── Hero Banner ── */}
      <div className="relative pt-32 pb-20 overflow-hidden mesh-gradient flex items-center">
        <div className="absolute top-4 left-[15%] w-72 h-72 rounded-full bg-sky-500/10 blur-[80px] animate-float-slow" />
        <div className="absolute bottom-0 right-[10%] w-56 h-56 rounded-full bg-indigo-500/10 blur-[60px] animate-float-slow" style={{ animationDelay: '2s' }} />

        <div className="relative section-shell z-10">
          <p className="text-slate-400 text-sm mb-4">
            <Link to="/" className="text-sky-400 no-underline hover:text-sky-300 transition-colors">Home</Link>
            <span className="mx-2 text-slate-600">›</span>
            <Link to="/blog" className="text-sky-400 no-underline hover:text-sky-300 transition-colors">Blog</Link>
            <span className="mx-2 text-slate-600">›</span>
            <span className="text-slate-300 truncate inline-block max-w-[200px] align-bottom">Article Details</span>
          </p>
          <h1 className="text-white text-3xl md:text-5xl font-black leading-tight max-w-4xl tracking-tight">
            {blog.title}
          </h1>
        </div>
      </div>

      <section className="py-16 bg-slate-50 min-h-screen relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100/50 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="section-shell relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
              <article className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-slate-100">
                <div className="relative h-96 md:h-[500px] w-full overflow-hidden">
                    <img 
                        src={blog.picture} 
                        alt={blog.title} 
                        className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-110" 
                    />
                    <div className="absolute top-8 left-8">
                        <span className="px-5 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md shadow-lg text-slate-900 text-xs font-black uppercase tracking-widest border border-white/20">
                            Research & Tech
                        </span>
                    </div>
                </div>

                <div className="p-8 md:p-14">
                  <div className="flex items-center gap-6 mb-10 pb-8 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-sky-500 text-white flex items-center justify-center font-black">ND</div>
                        <div>
                            <p className="text-slate-900 font-bold leading-none mb-1">NearestDoctor Editor</p>
                            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Medical Analysis Team</p>
                        </div>
                    </div>
                    <div className="h-10 w-px bg-slate-100 hidden sm:block"></div>
                    <div className="hidden sm:flex items-center gap-2">
                        <svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-xs font-bold text-slate-500">{dayjs(blog.dateCreation).format('MMMM DD, YYYY')}</span>
                    </div>
                  </div>

                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium mb-8 first-letter:text-5xl first-letter:font-black first-letter:text-sky-500 first-letter:mr-3 first-letter:float-left">
                      {blog.description}
                    </p>
                    <p className="text-slate-500 leading-relaxed mb-6">
                      The integration of advanced technological solutions into the medical field has always been a catalyst for progress. 
                      As we look at the current landscape of healthcare, the impact of artificial intelligence and digital security 
                      cannot be overstated. This article explores the nuances of these developments and what they mean for the 
                      future relationship between patients and healthcare providers.
                    </p>
                    <blockquote className="my-10 p-10 bg-slate-50 rounded-[2.5rem] border-l-8 border-sky-500 italic relative overflow-hidden">
                        <div className="absolute -top-4 -left-2 text-9xl text-sky-500/10 font-serif">"</div>
                        <p className="text-slate-700 text-xl font-medium relative z-10">
                            Innovation in healthcare isn't just about faster diagnostic tools; it's about building an 
                            ecosystem of trust through security and accessibility.
                        </p>
                        <cite className="block mt-4 text-sky-500 font-bold not-italic">— Alpha Coders Engineering Team</cite>
                    </blockquote>
                  </div>

                  {/* Social Share */}
                  <div className="mt-16 pt-10 border-t border-slate-100 flex flex-wrap items-center justify-between gap-6">
                    <h4 className="text-slate-900 font-black text-sm uppercase tracking-widest">Share this Article</h4>
                    <div className="flex gap-3">
                        {['facebook', 'twitter', 'linkedin', 'github'].map(social => (
                            <button key={social} className="w-12 h-12 rounded-xl bg-slate-50 text-slate-400 hover:bg-sky-500 hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center shadow-sm">
                                <i className={`fa fa-${social} text-lg`} />
                            </button>
                        ))}
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Search Widget */}
              <div className="bg-white rounded-[2.5rem] p-8 shadow-lg border border-slate-100">
                <h3 className="text-slate-900 font-black text-xl mb-6 flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-sky-500 rounded-full"></span>
                    Search Articles
                </h3>
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Keywords..."
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700 outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-500/10 transition-all text-sm font-medium"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center hover:bg-sky-500 transition-all shadow-lg active:scale-95">
                    <i className="fa fa-search" />
                  </button>
                </form>
              </div>

              {/* Latest / Related Widget */}
              <div className="bg-white rounded-[2.5rem] p-8 shadow-lg border border-slate-100 overflow-hidden">
                <h3 className="text-slate-900 font-black text-xl mb-6 flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-indigo-500 rounded-full"></span>
                    Quick Results
                </h3>
                <div className="space-y-6">
                {searchR.length > 0 ? (
                    searchR.map((el, index) => (
                        <a key={index} href={el.link} className="flex gap-4 group">
                            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex-shrink-0 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                                <i className="fa fa-link" />
                            </div>
                            <div className="flex-1 overflow-hidden">
                                <h4 className="text-slate-900 font-bold text-sm leading-snug group-hover:text-indigo-600 transition-colors line-clamp-2">{el.title}</h4>
                                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">External Resource</p>
                            </div>
                        </a>
                    ))
                ) : (
                    <div className="py-6 text-center">
                        <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-4 text-slate-200">
                            <i className="fa fa-search text-3xl" />
                        </div>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">No recent searches</p>
                    </div>
                )}
                </div>
              </div>

              {/* Demo Notice */}
              <div className="bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-sky-500/20 transition-colors" />
                <h3 className="text-white font-black text-xl mb-4 relative z-10">Premium Member?</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 relative z-10">
                    Get access to exclusive medical whitepapers, AI analysis benchmarks, and early access to platform features.
                </p>
                <Link to="/patient/dashboard" className="inline-block w-full py-4 rounded-2xl bg-sky-500 text-white font-black uppercase text-[10px] tracking-[0.2em] text-center hover:bg-sky-400 transition-all shadow-xl shadow-sky-500/20 relative z-10">
                    View My Dashboard
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BlogDetails;
