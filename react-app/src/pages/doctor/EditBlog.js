import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from "../../api-config";
import { useNavigate } from "react-router-dom";
import Iconify from "../../components/common/Iconify";
import blogThumb01 from "../../assets/blog-thumb-01.jpg";
import placeholderThumb from "../../assets/placeholder-thumb.jpg";
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
    axios.put(`${API_BASE_URL}/blogs/update-blog/${params.id}`, {
        title,
        description,
      })
      .then((res) => console.log(res.data));
      navigate("/doctor/blogs", { replace: true });
  };

  const [blogs, setBlog] = useState([]);
  useEffect(() => {
    const getBlogs = async () => {
      const res = await axios(`${API_BASE_URL}/blogs/blog/${params.id}`);
      console.log(res.data);
      setBlog(res.data);
    };
    getBlogs();
  }, [params.id]);
  return (
    <div className="page-wrapper">
      <div className="content">
      {/* Page Header */}
      <div className="flex flex-row items-center justify-between gap-6 pb-2 mb-8">
        <div className="text-left">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            Edit <span className="text-sky-500">Post</span>
          </h1>
          <p className="text-slate-500 font-medium mt-1">Refine and update your medical insights for the community.</p>
        </div>
        <button 
          onClick={handleEdit}
          className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 active:scale-95 whitespace-nowrap"
        >
          <Iconify icon="eva:save-fill" className="w-5 h-5" />
          <span className="hidden sm:inline">Update Post</span>
          <span className="sm:hidden">Update</span>
        </button>
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
                        src={blogThumb01}
                        className="img-thumbnail img-fluid"
                        alt="Blog thumbnail"
                      />
                      <span className="product-remove" title="remove">
                        <i className="fa fa-close" />
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                    <div className="product-thumbnail">
                      <img
                        src={placeholderThumb}
                        className="img-thumbnail img-fluid"
                        alt="Placeholder"
                      />
                      <span className="product-remove" title="remove">
                        <i className="fa fa-close" />
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                    <div className="product-thumbnail">
                      <img
                        src={placeholderThumb}
                        className="img-thumbnail img-fluid"
                        alt=""
                      />
                      <span className="product-remove" title="remove">
                        <i className="fa fa-close" />
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                    <div className="product-thumbnail">
                      <img
                        src={placeholderThumb}
                        className="img-thumbnail img-fluid"
                        alt=""
                      />
                      <span className="product-remove" title="remove">
                        <i className="fa fa-close" />
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                    <div className="product-thumbnail">
                      <img
                        src={placeholderThumb}
                        className="img-thumbnail img-fluid"
                        alt=""
                      />
                      <span className="product-remove" title="remove">
                        <i className="fa fa-close" />
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                    <div className="product-thumbnail">
                      <img
                        src={placeholderThumb}
                        className="img-thumbnail img-fluid"
                        alt=""
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
