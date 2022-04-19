import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";

function AddDoctor() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [birthdate, setBirth] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [stat, setStat] = useState("");
  const [street, setStreet] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");


  const handleAdd = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/users/create-user" , {
        firstname,
        lastname,
        email,
        birthdate,
        username,
        gender,
        country,
        stat,
        street,
        zip,
        phone, 
        status,
      })
      .then((res) => console.log(res.data));
      navigate("/patient/doctors", { replace: true });
      window.location.reload();

  };



  const navigate = useNavigate();

  const onChangeFirstname = (e) => {
    const firstname = e.target.value;
    setFirstname(firstname);
  };

  const onChangeLastname = (e) => {
    const lastname = e.target.value;
    setLastname(lastname);
  };

  const onChangeEmail = (e) => {
      const email = e.target.value;
      setEmail(email);
    };
    const onChangeUsername = (e) => {
      const username = e.target.value;
      setUsername(username);
    };

    const onChangeBirth = (e) => {
      const birth = e.target.value;
      setBirth(birth);
    };

    const onChangeGender = (e) => {
      const gender = e.target.value;
      setGender(gender);
    };

    const onChangeCountry = (e) => {
      const country = e.target.value;
      setCountry(country);
    };

    const onChangeStat = (e) => {
      const stat = e.target.value;
      setStat(stat);
    };

    const onChangeStreet = (e) => {
      const street = e.target.value;
      setStreet(street);
    };

    const onChangeZip = (e) => {
      const zip = e.target.value;
      setZip(zip);
    };

    const onChangePhone = (e) => {
      const phone = e.target.value;
      setPhone(phone);
    };


    const onChangeStatus = (e) => {
      const status = e.target.value;
      setStatus(status);
    };

   return (
<div className="main-wrapper">
<div className="page-wrapper">
  <div className="content">
    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <h4 className="page-title">Edit Doctor</h4>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <form onSubmit={handleAdd}>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label>First Name <span className="text-danger">*</span></label>
                <input className="form-control " type="text"   
                value={firstname}
                onChange={onChangeFirstname}
               />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Last Name</label>
                <input className="form-control" type="text" 
                value={lastname}
                onChange={onChangeLastname}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Username <span className="text-danger">*</span></label>
                <input className="form-control" type="text" value={username} onChange={onChangeUsername} />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Email <span className="text-danger">*</span></label>
                <input className="form-control" type="email" value={email} onChange={onChangeEmail} />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Date of Birth</label>
                <div className="cal-icon">
                  <input type="text" className="form-control datetimepicker" value={birthdate} onChange={onChangeBirth} />
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group gender-select">
                <label className="gen-label">Gender:</label>
                <div className="form-check-inline">
                  <label className="form-check-label">
                    <input type="radio" name="gender" className="form-check-input" value="Male" checked={gender === "Male"} onChange={onChangeGender} />Male
                  </label>
                </div>
                <div className="form-check-inline">
                  <label className="form-check-label">
                    <input type="radio" name="gender" className="form-check-input" value="Female" checked={gender === "Female"} onChange={onChangeGender} />Female
                  </label>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="form-group">
                    <label>Country</label>
                    <select className="form-control select" value={country} onChange={onChangeCountry}>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Algeria">Algeria</option>
                    <option value="Morroco">Marrocco</option>
                      <option value="USA">USA</option>
                      <option value="United Kingdom">United Kingdom</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="form-group">
                    <label>City</label>
                    <input type="text" className="form-control" value={street} onChange={onChangeStreet} />
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="form-group">
                    <label>State/Province</label>
                    <select className="form-control select" value={stat} onChange={onChangeStat}>
                      <option value=" California">California</option>
                      <option value=" Alaska">Alaska</option>
                      <option value=" Alabama">Alabama</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="form-group">
                    <label>Postal Code</label>
                    <input type="text" value={zip} onChange={onChangeZip} className="form-control" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Phone </label>
                <input className="form-control" value={phone} onChange={onChangePhone} type="text" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Your avatar:</label>
                <div className="profile-upload">
                  <div className="upload-img">
                    <img alt src="assets/img/user.jpg" />
                  </div>
                  <div className="upload-input">
                    <input type="file" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>Short Biography</label>
            <textarea className="form-control" rows={3} cols={30} defaultValue={""} />
          </div>
          <div className="form-group gender-select">
                <label className="gen-label">Status</label>
                <div className="form-check-inline">
                  <label className="form-check-label">
                    <input type="radio" name="status" className="form-check-input" value="Active" checked={status === "Active"} onChange={onChangeStatus} />Active
                  </label>
                </div>
                <div className="form-check-inline">
                  <label className="form-check-label">
                    <input type="radio" name="status" className="form-check-input" value="Inactive" checked={status === "Inactive"} onChange={onChangeStatus} /> Inactive
                  </label>
                </div>
              </div>
          <div className="m-t-20 text-center">
            <button className="btn btn-primary submit-btn">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</div>

 
  );
}

export default AddDoctor;