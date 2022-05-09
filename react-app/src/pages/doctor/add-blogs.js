import React from "react";
import { Outlet , useNavigate} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function AddBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState([]);
  const [picture, setPicture] = useState("");

  const navigate = useNavigate();

  const onChangeTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  const onChangeCategory = (e) => {
    const category = e.target.value;
    setCategory(category);
  };


  const onChangeDescription = (e) => {
    const description = e.target.value;
    setDescription(description);
  };

  const onChangePicture= (e) => {
    const img = e.target.files[0];
    setFile(img);
    setPicture(URL.createObjectURL(img));
  };
  const handleAdd = (e) => {
    e.preventDefault();
    const doctors = JSON.parse(localStorage.getItem('user')).id;

    const formData = new FormData();
    formData.append('profileImg',file);
    formData.append('title',title);
    formData.append('description',description);
    formData.append('doctors',doctors);
    formData.append('category',category);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    
    axios.post("http://localhost:8080/blogs/create-blog",formData,config)
        .then((response) => {
            alert("The file is successfully uploaded");
        }).catch((error) => {
    });
    
      navigate("/doctor/blogs", { replace: true });
  };
  return (
    <div className="page-wrapper">
      <Outlet />

      <div className="content">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h4 className="page-title">Add Blog</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <form onSubmit={handleAdd}>
              <div className="form-group">
                <label>Blog Name</label>
                <input className="form-control" type="text" value={title} onChange={onChangeTitle}/>
              </div>
              <div className="form-group">
                <label>Blog Images</label>
                <div>
                <input
                            type="file" name="profileImg" onChange= {onChangePicture}
                            className="form-control"
                          />   
                  <small className="form-text text-muted">
                    Max. file size: 50 MB. Allowed images: jpg, gif, png.
                    Maximum 10 images only.
                  </small>
                </div>
                <div className="row">
                  <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                    <div className="product-thumbnail">
                     <img alt src={picture}  
                          className="img-thumbnail img-fluid" 
                          />

                      <span className="product-remove" title="remove">
                        <i className="fa fa-close" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                <div className="form-group">
                <label>Blog Category</label>
                <input className="form-control" type="text" value={category} onChange={onChangeCategory}/>
              </div>
                  </div>
                </div>
              <div className="form-group">
                <label>Blog Description</label>
                <textarea
                  cols={30}
                  rows={6}
                  className="form-control"
                  value={description} onChange={onChangeDescription}
                />
              </div>
              <div className="form-group">
                <label>
                  Tags <small>(separated with a comma)</small>
                </label>
                <input
                  type="text"
                  placeholder="Enter your tags"
                  data-role="tagsinput"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label className="display-block">Blog Status</label>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="status"
                    id="blog_active"
                    defaultValue="option1"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="blog_active">
                    Active
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="status"
                    id="blog_inactive"
                    defaultValue="option2"
                  />
                  <label className="form-check-label" htmlFor="blog_inactive">
                    Inactive
                  </label>
                </div>
              </div>
              <div className="m-t-20 text-center">
                <button className="btn btn-primary submit-btn">
                  Publish Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBlog;
