import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from "../../api-config";
import { Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

const demoProducts = [
  { id: 'p1', name: 'Digital Stethoscope Pro', price: 299, description: 'Next-generation acoustic technology with noise cancellation and Bluetooth recording.', category: 'Diagnostic', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80', status: 'In Stock' },
  { id: 'p2', name: 'Portable Pulse Oximeter', price: 45, description: 'Medical-grade oxygen saturation and heart rate monitoring in a compact design.', category: 'Monitoring', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=500&q=80', status: 'In Stock' },
  { id: 'p3', name: 'Smart Blood Pressure Cuff', price: 89, description: 'Wireless syncing with medical apps for long-term health tracking and analysis.', category: 'Monitoring', image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=500&q=80', status: 'Trending' },
  { id: 'p4', name: 'First Aid Elite Kit', price: 65, description: 'Professional responder kit containing over 100 essential trauma and injury supplies.', category: 'Supplies', image: 'https://images.unsplash.com/photo-1603398938378-e54eab446f3e?auto=format&fit=crop&w=500&q=80', status: 'Limited' },
  { id: 'p5', name: 'Infrared Thermometer', price: 35, description: 'Instant, accurate non-contact temperature readings with LED backlight.', category: 'Diagnostic', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80', status: 'In Stock' },
  { id: 'p6', name: 'Surgical Mask Case (50pk)', price: 25, description: 'High-clarity, anti-fog protection for frontline healthcare professionals.', category: 'Protection', image: 'https://images.unsplash.com/photo-1584634731339-252c5aba1957?auto=format&fit=crop&w=500&q=80', status: 'Bulk' },
  { id: 'p7', name: 'Dental X-Ray Sensor', price: 1200, description: 'Ultra-thin digital intraoral sensor for high-resolution dental imaging.', category: 'Radiology', image: 'https://images.unsplash.com/photo-1588776814546-1ffce47267a5?auto=format&fit=crop&w=800&q=80', status: 'Special Order' },
  { id: 'p8', name: 'Cardiology ECG Monitor', price: 850, description: 'Handheld 12-lead ECG monitor with instant AI rhythm analysis and cloud reporting.', category: 'Diagnostic', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80', status: 'Premium' },
  { id: 'p9', name: 'Anatomy Lab Skeleton', price: 180, description: 'Life-size anatomical model with articulated joints for medical education.', category: 'Education', image: 'https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?auto=format&fit=crop&w=800&q=80', status: 'Academic' },
  { id: 'p10', name: 'Surgical Tool Kit', price: 450, description: 'Stainless steel precision instruments for minor clinical surgical procedures.', category: 'Surgical', image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=800&q=80', status: 'Limited' },
  { id: 'p11', name: 'Nebulizer Therapy System', price: 120, description: 'Efficient respiratory medication delivery with ultra-quiet compressor technology.', category: 'Respiratory', image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80', status: 'In Stock' },
  { id: 'p12', name: 'Ultrasound Probe Pro', price: 2400, description: 'Wireless handheld ultrasound scanner compatible with iOS and Android devices.', category: 'Radiology', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80', status: 'New Arrival' }
];

function Shop() {
  const [products, setProducts] = useState(demoProducts); // Initialize with demo data
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Attempt backend fetch but default to demoProducts if it fails or returns empty
    axios.get(`${API_BASE_URL}/products`)
      .then(res => {
        if (res.data && res.data.length > 0) {
          setProducts(res.data);
        } else {
            console.warn("Backend returned no products, using demo data.");
        }
        setLoading(false);
      })
      .catch((err) => {
          console.error("Shop backend inactive:", err.message);
          setLoading(false); // Keep demo data
      });
  }, []);

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200">
      <Navbar />

      {/* ── Premium Mesh Hero ── */}
      <div className="relative pt-48 pb-24 overflow-hidden mesh-gradient flex items-center min-h-[50vh]">
        <div className="absolute top-10 left-[10%] w-96 h-96 rounded-full bg-sky-500/10 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-0 right-[5%] w-80 h-80 rounded-full bg-indigo-500/10 blur-[100px] animate-float-slow-reverse" />
        
        <div className="relative section-shell z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                Official Equipment Store
            </span>
            <h1 className="text-white text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-10">
              The Medical <br/><span className="text-gradient font-display">Marketplace.</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl">
              Professional-grade diagnostic tools and healthcare essentials, curated by experts for the modern clinic.
            </p>
          </div>
        </div>
      </div>

      <section className="py-24 bg-slate-50 relative">
        <div className="section-shell">
          
          {/* Search Bar - Modern Floating Style */}
          <div className="max-w-2xl mx-auto -mt-36 mb-24 relative z-30">
            <div className="bg-white p-2 rounded-[2.5rem] shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] border border-white flex items-center transition-all focus-within:ring-4 focus-within:ring-sky-500/10">
                <div className="w-14 h-14 flex items-center justify-center text-slate-400 transition-colors group-focus-within:text-sky-500">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input
                    type="text"
                    placeholder="Search by name, category or equipment type..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 bg-transparent py-4 text-slate-900 font-bold outline-none placeholder:text-slate-400"
                />
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[1, 2, 3].map(n => (
                <div key={n} className="bg-white rounded-[3rem] p-6 shadow-xl space-y-6 animate-pulse">
                  <div className="h-64 bg-slate-100 rounded-[2rem]" />
                  <div className="h-8 bg-slate-100 w-3/4 rounded-xl" />
                  <div className="h-4 bg-slate-100 w-full rounded-lg" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group relative bg-white rounded-[3rem] p-5 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-slate-100 flex flex-col">
                  <div className="relative h-72 w-full rounded-[2.2rem] overflow-hidden mb-8">
                    <img
                      src={product.image || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                         <span className="bg-slate-900/40 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                            {product.category || 'Medical'}
                        </span>
                        {product.status && (
                            <span className="bg-sky-500 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                                {product.status}
                            </span>
                        )}
                    </div>
                    <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-6 py-2.5 rounded-2xl shadow-xl border border-white">
                        <span className="text-slate-900 font-black text-xl">{product.price} <span className="text-[10px] text-slate-400">TND</span></span>
                    </div>
                  </div>
                  
                  <div className="px-4 pb-4 flex flex-col flex-1">
                    <h3 className="text-slate-900 font-black text-2xl mb-4 group-hover:text-sky-600 transition-colors leading-tight">
                        {product.name}
                    </h3>
                    <p className="text-slate-500 text-sm font-semibold leading-relaxed mb-10 flex-1">
                        {product.description}
                    </p>
                    
                    <Link
                      to={`/product-view/${product.id}`}
                      className="w-full relative overflow-hidden bg-slate-100 group-hover:bg-slate-950 group-hover:text-white text-slate-700 font-black py-5 rounded-2xl transition-all flex items-center justify-center gap-3 uppercase tracking-wider text-xs"
                    >
                      <span className="relative z-10 transition-transform group-hover:scale-110">View Instrument Details</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && filteredProducts.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-100">
               <svg className="w-16 h-16 text-slate-200 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
               </svg>
               <h3 className="text-slate-800 font-bold text-xl">No products found</h3>
               <p className="text-slate-400 mt-1">Try adjusting your search terms.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Shop;