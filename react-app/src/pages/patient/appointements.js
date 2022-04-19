import {useEffect,React} from 'react';

function Appointements() {
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
            loadScript(`${process.env.PUBLIC_URL}/assets/js/assets/js/moment.min.js`)
            loadScript(`${process.env.PUBLIC_URL}/assets/js/jquery.fullcalendar.js`)
            loadScript(`${process.env.PUBLIC_URL}/assets/js/fullcalendar.min.js`)
            loadScript(`${process.env.PUBLIC_URL}/assets/js/bootstrap.min.js`)


          
            })
    return (
   <div className="page-wrapper">
  <div className="content">

  <div className="row">
          <div className="col-md-12">
      <div className="card-box">
        <h4 className="card-title">Appointements Scheduling</h4>
        <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified">
    

          <li className="nav-item"><a className="nav-link active" href="#solid-rounded-justified-tab1" data-toggle="tab">Your calendar</a></li>
          <li className="nav-item"><a className="nav-link" href="#solid-rounded-justified-tab2" data-toggle="tab">Your Appointements</a></li>
          <li className="nav-item"><a className="nav-link" href="#solid-rounded-justified-tab3" data-toggle="tab">Take an appointement</a></li>

        </ul>
        <div className="tab-content">
          <div className="tab-pane show active" id="solid-rounded-justified-tab1">
          <div className="row">
      <div className="col-sm-8 col-4">
      </div>
      <div className="col-sm-4 col-8 text-right m-b-30">
        <a href="#" className="btn btn-primary btn-rounded" data-toggle="modal" data-target="#add_event"><i className="fa fa-plus" /> Add Event</a>
      </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="card-box mb-0">
          <div className="row">
            <div className="col-md-12">
              <div id="calendar" />
            </div>
          </div>
        </div>
        <div className="modal fade none-border" id="event-modal">
          <div className="modal-dialog">
            <div className="modal-content modal-md">
              <div className="modal-header">
                <h4 className="modal-title">Add Event</h4>
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              <div className="modal-body" />
              <div className="modal-footer text-center">
                <button type="button" className="btn btn-primary submit-btn save-event">Create event</button>
                <button type="button" className="btn btn-danger btn-lg delete-event" data-dismiss="modal">Delete</button>
              </div>
            </div>
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
          <div className="tab-pane" id="solid-rounded-justified-tab3">
          <div className="row">
                <div className="col-12 col-md-6 col-lg-12 col-xl-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title d-inline-block">Chatbot</h4> <a href="appointments.html" className="btn btn-primary float-right">View all</a>
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

export default Appointements;