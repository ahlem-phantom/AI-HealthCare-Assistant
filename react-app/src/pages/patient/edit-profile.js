import { React, useEffect } from "react";

function EditProfile() {
  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-12">
              <h4 className="page-title">Edit Profile</h4>
            </div>
          </div>
          <form>
            <div className="card-box">
              <h3 className="card-title">Basic Informations</h3>
              <div className="row">
                <div className="col-md-12">
                  <div className="profile-img-wrap">
                    <img
                      className="inline-block"
                      src="assets/img/user.jpg"
                      alt="user"
                    />
                    <div className="fileupload btn">
                      <span className="btn-text">edit</span>
                      <input className="upload" type="file" />
                    </div>
                  </div>
                  <div className="profile-basic">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group form-focus">
                          <label className="focus-label">First Name</label>
                          <input
                            type="text"
                            className="form-control floating"
                            defaultValue="John"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-focus">
                          <label className="focus-label">Last Name</label>
                          <input
                            type="text"
                            className="form-control floating"
                            defaultValue="Doe"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-focus">
                          <label className="focus-label">Birth Date</label>
                          <div className="cal-icon">
                            <input
                              className="form-control floating datetimepicker"
                              type="text"
                              defaultValue="05/06/1985"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-focus select-focus">
                          <label className="focus-label">Gendar</label>
                          <select className="select form-control floating">
                            <option value="male selected">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-box">
              <h3 className="card-title">Contact Informations</h3>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group form-focus">
                    <label className="focus-label">Address</label>
                    <input
                      type="text"
                      className="form-control floating"
                      defaultValue="4487 Snowbird Lane"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group form-focus">
                    <label className="focus-label">State</label>
                    <input
                      type="text"
                      className="form-control floating"
                      defaultValue="New York"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group form-focus">
                    <label className="focus-label">Country</label>
                    <input
                      type="text"
                      className="form-control floating"
                      defaultValue="United States"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group form-focus">
                    <label className="focus-label">Pin Code</label>
                    <input
                      type="text"
                      className="form-control floating"
                      defaultValue={10523}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group form-focus">
                    <label className="focus-label">Phone Number</label>
                    <input
                      type="text"
                      className="form-control floating"
                      defaultValue="631-889-3206"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-box">
              <h3 className="card-title">Education Informations</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group form-focus">
                    <label className="focus-label">Institution</label>
                    <input
                      type="text"
                      className="form-control floating"
                      defaultValue="Oxford University"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group form-focus">
                    <label className="focus-label">Subject</label>
                    <input
                      type="text"
                      className="form-control floating"
                      defaultValue="Computer Science"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group form-focus">
                    <label className="focus-label">Starting Date</label>
                    <div className="cal-icon">
                      <input
                        type="text"
                        className="form-control floating datetimepicker"
                        defaultValue="01/06/2002"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group form-focus">
                    <label className="focus-label">Complete Date</label>
                    <div className="cal-icon">
                      <input
                        type="text"
                        className="form-control floating datetimepicker"
                        defaultValue="31/05/2006"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group form-focus">
                    <label className="focus-label">Degree</label>
                    <input
                      type="text"
                      className="form-control floating"
                      defaultValue="BE Computer Science"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group form-focus">
                    <label className="focus-label">Grade</label>
                    <input
                      type="text"
                      className="form-control floating"
                      defaultValue="Grade A"
                    />
                  </div>
                </div>
              </div>
              <div className="add-more">
                <a href="#" className="btn btn-primary">
                  <i className="fa fa-plus" /> Add More Institute
                </a>
              </div>
            </div>
            <div className="card-box">
              <h3 className="card-title">Experience Informations</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group form-focus">
                    <label className="focus-label">Company Name</label>
                    <input
                      type="text"
                      className="form-control floating"
                      defaultValue="Digital Devlopment Inc"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group form-focus">
                    <label className="focus-label">Location</label>
                    <input
                      type="text"
                      className="form-control floating"
                      defaultValue="United States"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group form-focus">
                    <label className="focus-label">Job Position</label>
                    <input
                      type="text"
                      className="form-control floating"
                      defaultValue="Web Developer"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group form-focus">
                    <label className="focus-label">Period From</label>
                    <div className="cal-icon">
                      <input
                        type="text"
                        className="form-control floating datetimepicker"
                        defaultValue="01/07/2007"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group form-focus">
                    <label className="focus-label">Period To</label>
                    <div className="cal-icon">
                      <input
                        type="text"
                        className="form-control floating datetimepicker"
                        defaultValue="08/06/2018"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-more">
                <a href="#" className="btn btn-primary">
                  <i className="fa fa-plus" /> Add More Experience
                </a>
              </div>
            </div>
            <div className="text-center m-t-20">
              <button className="btn btn-primary submit-btn" type="button">
                Save
              </button>
            </div>
          </form>
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
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
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
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
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
                        <span className="message-author">
                          {" "}
                          Tarah Shropshire{" "}
                        </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
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
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
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
                        <span className="message-author">
                          {" "}
                          Catherine Manseau{" "}
                        </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
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
                        <span className="message-author">
                          {" "}
                          Domenic Houston{" "}
                        </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
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
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
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
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
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
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
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
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
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
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
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
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
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
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
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
    </div>
  );
}

export default EditProfile;
