import React from "react";
import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { UserContext } from "./UserContext";

function CardVerification() {
  const navigate = useNavigate();
  const [state] = useContext(UserContext);
  const { user } = state;
    const [img, setImg] = useState("");
  const [file, setFile] = useState("");
  const [res, setRes] = useState([]);
  let final;
  const onChangeFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
    setImg(URL.createObjectURL(file));
  };
 
  const handleAdd = (e) => {
    e.preventDefault();
    var data = new FormData();
    data.append("file", file);
    axios
      .post(
        "https://app.nanonets.com/api/v2/OCR/Model/4c7455eb-fc31-4c53-b945-d5e8701f763a/LabelFile/",
        data, //proxy uri
        {
          headers: {
            authorization: "Basic Z2VDS202eGR3VG03VlBMeVR4LU1YelNUVmVzSXR4ZmU6",
            accept: "application/json",
            "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
          },
        }
      )
      .then(function (body) {
        setRes(body.data.result);
        console.log(body.data);
        console.log(body.data.result);
      });
  };

  const successhandler = (e) => {
    navigate('/face-register');
    user.role='doctor';
  };

  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />

      <div className="relative pt-32 pb-20 overflow-hidden mesh-gradient flex items-center">
        <div className="absolute top-6 left-[20%] w-72 h-72 rounded-full bg-sky-500/10 blur-[80px] animate-float-slow" />
        <div className="absolute bottom-0 right-[10%] w-56 h-56 rounded-full bg-indigo-500/10 blur-[60px] animate-float-slow" style={{ animationDelay: '2s' }} />

        <div className="relative section-shell z-10">
          <p className="text-slate-400 text-sm mb-2">
            Home <span className="mx-2 text-slate-600">›</span> Verification
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Identity <span className="text-gradient">Verification</span>
          </h1>
        </div>
      </div>

      <section className="py-20 bg-slate-50">
        <div className="section-shell">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-card overflow-hidden">
              <div className="p-8 md:p-12 border-b border-slate-100 bg-slate-50/50">
                <h2 className="text-2xl font-bold text-slate-800 mb-2 text-center">Verify Your Credentials</h2>
                <p className="text-slate-500 text-center">Please upload your medical ID or professional card for identity validation.</p>
              </div>

              <div className="p-8 md:p-12">
                <form onSubmit={handleAdd} className="space-y-6">
                  <div className="group relative border-2 border-dashed border-slate-200 rounded-3xl p-8 transition-all hover:border-sky-400 hover:bg-sky-50/30 flex flex-col items-center">
                    {img ? (
                      <img src={img} alt="Card Preview" className="max-h-64 rounded-xl shadow-lg mb-4" />
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <svg className="w-10 h-10 text-slate-400 group-hover:text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                    <label className="cursor-pointer">
                      <span className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-6 py-2.5 rounded-full transition-all shadow-md inline-block">
                        Choose File
                      </span>
                      <input type="file" className="hidden" onChange={onChangeFile} />
                    </label>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                    <button className="w-full bg-slate-900 hover:bg-black text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-slate-200">
                      Verify Card ID
                    </button>
                    
                    <button 
                      type="button"
                      onClick={() => {
                        window.localStorage.setItem('role', 'doctor');
                        navigate('/face-register');
                      }}
                      className="w-full bg-white hover:bg-slate-50 text-slate-500 hover:text-sky-600 border border-slate-200 hover:border-sky-200 font-bold py-3 rounded-2xl transition-all text-sm flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
                      Quick Demo Bypass (Skip Verification)
                    </button>
                  </div>
                </form>

                {res.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-slate-100">
                    <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                       <div className="w-1.5 h-6 bg-sky-500 rounded-full" />
                       Extraction Results
                    </h3>
                    <div className="space-y-4">
                      {res.map((prediction) => (
                        prediction.prediction.map((id, index) => {
                          const isSuccess = id.score > 0.5;
                          if (isSuccess) final = "success";
                          else final = "failure";

                          return (
                            <div key={index} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                              <div>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{id.label}</span>
                                <p className="text-slate-800 font-medium">Extracted: {id.ocr_text}</p>
                              </div>
                              <div className={`px-4 py-1.5 rounded-full text-xs font-bold ${isSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {isSuccess ? 'Verified' : 'Failed'} ({Math.round(id.score * 100)}%)
                              </div>
                            </div>
                          );
                        })
                      ))}
                    </div>
                    
                    <div className="mt-8 flex justify-center">
                      {final === 'success' ? (
                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold px-12 py-4 rounded-2xl shadow-xl shadow-green-200 transition-all flex items-center gap-2" onClick={successhandler}>
                           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                           </svg>
                           Confirm & Continue
                        </button>
                      ) : final === 'failure' && (
                        <div className="bg-red-50 text-red-600 px-6 py-3 rounded-xl border border-red-100 font-medium">
                          Verification failed. Please try a clearer image.
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default CardVerification;
