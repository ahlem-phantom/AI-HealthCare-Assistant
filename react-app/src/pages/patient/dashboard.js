import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
function Dashboard() {
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
          
        <div className="row doctor-grid">
        <div className="col-md-4 col-sm-4  col-lg-12">
          <div className="profile-widget">
            <div className="doctor-img">
              <a className="avatar" href="profile.html"><img alt src="assets/img/doctor-thumb-03.jpg" /></a>
            </div>
            <div className="dropdown profile-action">
              <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
              <div className="dropdown-menu dropdown-menu-right">
              <Link
                className="dropdown-item"
                        to="/patient/edit-profile"
                        component={Link}
                      >
                         <i className="fa fa-pencil m-r-5" /> Edit
                    </Link>   
                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i className="fa fa-trash-o m-r-5" /> Delete</a>
              </div>
            </div>
            <h4 className="doctor-name text-ellipsis"><a href="profile.html">Cristina Groves</a></h4>
            <div className="doc-prof">Gynecologist</div>
            <div className="user-country">
              <i className="fa fa-map-marker" /> United States, San Francisco
            </div>
          </div>
        </div>
      
      </div>
  
          <div className="row">
            <div className="col-12 col-md-6 col-lg-12 col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title d-inline-block">Upcoming Appointments</h4> <a href="appointments.html" className="btn btn-primary float-right">View all</a>
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
          <div className="row">
            <div className="col-12 col-md-6 col-lg-12 col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title d-inline-block">Prescriptions </h4> <a href="patients.html" className="btn btn-primary float-right">View all</a>
                </div>
                <div className="card-block">
                  <div className="table-responsive">
                    <table className="table mb-0 new-patient-table">
                      <tbody>
                        <tr>
                          <td>
                            <img width={28} height={28} className="rounded-circle" src="assets/img/user.jpg" alt /> 
                            <h2>John Doe</h2>
                          </td>
                          <td>Johndoe21@gmail.com</td>
                          <td>+1-202-555-0125</td>
                          <td><button className="btn btn-primary btn-primary-one float-right">Fever</button></td>
                        </tr>
                        <tr>
                          <td>
                            <img width={28} height={28} className="rounded-circle" src="assets/img/user.jpg" alt /> 
                            <h2>Richard</h2>
                          </td>
                          <td>Richard123@yahoo.com</td>
                          <td>202-555-0127</td>
                          <td><button className="btn btn-primary btn-primary-two float-right">Cancer</button></td>
                        </tr>
                        <tr>
                          <td>
                            <img width={28} height={28} className="rounded-circle" src="assets/img/user.jpg" alt /> 
                            <h2>Villiam</h2>
                          </td>
                          <td>Richard123@yahoo.com</td>
                          <td>+1-202-555-0106</td>
                          <td><button className="btn btn-primary btn-primary-three float-right">Eye</button></td>
                        </tr>
                        <tr>
                          <td>
                            <img width={28} height={28} className="rounded-circle" src="assets/img/user.jpg" alt /> 
                            <h2>Martin</h2>
                          </td>
                          <td>Richard123@yahoo.com</td>
                          <td>776-2323 89562015</td>
                          <td><button className="btn btn-primary btn-primary-four float-right">Fever</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div >
        <h4 className="page-title">Recent Viewed Blogs</h4>
      </div>
        <div className="row">
     
      <div className="col-sm-6 col-md-6 col-lg-4">
        
        <div className="blog grid-blog">
          <div className="blog-image">
            <a href="blog-details.html"><img className="img-fluid" src="assets/img/blog/blog-01.jpg" alt /></a>
          </div>
          <div className="blog-content">
            <h3 className="blog-title"><a href="blog-details.html">Do You Know the ABCs of Health Care?</a></h3>
            <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor incididunt ut labore etmis dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris.</p>
            <a href="blog-details.html" className="read-more"><i className="fa fa-long-arrow-right" /> Read More</a>
            <div className="blog-info clearfix">
              <div className="post-left">
                <ul>
                  <li><a href="#."><i className="fa fa-calendar" /> <span>December 6, 2017</span></a></li>
                </ul>
              </div>
              <div className="post-right"><a href="#."><i className="fa fa-heart-o" />21</a> <a href="#."><i className="fa fa-eye" />8</a> <a href="#."><i className="fa fa-comment-o" />17</a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-6 col-lg-4">
        <div className="blog grid-blog">
          <div className="blog-image">
            <a href="blog-details.html"><img className="img-fluid" src="assets/img/blog/blog-02.jpg" alt /></a>
          </div>
          <div className="blog-content">
            <h3 className="blog-title"><a href="blog-details.html">Do You Know the ABCs of Health Care?</a></h3>
            <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor incididunt ut labore etmis dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris.</p>
            <a href="blog-details.html" className="read-more"><i className="fa fa-long-arrow-right" /> Read More</a>
            <div className="blog-info clearfix">
              <div className="post-left">
                <ul>
                  <li><a href="#."><i className="fa fa-calendar" /> <span>December 6, 2017</span></a></li>
                </ul>
              </div>
              <div className="post-right"><a href="#."><i className="fa fa-heart-o" />21</a> <a href="#."><i className="fa fa-eye" />8</a> <a href="#."><i className="fa fa-comment-o" />17</a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-6 col-lg-4">
        
        <div className="blog grid-blog">
          <div className="blog-image">
            <a href="blog-details.html"><img className="img-fluid" src="assets/img/blog/blog-03.jpg" alt /></a>
          </div>
          <div className="blog-content">
            <h3 className="blog-title"><a href="blog-details.html">Do You Know the ABCs of Health Care?</a></h3>
            <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor incididunt ut labore etmis dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris.</p>
            <a href="blog-details.html" className="read-more"><i className="fa fa-long-arrow-right" /> Read More</a>
            <div className="blog-info clearfix">
              <div className="post-left">
                <ul>
                  <li><a href="#."><i className="fa fa-calendar" /> <span>December 6, 2017</span></a></li>
                </ul>
              </div>
              <div className="post-right"><a href="#."><i className="fa fa-heart-o" />21</a> <a href="#."><i className="fa fa-eye" />8</a> <a href="#."><i className="fa fa-comment-o" />17</a></div>
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

export default Dashboard;