import Footer from '../../components/layout/Footer';
import Navbar from '../../components/layout/Navbar';
import Map from './Map';
import Form from './Form';
import Info from './Info';
import { Link } from 'react-router-dom';

function Contact() {
  const location = {
    address: 'Esprit El Ghazela Tunis',
    lat: 36.8763301,
    lng: 10.1807251,
  };

  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />

      {/* Animated mesh hero banner */}
      <div className="relative pt-32 pb-20 overflow-hidden mesh-gradient flex items-center">
        <div className="absolute top-6 left-[20%] w-72 h-72 rounded-full bg-sky-500/10 blur-[80px] animate-float-slow" />
        <div className="absolute bottom-0 right-[10%] w-56 h-56 rounded-full bg-indigo-500/10 blur-[60px] animate-float-slow" style={{ animationDelay: '2s' }} />
        <div className="relative section-shell z-10">
          <p className="text-slate-400 text-sm mb-2">
            <Link to="/" className="text-sky-400 no-underline hover:text-sky-300 transition-colors">Home</Link>
            <span className="mx-2 text-slate-600">›</span>
            Contact
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Let's <span className="text-gradient">Talk</span>
          </h1>
        </div>
      </div>

      {/* Main content */}
      <section className="py-16 mesh-gradient-light">
        <div className="section-shell">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <Form />
            </div>
            <div>
              <Info />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <div className="rounded-none overflow-hidden">
        <Map location={location} zoomLevel={17} />
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
