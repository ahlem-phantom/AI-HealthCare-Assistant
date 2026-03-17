import React, { useState } from 'react';
import Sketch from "react-p5";
import { useNavigate, Link } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from 'axios';
import API_BASE_URL from "../../api-config";
import Navbar from "../../components/layout/Navbar";
import Footer from '../../components/layout/Footer';
import AuthService from '../../services/auth.service';

const FACE_API_URL = process.env.REACT_APP_FACE_API_URL || "http://localhost:5000";

let video;

const FaceLog = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const setup = (p5, canvasParentRef) => {
        p5.noCanvas();
        video = p5.createCapture(p5.VIDEO);
        video.parent("camera-container");
        
        const v = video.elt;
        v.style.width = '100%';
        v.style.height = 'auto';
        v.style.maxWidth = '400px';
        v.style.borderRadius = '16px';
        v.style.border = '4px solid #fff';
        v.style.display = 'block';
        v.style.boxShadow = '0 20px 25px -5px rgb(0 0 0 / 0.1)';
    };

    const handleFaceLogin = async () => {
        setLoading(true);
        video.loadPixels();
        const image64 = video.canvas.toDataURL();
        
        try {
            const response = await axios.post(`${FACE_API_URL}/verify`, { image64 });
            const identity = response.data.identity;

            if (identity) {
                const roleResponse = await axios.get(`${API_BASE_URL}/users/usern-role/${identity}`);
                const role = roleResponse.data;

                await AuthService.loginface(identity);
                
                const tracks = video.elt.srcObject?.getTracks();
                tracks?.forEach(track => track.stop());

                if (role === "doctor") {
                    localStorage.setItem('role', 'doctor');
                    navigate("/doctor/app", { replace: true });
                } else if (role === "patient") {
                    localStorage.setItem('role', 'patient');
                    navigate("/patient/app", { replace: true });
                }
            } else {
                Swal.fire({
                    title: 'Face Not Recognized',
                    text: 'We couldn\'t verify your identity. Please try again or use standard login.',
                    icon: 'warning',
                    confirmButtonColor: '#0ea5e9'
                });
            }
        } catch (error) {
            console.error("Face login failed:", error);
            Swal.fire({
                title: 'Error',
                text: 'Authentication service is unavailable. Please try again later.',
                icon: 'error'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-slate-950 min-h-screen font-sans antialiased">
            <Navbar />
            
            <div className="relative pt-48 pb-24 overflow-hidden mesh-gradient flex items-center min-h-[45vh]">
                <div className="absolute top-6 left-[20%] w-72 h-72 rounded-full bg-sky-500/10 blur-[80px] animate-float-slow" />
                <div className="absolute bottom-0 right-[10%] w-56 h-56 rounded-full bg-indigo-500/10 blur-[60px] animate-float-slow" style={{ animationDelay: '2s' }} />

                <div className="relative section-shell z-10 text-center">
                    <h1 className="text-white text-4xl md:text-6xl font-black mb-6 tracking-tight">
                        Face ID <span className="text-gradient">Login</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                        Access your medical workspace instantly with secure biometric verification.
                    </p>
                </div>
            </div>

            <section className="py-24 bg-slate-50 relative">
                <div className="section-shell">
                    <div className="max-w-2xl mx-auto relative z-20 -mt-24">
                        <div className="bg-white/90 backdrop-blur-2xl rounded-[3rem] shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-white">
                            <div className="p-8 md:p-14">
                                <div className="space-y-10">
                                    <div className="relative rounded-[2rem] bg-slate-950 overflow-hidden min-h-[340px] shadow-2xl flex items-center justify-center p-6 border-8 border-slate-900 group/cam">
                                        <div id="camera-container" className="w-full flex items-center justify-center relative overflow-hidden rounded-xl">
                                            <Sketch setup={setup} />
                                            {/* Scanning effect overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/20 to-transparent h-1/2 w-full animate-scan z-10 pointer-events-none" />
                                        </div>
                                        <div className="absolute top-8 right-8 bg-sky-500 text-white text-[10px] font-black px-5 py-2 rounded-full animate-pulse uppercase tracking-[0.2em] shadow-lg shadow-sky-500/30 z-30">
                                            {loading ? 'Analyzing...' : 'Ready to Scan'}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <button 
                                            id="submit" 
                                            onClick={handleFaceLogin}
                                            disabled={loading}
                                            className="w-full bg-slate-900 hover:bg-black text-white font-black py-5 rounded-2xl transition-all shadow-2xl shadow-slate-200 transform hover:-translate-y-1 active:scale-[0.98] text-lg flex items-center justify-center gap-3 uppercase tracking-wider disabled:opacity-70 disabled:cursor-wait overflow-hidden relative group"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-sky-400/0 via-sky-400/10 to-sky-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                            {loading ? (
                                                <span className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                                            ) : (
                                                <svg className="w-6 h-6 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 17L12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17ZM12 4.5C7.30558 4.5 3.5 8.30558 3.5 13C3.5 17.6944 7.30558 21.5 12 21.5C16.6944 21.5 20.5 17.6944 20.5 13C20.5 8.30558 16.6944 4.5 12 4.5Z" />
                                                </svg>
                                            )}
                                            {loading ? 'Verifying...' : 'Verify Biometrics'}
                                        </button>

                                        <p className="text-center text-slate-500 text-sm mt-4">
                                            Prefer your password?{" "}
                                            <Link to="/login" className="text-sky-500 font-bold no-underline hover:underline">Standard Login</Link>
                                        </p>
                                    </div>

                                    <div className="flex items-start gap-4 bg-slate-50 p-6 rounded-[1.5rem] border border-slate-100">
                                        <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 shadow-sm shrink-0">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                                        </div>
                                        <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                                            Face recognition happens locally on your device. We prioritize your <span className="text-slate-900 font-bold">privacy and biometric security</span>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    );
};

export default FaceLog;