import React from 'react';
import { useEffect } from 'react';
function Patients() {
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
<div >
  <div className="header">
    <div className="header-left">
      <a href="index-2.html" className="logo">
        <img src="assets/img/logo.png" width={35} height={35} alt /> <span>Preclinic</span>
      </a>
    </div>
    <a id="toggle_btn" href="javascript:void(0);"><i className="fa fa-bars" /></a>
    <a id="mobile_btn" className="mobile_btn float-left" href="#sidebar"><i className="fa fa-bars" /></a>
    <ul className="nav user-menu float-right">
      <li className="nav-item dropdown d-none d-sm-block">
        <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown"><i className="fa fa-bell-o" /> <span className="badge badge-pill bg-danger float-right">3</span></a>
        <div className="dropdown-menu notifications">
          <div className="topnav-dropdown-header">
            <span>Notifications</span>
          </div>
          <div className="drop-scroll">
            <ul className="notification-list">
              <li className="notification-message">
                <a href="activities.html">
                  <div className="media">
                    <span className="avatar">
                      <img alt="John Doe" src="assets/img/user.jpg" className="img-fluid" />
                    </span>
                    <div className="media-body">
                      <p className="noti-details"><span className="noti-title">John Doe</span> added new task <span className="noti-title">Patient appointment booking</span></p>
                      <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="notification-message">
                <a href="activities.html">
                  <div className="media">
                    <span className="avatar">V</span>
                    <div className="media-body">
                      <p className="noti-details"><span className="noti-title">Tarah Shropshire</span> changed the task name <span className="noti-title">Appointment booking with payment gateway</span></p>
                      <p className="noti-time"><span className="notification-time">6 mins ago</span></p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="notification-message">
                <a href="activities.html">
                  <div className="media">
                    <span className="avatar">L</span>
                    <div className="media-body">
                      <p className="noti-details"><span className="noti-title">Misty Tison</span> added <span className="noti-title">Domenic Houston</span> and <span className="noti-title">Claire Mapes</span> to project <span className="noti-title">Doctor available module</span></p>
                      <p className="noti-time"><span className="notification-time">8 mins ago</span></p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="notification-message">
                <a href="activities.html">
                  <div className="media">
                    <span className="avatar">G</span>
                    <div className="media-body">
                      <p className="noti-details"><span className="noti-title">Rolland Webber</span> completed task <span className="noti-title">Patient and Doctor video conferencing</span></p>
                      <p className="noti-time"><span className="notification-time">12 mins ago</span></p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="notification-message">
                <a href="activities.html">
                  <div className="media">
                    <span className="avatar">V</span>
                    <div className="media-body">
                      <p className="noti-details"><span className="noti-title">Bernardo Galaviz</span> added new task <span className="noti-title">Private chat module</span></p>
                      <p className="noti-time"><span className="notification-time">2 days ago</span></p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="topnav-dropdown-footer">
            <a href="activities.html">View all Notifications</a>
          </div>
        </div>
      </li>
      <li className="nav-item dropdown d-none d-sm-block">
        <a href="javascript:void(0);" id="open_msg_box" className="hasnotifications nav-link"><i className="fa fa-comment-o" /> <span className="badge badge-pill bg-danger float-right">8</span></a>
      </li>
      <li className="nav-item dropdown has-arrow">
        <a href="#" className="dropdown-toggle nav-link user-link" data-toggle="dropdown">
          <span className="user-img"><img className="rounded-circle" src="assets/img/user.jpg" width={40} alt="Admin" />
            <span className="status online" /></span>
          <span>Admin</span>
        </a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="profile.html">My Profile</a>
          <a className="dropdown-item" href="edit-profile.html">Edit Profile</a>
          <a className="dropdown-item" href="settings.html">Settings</a>
          <a className="dropdown-item" href="login.html">Logout</a>
        </div>
      </li>
    </ul>
    <div className="dropdown mobile-user-menu float-right">
      <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
      <div className="dropdown-menu dropdown-menu-right">
        <a className="dropdown-item" href="profile.html">My Profile</a>
        <a className="dropdown-item" href="edit-profile.html">Edit Profile</a>
        <a className="dropdown-item" href="settings.html">Settings</a>
        <a className="dropdown-item" href="login.html">Logout</a>
      </div>
    </div>
  </div>
  <div className="page-wrapper">
    <div className="content">
      <div className="row">
        <div className="col-sm-4 col-3">
          <h4 className="page-title">Patients</h4>
        </div>
        <div className="col-sm-8 col-9 text-right m-b-20">
          <a href="add-patient.html" className="btn btn btn-primary btn-rounded float-right"><i className="fa fa-plus" /> Add Patient</a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table table-border table-striped custom-table datatable mb-0">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th className="text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img width={28} height={28} src="assets/img/user.jpg" className="rounded-circle m-r-5" alt /> Jennifer Robinson</td>
                  <td>35</td>
                  <td>1545 Dorsey Ln NE, Leland, NC, 28451</td>
                  <td>(207) 808 8863</td>
                  <td>jenniferrobinson@example.com</td>
                  <td className="text-right">
                    <div className="dropdown dropdown-action">
                      <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="edit-patient.html"><i className="fa fa-pencil m-r-5" /> Edit</a>
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_patient"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><img width={28} height={28} src="assets/img/user.jpg" className="rounded-circle m-r-5" alt /> Terry Baker</td>
                  <td>63</td>
                  <td>555 Front St #APT 2H, Hempstead, NY, 11550</td>
                  <td>(376) 150 6975</td>
                  <td>terrybaker@example.com</td>
                  <td className="text-right">
                    <div className="dropdown dropdown-action">
                      <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="edit-patient.html"><i className="fa fa-pencil m-r-5" /> Edit</a>
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_patient"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><img width={28} height={28} src="assets/img/user.jpg" className="rounded-circle m-r-5" alt /> Kyle Bowman</td>
                  <td>7</td>
                  <td>5060 Fairways Cir #APT 207, Vero Beach, FL, 32967</td>
                  <td>(981) 756 6128</td>
                  <td>kylebowman@example.com</td>
                  <td className="text-right">
                    <div className="dropdown dropdown-action">
                      <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="edit-patient.html"><i className="fa fa-pencil m-r-5" /> Edit</a>
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_patient"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><img width={28} height={28} src="assets/img/user.jpg" className="rounded-circle m-r-5" alt /> Marie Howard</td>
                  <td>22</td>
                  <td>3501 New Haven Ave #152, Columbia, MO, 65201</td>
                  <td>(634) 09 3833</td>
                  <td>mariehoward@example.com</td>
                  <td className="text-right">
                    <div className="dropdown dropdown-action">
                      <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="edit-patient.html"><i className="fa fa-pencil m-r-5" /> Edit</a>
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_patient"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><img width={28} height={28} src="assets/img/user.jpg" className="rounded-circle m-r-5" alt /> Joshua Guzman</td>
                  <td>34</td>
                  <td>4712 Spring Creek Dr, Bonita Springs, FL, 34134</td>
                  <td>(407) 554 4146</td>
                  <td>joshuaguzman@example.com</td>
                  <td className="text-right">
                    <div className="dropdown dropdown-action">
                      <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="edit-patient.html"><i className="fa fa-pencil m-r-5" /> Edit</a>
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_patient"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><img width={28} height={28} src="assets/img/user.jpg" className="rounded-circle m-r-5" alt /> Julia Sims</td>
                  <td>27</td>
                  <td>517 Walker Dr, Houma, LA, 70364, United States</td>
                  <td>(680) 432 2662</td>
                  <td>juliasims@example.com</td>
                  <td className="text-right">
                    <div className="dropdown dropdown-action">
                      <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="edit-patient.html"><i className="fa fa-pencil m-r-5" /> Edit</a>
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_patient"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><img width={28} height={28} src="assets/img/user.jpg" className="rounded-circle m-r-5" alt /> Linda Carpenter</td>
                  <td>24</td>
                  <td>2226 Victory Garden Ln, Tallahassee, FL, 32301</td>
                  <td>(218) 661 8316</td>
                  <td>lindacarpenter@example.com</td>
                  <td className="text-right">
                    <div className="dropdown dropdown-action">
                      <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="edit-patient.html"><i className="fa fa-pencil m-r-5" /> Edit</a>
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_patient"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><img width={28} height={28} src="assets/img/user.jpg" className="rounded-circle m-r-5" alt /> Melissa Burton</td>
                  <td>35</td>
                  <td>3321 N 26th St, Milwaukee, WI, 53206</td>
                  <td>(192) 494 8073</td>
                  <td>melissaburton@example.com</td>
                  <td className="text-right">
                    <div className="dropdown dropdown-action">
                      <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="edit-patient.html"><i className="fa fa-pencil m-r-5" /> Edit</a>
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_patient"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><img width={28} height={28} src="assets/img/user.jpg" className="rounded-circle m-r-5" alt /> Patrick Knight</td>
                  <td>21</td>
                  <td>Po Box 3336, Commerce, TX, 75429</td>
                  <td>(785) 580 4514</td>
                  <td>patrickknight@example.com</td>
                  <td className="text-right">
                    <div className="dropdown dropdown-action">
                      <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="edit-patient.html"><i className="fa fa-pencil m-r-5" /> Edit</a>
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_patient"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><img width={28} height={28} src="assets/img/user.jpg" className="rounded-circle m-r-5" alt /> Denise Stevens</td>
                  <td>7</td>
                  <td>1603 Old York Rd, Abington, PA, 19001</td>
                  <td>(836) 257 1379</td>
                  <td>denisestevens@example.com</td>
                  <td className="text-right">
                    <div className="dropdown dropdown-action">
                      <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="edit-patient.html"><i className="fa fa-pencil m-r-5" /> Edit</a>
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_patient"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><img width={28} height={28} src="assets/img/user.jpg" className="rounded-circle m-r-5" alt /> Judy Clark</td>
                  <td>22</td>
                  <td>4093 Woodside Circle, Pensacola, FL, 32514</td>
                  <td>(359) 969 3594</td>
                  <td>judy.clark@example.com</td>
                  <td className="text-right">
                    <div className="dropdown dropdown-action">
                      <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="edit-patient.html"><i className="fa fa-pencil m-r-5" /> Edit</a>
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_patient"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><img width={28} height={28} src="assets/img/user.jpg" className="rounded-circle m-r-5" alt /> Dennis Salazar</td>
                  <td>34</td>
                  <td>891 Juniper Drive, Saginaw, MI, 48603</td>
                  <td>(933) 137 6201</td>
                  <td>dennissalazar@example.com</td>
                  <td className="text-right">
                    <div className="dropdown dropdown-action">
                      <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="edit-patient.html"><i className="fa fa-pencil m-r-5" /> Edit</a>
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_patient"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><img width={28} height={28} src="assets/img/user.jpg" className="rounded-circle m-r-5" alt /> Charles Ortega</td>
                  <td>32</td>
                  <td>3169 Birch Street, El Paso, TX, 79915</td>
                  <td>(380) 141 1885</td>
                  <td>charlesortega@example.com</td>
                  <td className="text-right">
                    <div className="dropdown dropdown-action">
                      <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="edit-patient.html"><i className="fa fa-pencil m-r-5" /> Edit</a>
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_patient"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><img width={28} height={28} src="assets/img/user.jpg" className="rounded-circle m-r-5" alt /> Sandra Mendez</td>
                  <td>24</td>
                  <td>2535 Linden Avenue, Orlando, FL, 32789</td>
                  <td>(797) 506 1265</td>
                  <td>sandramendez@example.com</td>
                  <td className="text-right">
                    <div className="dropdown dropdown-action">
                      <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="edit-patient.html"><i className="fa fa-pencil m-r-5" /> Edit</a>
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_patient"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div className="notification-box">
      <div className="msg-sidebar notifications msg-noti">
        <div className="topnav-dropdown-header">
          <span>Messages</span>
        </div>
        <div className="drop-scroll msg-list-scroll" id="msg_list">
          <ul className="list-box">
            <li>
              <a href="chat.html">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">R</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">Richard Miles </span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="chat.html">
                <div className="list-item new-message">
                  <div className="list-left">
                    <span className="avatar">J</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">John Doe</span>
                    <span className="message-time">1 Aug</span>
                    <div className="clearfix" />
                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="chat.html">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">T</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author"> Tarah Shropshire </span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="chat.html">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">M</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">Mike Litorus</span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="chat.html">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">C</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author"> Catherine Manseau </span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="chat.html">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">D</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author"> Domenic Houston </span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="chat.html">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">B</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author"> Buster Wigton </span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="chat.html">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">R</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author"> Rolland Webber </span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="chat.html">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">C</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author"> Claire Mapes </span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="chat.html">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">M</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">Melita Faucher</span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="chat.html">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">J</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">Jeffery Lalor</span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="chat.html">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">L</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">Loren Gatlin</span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="chat.html">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">T</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">Tarah Shropshire</span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="topnav-dropdown-footer">
          <a href="chat.html">See all messages</a>
        </div>
      </div>
    </div>
  </div>
  <div id="delete_patient" className="modal fade delete-modal" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body text-center">
          <img src="assets/img/sent.png" alt width={50} height={46} />
          <h3>Are you sure want to delete this Patient?</h3>
          <div className="m-t-20"> <a href="#" className="btn btn-white" data-dismiss="modal">Close</a>
            <button type="submit" className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    );
}

export default Patients;