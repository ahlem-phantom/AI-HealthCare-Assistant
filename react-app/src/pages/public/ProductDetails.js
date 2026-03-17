import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

const demoProducts = [
  { id: 'p1', name: 'Digital Stethoscope Pro', price: 299, description: 'Next-generation acoustic technology with noise cancellation and Bluetooth recording.', category: 'Diagnostic', image: 'https://images.unsplash.com/photo-1576091160550-217359f481bd?auto=format&fit=crop&w=1000&q=80', status: 'In Stock', specs: ['Bluetooth 5.0', '40x Amplification', 'Active Noise Reduction', 'iOS/Android App'] },
  { id: 'p2', name: 'Portable Pulse Oximeter', price: 45, description: 'Medical-grade oxygen saturation and heart rate monitoring in a compact design.', category: 'Monitoring', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80', status: 'In Stock', specs: ['OLED Display', 'One-button operation', 'Auto-power off', 'Pulse rate trend'] },
  { id: 'p3', name: 'Smart Blood Pressure Cuff', price: 89, description: 'Wireless syncing with medical apps for long-term health tracking and analysis.', category: 'Monitoring', image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1000&q=80', status: 'Trending', specs: ['Clinically validated', 'Multi-user memory', 'Irregular heartbeat detection', 'Fast measurement'] },
  { id: 'p4', name: 'First Aid Elite Kit', price: 65, description: 'Professional responder kit containing over 100 essential trauma and injury supplies.', category: 'Supplies', image: 'https://images.unsplash.com/photo-1603398938378-e54eab446f3e?auto=format&fit=crop&w=1000&q=80', status: 'Limited', specs: ['Water-resistant case', 'Reflective strips', 'Color-coded sections', 'OSHA compliant'] },
  { id: 'p5', name: 'Contactless Infrared Thermometer', price: 35, description: 'Instant, accurate non-contact temperature readings with LED backlight.', category: 'Diagnostic', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80', status: 'In Stock', specs: ['Dual mode (Body/Object)', '32 memory sets', 'Fever alarm', 'Auto-shutdown'] },
  { id: 'p6', name: 'Medical Grade Face Shields (5pk)', price: 25, description: 'High-clarity, anti-fog protection for frontline healthcare professionals.', category: 'Personal Protection', image: 'https://images.unsplash.com/photo-1584634731339-252c5aba1957?auto=format&fit=crop&w=1000&q=80', status: 'Bulk', specs: ['Anti-fog coating', 'Adjustable band', 'Latex free', 'Lightweight design'] }
];

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(demoProducts[0]); // Default to first for demo if no ID
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // In a real scenario, fetch by ID. Here we find in demo array.
    if (id) {
        const found = demoProducts.find(p => p.id === id);
        if (found) setProduct(found);
    }
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-sky-500/30">
      <Navbar />

      <div className="relative pt-48 pb-24 overflow-hidden mesh-gradient">
        <div className="absolute top-10 right-[15%] w-96 h-96 rounded-full bg-sky-500/10 blur-[120px] animate-float-slow" />
        <div className="section-shell relative z-10">
          <Link to="/shop" className="group inline-flex items-center gap-2 text-sky-400 text-xs font-black uppercase tracking-widest mb-12 hover:text-white transition-colors">
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            Back to Shop
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Image Gallery Mockup */}
            <div className="relative">
                <div className="relative rounded-[4rem] overflow-hidden bg-slate-900 aspect-square shadow-2xl border border-white/5">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    <div className="absolute top-8 left-8">
                        <span className="bg-sky-500 text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-xl shadow-sky-500/30">
                            {product.status}
                        </span>
                    </div>
                </div>
                {/* Decoration */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/20 blur-[60px] rounded-full" />
            </div>

            {/* Content */}
            <div className="space-y-10">
                <div>
                   <span className="text-sky-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">{product.category}</span>
                   <h1 className="text-white text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-6">
                     {product.name}
                   </h1>
                   <div className="flex items-center gap-6">
                        <span className="text-white text-4xl font-black">{product.price} <span className="text-slate-500 text-lg uppercase font-bold tracking-widest">TND</span></span>
                        <div className="h-8 w-px bg-slate-800" />
                        <div className="flex text-amber-500 gap-1">
                            {[1,2,3,4,5].map(i => (
                                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            ))}
                        </div>
                   </div>
                </div>

                <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-xl">
                  {product.description}
                </p>

                <div className="space-y-6">
                    <h4 className="text-white text-xs font-black uppercase tracking-[0.3em]">Key Specifications</h4>
                    <div className="grid grid-cols-2 gap-4">
                        {product.specs.map((spec, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
                                <div className="w-2 h-2 rounded-full bg-sky-500" />
                                <span className="text-slate-300 text-sm font-bold">{spec}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-10 flex flex-col sm:flex-row gap-6">
                    <div className="flex items-center bg-slate-900 rounded-2xl p-2 border border-white/5">
                        <button onClick={() => setQuantity(Math.max(1, quantity-1))} className="w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 rounded-xl transition-colors font-black">-</button>
                        <span className="w-12 text-center text-white font-black">{quantity}</span>
                        <button onClick={() => setQuantity(quantity+1)} className="w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 rounded-xl transition-colors font-black">+</button>
                    </div>
                    <button className="flex-1 bg-white text-slate-950 font-black py-5 rounded-2xl text-lg uppercase tracking-wider shadow-2xl shadow-white/10 hover:bg-sky-400 hover:text-white transition-all transform hover:-translate-y-1 active:scale-95">
                        Add to Workspace Cargo
                    </button>
                </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductDetails;
