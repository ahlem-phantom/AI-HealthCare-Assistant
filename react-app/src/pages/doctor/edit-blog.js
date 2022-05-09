import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function EditBlog() {
  const params = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const onChangeTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  const onChangeDescription = (e) => {
    const description = e.target.value;
    setDescription(description);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8080/blogs/update-blog/" + params.id, {
        title,
        description,
      })
      .then((res) => console.log(res.data));
      navigate("/doctor/blogs", { replace: true });
  };

  const [blogs, setBlog] = useState([]);
  useEffect(() => {
    const getBlogs = async () => {
      const res = await axios("http://localhost:8080/blogs/blog/" + params.id);
      console.log(res.data);
      setBlog(res.data);
    };
    getBlogs();
  }, []);
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h4 className="page-title">Add Blog</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <form onSubmit={handleEdit}>
              <div className="form-group">
                <label>Blog Name</label>
                <input
                  className="form-control"
                  value={title}
                  onChange={onChangeTitle}
                  defaultValue={blogs.title}
                />
              </div>
              <div className="form-group">
                <label>Blog Images</label>
                <div>
                  <input className="form-control" type="file" />
                  <small className="form-text text-muted">
                    Max. file size: 50 MB. Allowed images: jpg, gif, png.
                    Maximum 10 images only.
                  </small>
                </div>
                <div className="row">
                  <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                    <div className="product-thumbnail">
                      <img
                        src="assets/img/blog/blog-thumb-01.jpg"
                        className="img-thumbnail img-fluid"
                        alt
                      />
                      <span className="product-remove" title="remove">
                        <i className="fa fa-close" />
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                    <div className="product-thumbnail">
                      <img
                        src="assets/img/placeholder-thumb.jpg"
                        className="img-thumbnail img-fluid"
                        alt
                      />
                      <span className="product-remove" title="remove">
                        <i className="fa fa-close" />
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                    <div className="product-thumbnail">
                      <img
                        src="assets/img/placeholder-thumb.jpg"
                        className="img-thumbnail img-fluid"
                        alt
                      />
                      <span className="product-remove" title="remove">
                        <i className="fa fa-close" />
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                    <div className="product-thumbnail">
                      <img
                        src="assets/img/placeholder-thumb.jpg"
                        className="img-thumbnail img-fluid"
                        alt
                      />
                      <span className="product-remove" title="remove">
                        <i className="fa fa-close" />
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                    <div className="product-thumbnail">
                      <img
                        src="assets/img/placeholder-thumb.jpg"
                        className="img-thumbnail img-fluid"
                        alt
                      />
                      <span className="product-remove" title="remove">
                        <i className="fa fa-close" />
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                    <div className="product-thumbnail">
                      <img
                        src="assets/img/placeholder-thumb.jpg"
                        className="img-thumbnail img-fluid"
                        alt
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
                    <select className="select">
                      <option>Health Care</option>
                      <option>Child</option>
                      <option>AHealth Care</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Blog Sub Category</label>
                    <select className="select">
                      <option>Health Care</option>
                      <option>Health Care</option>
                      <option>Health Care</option>
                      <option>Health Care</option>
                      <option>Health Care</option>
                      <option>Health Care</option>
                      <option>Health Care</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Blog Description</label>
                <textarea
                  cols={30}
                  rows={6}
                  className="form-control"
                  value={description}
                  onChange={onChangeDescription}
                  defaultValue={blogs.description}
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

export default EditBlog;
