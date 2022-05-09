import { useState, useEffect, useCallback, useMemo } from "react";
import * as tf from "@tensorflow/tfjs";
import { useDropzone } from "react-dropzone";
import "./UploadImage.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import fileUpload from "../../../assets/fileUpload.png";
toast.configure();

const url = {
  model: "TFJS/model.json",
};

const urlX = {
  modelX: "XRAY/model.json",
};

const baseStyle = {
  borderWidth: 2,
  borderRadius: "2rem",
  borderColor: "gray",
  borderStyle: "dashed",
  color: "#bdbdbd",
  transition: "border .3s ease-in-out",
  padding: "3rem",
  marginBottom: "2rem",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const UploadImage = (props) => {
  const [model, setModel] = useState();
  const [modelX, setModelX] = useState();
  const [files, setFiles] = useState([]);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  
  const loadModel = async (url) => {
    try {
      // For layered model
      const model = await tf.loadLayersModel(url.model);
      setModel(model);
      console.log("Load model success");
    } catch (err) {
      console.log(err);
    }
  };
  
  const loadModelX = async (urlX) => {
    try {
      // For layered model
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
      loadModelX(urlX)
    });
  }, []);
  
  const handleUploadImage =async () => {
    try {
      const file = files[0];
      const classNames = ["covid", "normal", "pneumonia", "tuberculosis"];
      var result= 0;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async() => {
        setLoading(true)
        const img = new Image();
        img.src = reader.result;
        img.onload = async () => {
          const tensor = tf.browser
          .fromPixels(img)
          .resizeBilinear([224, 224])
          .toFloat();
          const offset = tf.scalar(255.0);
          const normalized = tensor.div(offset).expandDims(0);
          const xPredictions=modelX.predict(normalized)
          // const values = Array.from(xPredictions.dataSync());
          var xIndex = tf.argMax(xPredictions, 1).dataSync();
          console.log(xIndex[0])
          if(xIndex[0]===1){
            const predictions = model.predict(normalized);
          var pIndex = tf.argMax(predictions, 1).dataSync();
          result=pIndex;
          setResult(classNames[result]);
          }else{
            toast.error("Please Upload an XRAY", {
              position: toast.POSITION.TOP_RIGHT,
            });
            setLoading(false);
            setResult(false)
          }
        };
      };
      setLoading(false);
      setFiles([]);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
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

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png, image/jpg",
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <>
      <div className="uploadImage__container container d-flex flex-column align-items-center">
        <div className="uploadImage__dndContainer d-flex justify-content-center align-items-center flex-column">
          <div className="uploadImage__dndTextDiv">
            <p className="uploadImage__dndTextHeading my-0 fw-bolder text-center">
              Upload your X-Ray
            </p>
            <p className="uploadImage__dndTextSubHeading my-0 text-center">
              File should be in jpeg, png or jpg
            </p>
          </div>
          <div
            className="uploadImage__dndPlaceDiv d-flex justify-content-center align-items-center flex-column"
            {...getRootProps({ style })}
          >
            <input {...getInputProps()} className="uploadInput" />
            {files && files.length === 0 ? (
              <>
                <img src={fileUpload} alt="file upload logo" className="px-5" />
                <p className="uploadImage__dndPlaceSubHeading mt-3 my-0 text-center">
                  Drag and Drop your Chest X-Ray here
                </p>
              </>
            ) : (
              <>
                <img
                  src={URL.createObjectURL(files[0])}
                  alt="file upload logo"
                />
                <p className="text-success mt-3">File Uploaded Successfully</p>
              </>
            )}
          </div>
          <button
            className="uploadImage__uploadBtn"
            onClick={handleUploadImage}
          >
            Check Image
          </button>
        </div>

        {result && (
          <div className="uploadImage__resultDiv d-flex justify-content-center align-items-center flex-column">
            <p className="text-center fw-bolder">
              Your Chest X-Ray is classfied as {result}
            </p>
          {result && result!=="normal" &&            
           <Link
              to={`/patient/knowmore/${result && result}`}
              className="uploadImage__uploadBtn"
              style={{ textDecoration: "none" }}
            >
              Know More
            </Link>}
          </div>
        )}
      </div>
    </>
  );
};

export default UploadImage;
