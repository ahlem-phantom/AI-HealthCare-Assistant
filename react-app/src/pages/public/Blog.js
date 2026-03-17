import Footer from '../../components/layout/Footer';
import { useEffect, useMemo, useState, useRef } from 'react';
import Navbar from '../../components/layout/Navbar';
import axios from 'axios';
import API_BASE_URL from '../../api-config';
import { Link } from 'react-router-dom';

/* Skeleton card */
function SkeletonCard() {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-card flex flex-col md:flex-row">
      <div className="skeleton h-52 md:h-full md:w-56 flex-shrink-0" />
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="skeleton h-3 w-20 rounded-full" />
        <div className="skeleton h-6 w-3/4 rounded-xl" />
        <div className="skeleton h-4 w-full rounded-lg" />
        <div className="skeleton h-4 w-5/6 rounded-lg" />
        <div className="skeleton h-9 w-28 rounded-full mt-auto" />
      </div>
    </div>
  );
}

/* Blog article card */
function BlogCard({ blog, featured = false }) {
  if (featured) {
    return (
      <article
        className="relative rounded-3xl overflow-hidden shadow-card-hover h-72 md:h-96 bg-cover bg-center flex items-end mb-6"
        style={{ backgroundImage: `url(${blog.picture || 'images/image_1.jpg'})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent" />
        <div className="relative p-7 md:p-10 w-full">
          <span className="inline-block px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-3">
            Featured · Health Blog
          </span>
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-3 max-w-2xl leading-snug">
            {blog.title}
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mb-5 line-clamp-2">
            {(blog.description || '').slice(0, 200)}…
          </p>
          <Link
            className="btn-primary text-sm px-5 py-2.5"
            to={`/blog-details/${blog._id}`}
          >
            Read Article
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-400 flex flex-col">
      <div
        className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 overflow-hidden"
        style={{ backgroundImage: `url(${blog.picture || 'images/image_1.jpg'})` }}
      />
      <div className="p-6 flex flex-col flex-1">
        <span className="text-xs uppercase tracking-wider text-sky-500 font-semibold mb-2">Health Blog</span>
        <h3 className="text-slate-800 text-xl font-bold mb-2 leading-snug">{blog.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
          {(blog.description || '').slice(0, 200)}…
        </p>
        <Link
          className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-700 font-semibold text-sm no-underline transition-colors group/link"
          to={`/blog-details/${blog._id}`}
        >
          Read more
          <svg className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

const MOCK_BLOGS = [
  {
    _id: 'mock-1',
    title: 'Modern AI in Diagnostic Radiology',
    description: 'Discover how deep learning models are revolutionizing the way radiologist detect lung conditions with unprecedented accuracy. From CNNs to automated reporting, the future of radiology is here.',
    picture: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80'
  },
  {
    _id: 'mock-2',
    title: 'The Role of Blockchain in Patient Security',
    description: 'Data privacy is paramount in modern healthcare. Explore how Ethereum-based ledgers are providing patients with immutable control over their medical history and securing sensitive records.',
    picture: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80'
  },
  {
    _id: 'mock-3',
    title: 'Telemedicine: Bridging the Distance Gap',
    description: 'Post-pandemic healthcare has evolved. Learn how remote consultation platforms are ensuring that specialized medical advice is accessible to everyone, regardless of their geographical location.',
    picture: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
  },
  {
    _id: 'mock-4',
    title: 'Understanding Personalized Nutrition via AI',
    description: 'Your diet should be as unique as your DNA. Read about how machine learning algorithms analyze metabolic data to provide customized nutritional plans for better long-term health.',
    picture: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80'
  }
];

function Blog() {
  const [blogs, setBlog] = useState(MOCK_BLOGS);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearch] = useState('');
  const searchRef = useRef(null);

  useEffect(() => {
    axios(`${API_BASE_URL}/blogs`)
      .then(res => {
        if (res.data && res.data.length > 0) {
          setBlog([...res.data, ...MOCK_BLOGS]);
        } else {
          setBlog(MOCK_BLOGS);
        }
      })
      .catch(() => setBlog(MOCK_BLOGS))
      .finally(() => setLoading(false));
  }, []);

  const filteredBlogs = useMemo(() =>
    blogs.filter(b =>
      `${b.title || ''} ${b.description || ''}`.toLowerCase().includes(searchValue.toLowerCase())
    ), [blogs, searchValue]);

  const [featured, ...rest] = filteredBlogs;

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200">
      <Navbar />

      {/* ── Animated mesh hero banner ── */}
      <div className="relative pt-32 pb-20 overflow-hidden mesh-gradient flex items-center">
        <div className="absolute top-4 left-[15%] w-72 h-72 rounded-full bg-sky-500/10 blur-[80px] animate-float-slow" />
        <div className="absolute bottom-0 right-[10%] w-56 h-56 rounded-full bg-indigo-500/10 blur-[60px] animate-float-slow" style={{ animationDelay: '2s' }} />

        <div className="relative section-shell z-10">
          <p className="text-slate-400 text-sm mb-2">
            <Link to="/" className="text-sky-400 no-underline hover:text-sky-300 transition-colors">Home</Link>
            <span className="mx-2 text-slate-600">›</span>
            <span>Blog</span>
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Health <span className="text-gradient">Insights</span>
          </h1>
        </div>
      </div>

      <section className="py-16 bg-slate-50 min-h-screen">
        <div className="section-shell">

          {/* Search */}
          <div className="mb-10 max-w-sm">
            <div className="relative" onClick={() => searchRef.current?.focus()}>
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={searchRef}
                type="text"
                value={searchValue}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search articles…"
                className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200 bg-white text-slate-700 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all text-sm shadow-card placeholder-slate-400"
              />
            </div>
          </div>

          {/* Loading skeletons */}
          {loading && (
            <div className="space-y-6">
              <SkeletonCard />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SkeletonCard />
                <SkeletonCard />
              </div>
            </div>
          )}

          {/* Empty state */}
          {!loading && filteredBlogs.length === 0 && (
            <div className="bg-white rounded-3xl p-14 text-center shadow-card">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-slate-600 font-semibold mb-1">No results found</p>
              <p className="text-slate-400 text-sm">Try a different keyword.</p>
            </div>
          )}

          {/* Blog layout */}
          {!loading && filteredBlogs.length > 0 && (
            <>
              {/* Featured */}
              {featured && <BlogCard blog={featured} featured />}

              {/* Grid */}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {rest.map(blog => <BlogCard key={blog._id} blog={blog} />)}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Blog;
