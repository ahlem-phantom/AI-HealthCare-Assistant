import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Doctors() {
  const [doctors, setDoctor] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getDoctors = async () => {
      const res = await axios("http://localhost:8080/users");
      console.log(res.data);
      setDoctor(res.data);
    };
    getDoctors();
  }, []);
  const deletehandler = (id) => {
    axios
      .delete(`http://localhost:8080/users/delete-user/${id}`)
      .then((res) => console.log(res.data));
    window.location.reload();
  };
  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-4 col-3">
              <h4 className="page-title">Doctors</h4>
            </div>
            <div className="col-sm-8 col-9 text-right m-b-20">
              <Link
                class="btn btn-primary btn-rounded float-right"
                to={"/patient/add-doctor"}
                component={Link}
              >
                <i class="fa fa-plus"></i> Add Doctor
              </Link>
            </div>
          </div>

          <div className="row doctor-grid">
            {doctors.map((el, index) => {
              console.log(el);
              return (
                  <>
                <div className="col-md-4 col-sm-4 col-lg-3">
                  <div className="profile-widget">
                    <div className="doctor-img">
                      <Link
                      className="avatar"
                      to={`/patient/doctor-details/${el._id}`}
                      component={Link}
                    >
                     <img alt src={el.picture} />
                    </Link>
                    </div>
                    <div className="dropdown profile-action">
                      <a
                        href="#"
                        className="action-icon dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-v" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <Link
                          className="dropdown-item"
                          to={`/patient/edit-doctor/${el._id}`}
                          component={Link}
                        >
                          <i className="fa fa-pencil m-r-5" /> Edit
                        </Link>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-toggle="modal"
                          data-target="#delete_doctor"
                        >
                          <i className="fa fa-trash-o m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                    <h4 className="doctor-name text-ellipsis">
                      <a href="profile.html">
                        {el.firstname} {el.lastname}
                      </a>
                    </h4>
                    <div className="doc-prof">Gynecologist</div>
                    <div className="user-country">
                      <i className="fa fa-map-marker" /> United States, San
                      Francisco
                    </div>
                  </div>
                </div>
                     <div id="delete_doctor" className="modal fade delete-modal" role="dialog">
                     <div className="modal-dialog modal-dialog-centered">
                       <div className="modal-content">
                         <div className="modal-body text-center">
                           <img src="assets/img/sent.png" alt width={50} height={46} />
                           <h3>Are you sure want to delete this Doctor?</h3>
                           <div className="m-t-20">
                             {" "}
                             <a href="#" className="btn btn-white" data-dismiss="modal">
                               Close
                             </a>
                             <button type="submit"  
                                      onClick={() => {
                                         deletehandler(el._id);
                                       }}
                                      className="btn btn-danger">
                               Delete
                             </button>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                   </>
              );
            })}
            ;
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="see-all">
                <a className="see-all-btn" href="javascript:void(0);">
                  Load More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
 
    </div>
  );
}

export default Doctors;
