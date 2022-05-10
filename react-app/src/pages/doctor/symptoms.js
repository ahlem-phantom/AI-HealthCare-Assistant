import React from 'react';
import { useEffect } from 'react';
import Chat from '../../components/Chat';
import ImageUploader from 'react-images-upload';
import UploadImage from '../patient/uploadImage/UploadImage';

function Symptoms() {
  useEffect(() => {
    [...document.getElementsByClassName("alan")].map(n => n && n.remove());

  })

    return (
        <div className="content">
          <div className="row">
          <div className="col-md-12">
      <div className="card-box">
        <h4 className="card-title">Quick Diagnosis</h4>
        <div className="row">
                <div className="col-12 col-md-6 col-lg-12 col-xl-12">
                  <div className="card">
                    <div className="card-header">
                    </div>
                    <div className="card-body p-0">
                      <UploadImage />
                
                    </div>
                  </div>
                </div>
              </div>
      
    
      </div>
    </div>
    
          
          </div>
    
    
        </div>
    );
}

export default Symptoms;