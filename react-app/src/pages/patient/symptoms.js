import React from 'react';
import { useEffect } from 'react';
import Chat from '../../components/Chat';
import './chat.css';
import ImageUploader from 'react-images-upload';

function Symptoms() {
   
    return (
      <div className="main-wrapper">
 
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
          <div className="col-md-12">
      <div className="card-box">
        <h4 className="card-title">Symptoms Detection</h4>
        <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified">
    
    
          <li className="nav-item"><a className="nav-link active" href="#solid-rounded-justified-tab1" data-toggle="tab">Chatbot</a></li>
          <li className="nav-item"><a className="nav-link" href="#solid-rounded-justified-tab2" data-toggle="tab">Quick Diagnosis</a></li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane show active" id="solid-rounded-justified-tab1">
          <div className="row">
             <Chat />
              </div>
          </div>
          <div className="tab-pane" id="solid-rounded-justified-tab2">
          <div className="row">
                <div className="col-12 col-md-6 col-lg-12 col-xl-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title d-inline-block">Quick Diagnosis</h4>
                    </div>
                    <div className="card-body p-0">
                    <ImageUploader
                withIcon={true}
                buttonText='Upload Scanner'
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
                    </div>
                  </div>
                </div>
              </div>
    
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