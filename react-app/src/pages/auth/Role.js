import Footer from '../../components/layout/Footer';
import Navbar from '../../components/layout/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import doctorImg from '../../assets/doctor.jpg';
import patientImg from '../../assets/patient.jpg';

const doctorFeatures = [
  'Diagnostic Services',
  'Appointment Management',
  'Well-secured Records',
  'Patient Management',
  'Blog Search Engine',
];

const patientFeatures = [
  'Find Nearest Doctor',
  'Book Appointments',
  'AI Symptom Checker',
  'X-Ray Analysis',
  'Medical Record Access',
];

function Role() {
  const navigate = useNavigate();

  const patientHandler = () => {
    window.localStorage.setItem('role', 'patient');
    navigate('/face-register');
  };

  const doctorHandler = () => {
    window.localStorage.setItem('role', 'doctor');
    navigate('/verification');
  };

  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />

      <div className="relative pt-32 pb-20 overflow-hidden mesh-gradient flex items-center">
        <div className="absolute top-6 left-[20%] w-72 h-72 rounded-full bg-sky-500/10 blur-[80px] animate-float-slow" />
        <div className="absolute bottom-0 right-[15%] w-64 h-64 rounded-full bg-indigo-500/10 blur-[90px] animate-float-slow-reverse" />
        
        <div className="relative section-shell z-10">
          <p className="text-slate-400 text-sm mb-2">
            <Link to="/" className="text-sky-400 no-underline hover:text-sky-300">Home</Link>
            <span className="mx-2 text-slate-600">›</span>
            <span>Sign Up</span>
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Join <span className="text-gradient">NearestDoctor</span>
          </h1>
        </div>
      </div>

      <section className="py-24 bg-slate-50">
        <div className="section-shell">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">Choose Your Path</span>
            <h2 className="heading-xl">Create Your Account</h2>
            <p className="text-slate-500 mt-3">
              Already have an account?{' '}
              <Link to="/login" className="text-sky-500 font-bold no-underline hover:text-sky-600 transition-colors">Sign In</Link>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Doctor Panel */}
            <div className="group relative flex flex-col">
              <div 
                onClick={doctorHandler}
                className="relative overflow-visible rounded-3xl bg-white shadow-card hover:shadow-card-hover transition-all duration-500 cursor-pointer flex flex-col h-full"
              >
                {/* Illustration Area */}
                <div className="relative h-[450px] overflow-hidden rounded-t-3xl bg-slate-50">
                  <img 
                    src={doctorImg} 
                    alt="Doctor" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                  
                  {/* Internal Label Pill (Large) */}
                  <div className="absolute inset-x-0 bottom-6 flex justify-center px-6">
                    <div className="w-full bg-sky-300/90 backdrop-blur-sm text-white font-bold py-4 rounded-full text-center shadow-lg tracking-widest text-lg uppercase">
                      Doctor
                    </div>
                  </div>
                </div>

                {/* Benefits Area */}
                <div className="p-8 pb-14 flex-1">
                  <h3 className="text-slate-800 font-bold text-lg mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-sky-500 rounded-full" />
                    Doctor Benefits
                  </h3>
                  <ul className="space-y-3">
                    {doctorFeatures.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-slate-600 text-sm">
                        <div className="w-5 h-5 rounded-full bg-sky-50 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Sign Up Pill (Pops out at bottom center) */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20">
                  <button className="bg-blue-600 text-white font-bold px-8 py-2.5 rounded-full shadow-xl shadow-blue-500/30 whitespace-nowrap text-sm">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>

            {/* Patient Panel */}
            <div className="group relative flex flex-col">
              <div 
                onClick={patientHandler}
                className="relative overflow-visible rounded-3xl bg-white shadow-card hover:shadow-card-hover transition-all duration-500 cursor-pointer flex flex-col h-full"
              >
                {/* Illustration Area */}
                <div className="relative h-[450px] overflow-hidden rounded-t-3xl bg-slate-50">
                  <img 
                    src={patientImg} 
                    alt="Patient" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                  
                  {/* Internal Label Pill (Large) */}
                  <div className="absolute inset-x-0 bottom-6 flex justify-center px-6">
                    <div className="w-full bg-sky-300/90 backdrop-blur-sm text-white font-bold py-4 rounded-full text-center shadow-lg tracking-widest text-lg uppercase">
                      Patient
                    </div>
                  </div>
                </div>

                {/* Benefits Area */}
                <div className="p-8 pb-14 flex-1">
                  <h3 className="text-slate-800 font-bold text-lg mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-sky-500 rounded-full" />
                    Patient Benefits
                  </h3>
                  <ul className="space-y-3">
                    {patientFeatures.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-slate-600 text-sm">
                        <div className="w-5 h-5 rounded-full bg-sky-50 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Sign Up Pill (Pops out at bottom center) */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20">
                  <button className="bg-blue-600 text-white font-bold px-8 py-2.5 rounded-full shadow-xl shadow-blue-500/30 whitespace-nowrap text-sm">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Role;
