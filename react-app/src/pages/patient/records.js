import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
function Records() {
    const loadScript = (src) => {
        return new Promise(function (resolve, reject) {
          var script = document.createElement('script')
          script.src = src
          script.addEventListener('load', function () {
            resolve()
          })
          script.addEventListener('error', function (e) {
            reject(e)
          })
          document.body.appendChild(script)
          document.body.removeChild(script)
        })
      }
      
       useEffect(() => {
        loadScript(`${process.env.PUBLIC_URL}assets/js/chart.js`)
      
        })
    return (
      <div className="main-wrapper">
 
  <div className="page-wrapper">
    <div className="content">
      <div className="row">
      <div className="col-md-12">
  <div className="card-box">
    <h4 className="card-title">Medical Records</h4>
    <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified">


      <li className="nav-item"><a className="nav-link active" href="#solid-rounded-justified-tab1" data-toggle="tab">Your Prescriptions</a></li>
      <li className="nav-item"><a className="nav-link" href="#solid-rounded-justified-tab2" data-toggle="tab">Allergies</a></li>
    </ul>
    <div className="tab-content">
      <div className="tab-pane show active" id="solid-rounded-justified-tab1">
      <div className="row">
            <div className="col-12 col-md-6 col-lg-12 col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title d-inline-block">Your Prescriptions</h4> <a href="appointments.html" className="btn btn-primary float-right">View all</a>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table mb-0">
                      <thead className="d-none">
                        <tr>
                          <th>Patient Name</th>
                          <th>Doctor Name</th>
                          <th>Timing</th>
                          <th className="text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{minWidth: 200}}>
                            <a className="avatar" href="profile.html">B</a>
                            <h2><a href="profile.html">Bernardo Galaviz <span>New York, USA</span></a></h2>
                          </td>                 
                          <td>
                            <h5 className="time-title p-0">Appointment With</h5>
                            <p>Dr. Cristina Groves</p>
                          </td>
                          <td>
                            <h5 className="time-title p-0">Timing</h5>
                            <p>7.00 PM</p>
                          </td>
                          <td className="text-right">
                            <a href="appointments.html" className="btn btn-outline-primary take-btn">Take up</a>
                          </td>
                        </tr>
                        <tr>
                          <td style={{minWidth: 200}}>
                            <a className="avatar" href="profile.html">B</a>
                            <h2><a href="profile.html">Bernardo Galaviz <span>New York, USA</span></a></h2>
                          </td>                 
                          <td>
                            <h5 className="time-title p-0">Appointment With</h5>
                            <p>Dr. Cristina Groves</p>
                          </td>
                          <td>
                            <h5 className="time-title p-0">Timing</h5>
                            <p>7.00 PM</p>
                          </td>
                          <td className="text-right">
                            <a href="appointments.html" className="btn btn-outline-primary take-btn">Take up</a>
                          </td>
                        </tr>
                        <tr>
                          <td style={{minWidth: 200}}>
                            <a className="avatar" href="profile.html">B</a>
                            <h2><a href="profile.html">Bernardo Galaviz <span>New York, USA</span></a></h2>
                          </td>                 
                          <td>
                            <h5 className="time-title p-0">Appointment With</h5>
                            <p>Dr. Cristina Groves</p>
                          </td>
                          <td>
                            <h5 className="time-title p-0">Timing</h5>
                            <p>7.00 PM</p>
                          </td>
                          <td className="text-right">
                            <a href="appointments.html" className="btn btn-outline-primary take-btn">Take up</a>
                          </td>
                        </tr>
                        <tr>
                          <td style={{minWidth: 200}}>
                            <a className="avatar" href="profile.html">B</a>
                            <h2><a href="profile.html">Bernardo Galaviz <span>New York, USA</span></a></h2>
                          </td>                 
                          <td>
                            <h5 className="time-title p-0">Appointment With</h5>
                            <p>Dr. Cristina Groves</p>
                          </td>
                          <td>
                            <h5 className="time-title p-0">Timing</h5>
                            <p>7.00 PM</p>
                          </td>
                          <td className="text-right">
                            <a href="appointments.html" className="btn btn-outline-primary take-btn">Take up</a>
                          </td>
                        </tr>
                        <tr>
                          <td style={{minWidth: 200}}>
                            <a className="avatar" href="profile.html">B</a>
                            <h2><a href="profile.html">Bernardo Galaviz <span>New York, USA</span></a></h2>
                          </td>                 
                          <td>
                            <h5 className="time-title p-0">Appointment With</h5>
                            <p>Dr. Cristina Groves</p>
                          </td>
                          <td>
                            <h5 className="time-title p-0">Timing</h5>
                            <p>7.00 PM</p>
                          </td>
                          <td className="text-right">
                            <a href="appointments.html" className="btn btn-outline-primary take-btn">Take up</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="tab-pane" id="solid-rounded-justified-tab2">
      <div className="row">
            <div className="col-12 col-md-6 col-lg-12 col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title d-inline-block">Your Allergies</h4> <a href="appointments.html" className="btn btn-primary float-right">View all</a>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table mb-0">
                      <thead className="d-none">
                        <tr>
                          <th>Patient Name</th>
                          <th>Doctor Name</th>
                          <th>Timing</th>
                          <th className="text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{minWidth: 200}}>
                            <a className="avatar" href="profile.html">B</a>
                            <h2><a href="profile.html">Bernardo Galaviz <span>New York, USA</span></a></h2>
                          </td>                 
                          <td>
                            <h5 className="time-title p-0">Appointment With</h5>
                            <p>Dr. Cristina Groves</p>
                          </td>
                          <td>
                            <h5 className="time-title p-0">Timing</h5>
                            <p>7.00 PM</p>
                          </td>
                          <td className="text-right">
                            <a href="appointments.html" className="btn btn-outline-primary take-btn">Take up</a>
                          </td>
                        </tr>
                        <tr>
                          <td style={{minWidth: 200}}>
                            <a className="avatar" href="profile.html">B</a>
                            <h2><a href="profile.html">Bernardo Galaviz <span>New York, USA</span></a></h2>
                          </td>                 
                          <td>
                            <h5 className="time-title p-0">Appointment With</h5>
                            <p>Dr. Cristina Groves</p>
                          </td>
                          <td>
                            <h5 className="time-title p-0">Timing</h5>
                            <p>7.00 PM</p>
                          </td>
                          <td className="text-right">
                            <a href="appointments.html" className="btn btn-outline-primary take-btn">Take up</a>
                          </td>
                        </tr>
                        <tr>
                          <td style={{minWidth: 200}}>
                            <a className="avatar" href="profile.html">B</a>
                            <h2><a href="profile.html">Bernardo Galaviz <span>New York, USA</span></a></h2>
                          </td>                 
                          <td>
                            <h5 className="time-title p-0">Appointment With</h5>
                            <p>Dr. Cristina Groves</p>
                          </td>
                          <td>
                            <h5 className="time-title p-0">Timing</h5>
                            <p>7.00 PM</p>
                          </td>
                          <td className="text-right">
                            <a href="appointments.html" className="btn btn-outline-primary take-btn">Take up</a>
                          </td>
                        </tr>
                        <tr>
                          <td style={{minWidth: 200}}>
                            <a className="avatar" href="profile.html">B</a>
                            <h2><a href="profile.html">Bernardo Galaviz <span>New York, USA</span></a></h2>
                          </td>                 
                          <td>
                            <h5 className="time-title p-0">Appointment With</h5>
                            <p>Dr. Cristina Groves</p>
                          </td>
                          <td>
                            <h5 className="time-title p-0">Timing</h5>
                            <p>7.00 PM</p>
                          </td>
                          <td className="text-right">
                            <a href="appointments.html" className="btn btn-outline-primary take-btn">Take up</a>
                          </td>
                        </tr>
                        <tr>
                          <td style={{minWidth: 200}}>
                            <a className="avatar" href="profile.html">B</a>
                            <h2><a href="profile.html">Bernardo Galaviz <span>New York, USA</span></a></h2>
                          </td>                 
                          <td>
                            <h5 className="time-title p-0">Appointment With</h5>
                            <p>Dr. Cristina Groves</p>
                          </td>
                          <td>
                            <h5 className="time-title p-0">Timing</h5>
                            <p>7.00 PM</p>
                          </td>
                          <td className="text-right">
                            <a href="appointments.html" className="btn btn-outline-primary take-btn">Take up</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

</div>

    );
}

export default Records;