import { Link, useNavigate } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import { Card, Stack, Container, Typography } from "@mui/material";
// components
import Page from "../page";
import * as Yup from "yup";
import { useState } from "react";
import { useFormik, Form, FormikProvider } from "formik";

// material

import {
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useEffect } from "react";
// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 200,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#87CEEB",
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Profile() {
  
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      navigate("/doctor/app", { replace: true });
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
<div>
  <div className="col-md-7 col-lg-8 col-xl-9">
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Basic Information</h4>
        <div className="row form-row">
          <div className="col-md-12">
            <div className="form-group">
              <div className="change-avatar">
                <div className="profile-img">
                  <img  src={process.env.PUBLIC_URL + '/cards/doctor.jpg'} style={{ backgroundImage: 'url("images/bg_1.jpg")' }}
                    alt="User Image" />

                </div>
                <div className="upload-img">
                  <div className="change-photo-btn">
                    <span><i className="fa fa-upload" /> Upload Photo</span>
                    <input type="file" className="upload" />
                  </div>
                  <small className="form-text text-muted">Allowed JPG, GIF or PNG. Max size of 2MB</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Username <span className="text-danger">*</span></label>
              <input type="text" className="form-control" readOnly />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Email <span className="text-danger">*</span></label>
              <input type="email" className="form-control" readOnly />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>First Name <span className="text-danger">*</span></label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Last Name <span className="text-danger">*</span></label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Gender</label>
              <select className="form-control select">
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group mb-0">
              <label>Date of Birth</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Basic Information */}
    {/* About Me */}
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">About Me</h4>
        <div className="form-group mb-0">
          <label>Biography</label>
          <textarea className="form-control" rows={5} defaultValue={""} />
        </div>
      </div>
    </div>
    {/* /About Me */}
    {/* Clinic Info */}
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Clinic Info</h4>
        <div className="row form-row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Clinic Name</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Clinic Address</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label>Clinic Images</label>
              <form action="#" className="dropzone" />
            </div>
            <div className="upload-wrap">
              <div className="upload-images">
                <img src={process.env.PUBLIC_URL + 'cards/img/features/feature-01.jpg'} alt="Upload Image" />
                <a href="javascript:void(0);" className="btn btn-icon btn-danger btn-sm"><i className="far fa-trash-alt" /></a>
              </div>
              <div className="upload-images">
                <img src="assets/img/features/feature-02.jpg" alt="Upload Image" />
                <a href="javascript:void(0);" className="btn btn-icon btn-danger btn-sm"><i className="far fa-trash-alt" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Clinic Info */}
    {/* Contact Details */}
    <div className="card contact-card">
      <div className="card-body">
        <h4 className="card-title">Contact Details</h4>
        <div className="row form-row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Address Line 1</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="control-label">Address Line 2</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="control-label">City</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="control-label">State / Province</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="control-label">Country</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="control-label">Postal Code</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Contact Details */}
    {/* Pricing */}
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Pricing</h4>
        <div className="form-group mb-0">
          <div id="pricing_select">
            <div className="custom-control custom-radio custom-control-inline">
              <input type="radio" id="price_free" name="rating_option" className="custom-control-input" defaultValue="price_free" defaultChecked />
              <label className="custom-control-label" htmlFor="price_free">Free</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input type="radio" id="price_custom" name="rating_option" defaultValue="custom_price" className="custom-control-input" />
              <label className="custom-control-label" htmlFor="price_custom">Custom Price (per hour)</label>
            </div>
          </div>
        </div>
        <div className="row custom_price_cont" id="custom_price_cont" style={{display: 'none'}}>
          <div className="col-md-4">
            <input type="text" className="form-control" id="custom_rating_input" name="custom_rating_count" defaultValue placeholder={20} />
            <small className="form-text text-muted">Custom price you can add</small>
          </div>
        </div>
      </div>
    </div>
    {/* /Pricing */}
    {/* Services and Specialization */}
    <div className="card services-card">
      <div className="card-body">
        <h4 className="card-title">Services and Specialization</h4>
        <div className="form-group">
          <label>Services</label>
          <input type="text" data-role="tagsinput" className="input-tags form-control" placeholder="Enter Services" name="services" defaultValue="Tooth cleaning " id="services" />
          <small className="form-text text-muted">Note : Type &amp; Press enter to add new services</small>
        </div> 
        <div className="form-group mb-0">
          <label>Specialization </label>
          <input className="input-tags form-control" type="text" data-role="tagsinput" placeholder="Enter Specialization" name="specialist" defaultValue="Children Care,Dental Care" id="specialist" />
          <small className="form-text text-muted">Note : Type &amp; Press  enter to add new specialization</small>
        </div> 
      </div>              
    </div>
    {/* /Services and Specialization */}
    {/* Education */}
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Education</h4>
        <div className="education-info">
          <div className="row form-row education-cont">
            <div className="col-12 col-md-10 col-lg-11">
              <div className="row form-row">
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label>Degree</label>
                    <input type="text" className="form-control" />
                  </div> 
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label>College/Institute</label>
                    <input type="text" className="form-control" />
                  </div> 
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label>Year of Completion</label>
                    <input type="text" className="form-control" />
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="add-more">
          <a href="javascript:void(0);" className="add-education"><i className="fa fa-plus-circle" /> Add More</a>
        </div>
      </div>
    </div>
    {/* /Education */}
    {/* Experience */}
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Experience</h4>
        <div className="experience-info">
          <div className="row form-row experience-cont">
            <div className="col-12 col-md-10 col-lg-11">
              <div className="row form-row">
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label>Hospital Name</label>
                    <input type="text" className="form-control" />
                  </div> 
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label>From</label>
                    <input type="text" className="form-control" />
                  </div> 
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label>To</label>
                    <input type="text" className="form-control" />
                  </div> 
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label>Designation</label>
                    <input type="text" className="form-control" />
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="add-more">
          <a href="javascript:void(0);" className="add-experience"><i className="fa fa-plus-circle" /> Add More</a>
        </div>
      </div>
    </div>
    {/* /Experience */}
    {/* Awards */}
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Awards</h4>
        <div className="awards-info">
          <div className="row form-row awards-cont">
            <div className="col-12 col-md-5">
              <div className="form-group">
                <label>Awards</label>
                <input type="text" className="form-control" />
              </div> 
            </div>
            <div className="col-12 col-md-5">
              <div className="form-group">
                <label>Year</label>
                <input type="text" className="form-control" />
              </div> 
            </div>
          </div>
        </div>
        <div className="add-more">
          <a href="javascript:void(0);" className="add-award"><i className="fa fa-plus-circle" /> Add More</a>
        </div>
      </div>
    </div>
    {/* /Awards */}
    {/* Memberships */}
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Memberships</h4>
        <div className="membership-info">
          <div className="row form-row membership-cont">
            <div className="col-12 col-md-10 col-lg-5">
              <div className="form-group">
                <label>Memberships</label>
                <input type="text" className="form-control" />
              </div> 
            </div>
          </div>
        </div>
        <div className="add-more">
          <a href="javascript:void(0);" className="add-membership"><i className="fa fa-plus-circle" /> Add More</a>
        </div>
      </div>
    </div>
    {/* /Memberships */}
    {/* Registrations */}
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Registrations</h4>
        <div className="registrations-info">
          <div className="row form-row reg-cont">
            <div className="col-12 col-md-5">
              <div className="form-group">
                <label>Registrations</label>
                <input type="text" className="form-control" />
              </div> 
            </div>
            <div className="col-12 col-md-5">
              <div className="form-group">
                <label>Year</label>
                <input type="text" className="form-control" />
              </div> 
            </div>
          </div>
        </div>
        <div className="add-more">
          <a href="javascript:void(0);" className="add-reg"><i className="fa fa-plus-circle" /> Add More</a>
        </div>
      </div>
    </div>
    {/* /Registrations */}
    <div className="submit-section submit-btn-bottom">
      <button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
    </div>
  </div>
</div>

      );
    }
    