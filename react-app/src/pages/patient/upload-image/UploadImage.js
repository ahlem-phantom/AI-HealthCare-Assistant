import { useState, useEffect, useCallback } from "react";
import * as tf from "@tensorflow/tfjs";
import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import fileUpload from "../../../assets/fileUpload.png";
import Iconify from "../../../components/common/Iconify";
toast.configure();

const url = {
  model: "TFJS/model.json",
};

const urlX = {
  modelX: "XRAY/model.json",
};

const UploadImage = (props) => {
  const [model, setModel] = useState();
  const [modelX, setModelX] = useState();
  const [files, setFiles] = useState([]);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const loadModel = async (url) => {
    try {
      const model = await tf.loadLayersModel(url.model);
      setModel(model);
      console.log("Load model success");
    } catch (err) {
      console.log(err);
    }
  };
  
  const loadModelX = async (urlX) => {
    try {
      const modelX = await tf.loadLayersModel(urlX.modelX);
      setModelX(modelX);
      console.log("Load model success");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    tf.ready().then(() => {
      loadModel(url);
      loadModelX(urlX);
    });
  }, []);
  
  const handleUploadImage = async () => {
    if (files.length === 0) {
      toast.warning("Please select an image first");
      return;
    }

    try {
      setLoading(true);
      const file = files[0];
      const classNames = ["covid", "normal", "pneumonia", "tuberculosis"];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async() => {
        const img = new Image();
        img.src = reader.result;
        img.onload = async () => {
          const tensor = tf.browser
            .fromPixels(img)
            .resizeBilinear([224, 224])
            .toFloat();
          const offset = tf.scalar(255.0);
          const normalized = tensor.div(offset).expandDims(0);
          
          const xPredictions = modelX.predict(normalized);
          const xIndex = tf.argMax(xPredictions, 1).dataSync();
          
          if(xIndex[0] === 1){
            const predictions = model.predict(normalized);
            const pIndex = tf.argMax(predictions, 1).dataSync();
            setResult(classNames[pIndex[0]]);
            setLoading(false);
          } else {
            toast.error("Please Upload a valid Chest X-RAY scan", {
              position: "top-right",
            });
            setLoading(false);
            setResult(false);
          }
        };
      };
      setFiles([]);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(error.message, {
        position: "top-right",
      });
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    setResult("");
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.jpeg', '.png', '.jpg'] },
    multiple: false
  });

  useEffect(() => () => {
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <div className="w-full flex flex-col items-center gap-8 animate-in fade-in zoom-in-95 duration-500">
      <div className="w-full max-w-2xl bg-white/40 backdrop-blur-xl border border-white/60 rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 relative overflow-hidden group">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl group-hover:bg-sky-400/20 transition-colors duration-700" />
        
        <div className="relative z-10 flex flex-col items-center gap-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Upload <span className="text-sky-500">X-Ray</span>
            </h2>
            <p className="text-slate-500 font-medium">Support formats: JPEG, PNG, JPG</p>
          </div>

          <div
            {...getRootProps()}
            className={`w-full min-h-[300px] rounded-[2.5rem] border-4 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-8 cursor-pointer relative overflow-hidden
              ${isDragActive ? 'border-sky-500 bg-sky-50/50 scale-[1.02]' : 'border-slate-100 bg-slate-50/30 hover:border-sky-200 hover:bg-white/50 hover:shadow-xl hover:shadow-sky-50'}`}
          >
            <input {...getInputProps()} />
            
            {files.length === 0 ? (
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="w-24 h-24 rounded-3xl bg-white shadow-xl shadow-slate-200/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <img src={fileUpload} alt="Upload" className="w-12 h-12 opacity-80" />
                </div>
                <div>
                  <p className="text-xl font-black text-slate-700">Drop your scan here</p>
                  <p className="text-slate-400 font-bold text-sm mt-1 uppercase tracking-widest">or click to browse files</p>
                </div>
              </div>
            ) : (
              <div className="relative w-full h-full flex flex-col items-center gap-4">
                <div className="relative group/preview">
                  <img
                    src={files[0].preview}
                    alt="Preview"
                    className="max-h-64 rounded-2xl shadow-2xl ring-4 ring-white object-contain transition-transform group-hover/preview:scale-105 duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 rounded-2xl opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="text-white font-black text-xs uppercase tracking-widest">Replace File</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                  <Iconify icon="eva:checkmark-circle-2-fill" className="w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-widest">Image Loaded Successfully</span>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={handleUploadImage}
            disabled={loading || files.length === 0}
            className={`w-full py-5 rounded-2xl font-black text-lg shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3
              ${loading || files.length === 0 
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none' 
                : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-200 hover:shadow-2xl hover:shadow-slate-300'}`}
          >
            {loading ? (
              <>
                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Running AI Diagnosis...</span>
              </>
            ) : (
              <>
                <Iconify icon="solar:magic-stick-3-bold-duotone" width={24} />
                <span>Analyze Scan Now</span>
              </>
            )}
          </button>
        </div>
      </div>

      {result && (
        <div className="w-full max-w-2xl animate-in slide-in-from-top-4 duration-700">
          <div className="bg-slate-900 rounded-[3rem] p-10 overflow-hidden relative shadow-2xl shadow-slate-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 text-center md:text-left">
                <div>
                  <p className="text-sky-400 font-black text-[10px] uppercase tracking-[0.2em] mb-2">Analysis Result</p>
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                    Prediction: <span className="text-sky-400 capitalize">{result}</span>
                  </h3>
                </div>
                <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-md">
                  Our AI model suggests this scan aligns with <span className="text-white font-bold">{result}</span> characteristics. 
                  Please consult with a specialist for a definitive medical diagnosis.
                </p>
              </div>
              
              {result !== "normal" && (
                <Link
                  to={`/patient/know-more/${result}`}
                  className="px-8 py-4 rounded-2xl bg-white text-slate-900 font-black hover:bg-slate-50 transition-all shadow-xl active:scale-95 whitespace-nowrap inline-flex items-center gap-2 group"
                >
                  Medical Insights
                  <Iconify icon="eva:arrow-forward-fill" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadImage;
