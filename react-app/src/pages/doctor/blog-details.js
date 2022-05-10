import { useEffect, useState } from "react";
import React from "react";
import { Outlet, useParams } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";



function BlogDetails() {

  const params = useParams();

  const [blogs, setBlog] = useState([]);
  useEffect(() => {
  const getBlogs = async () => {
   const res = await axios('http://localhost:8080/blogs/blog/'+params.id);
   console.log(res.data);
   setBlog(res.data);
 }; getBlogs();}, [] )
 const [search, setSearch] = useState("");
 const [searchR, setSearchR] = useState([]);

 const onChangeSearch = (e) => {
     const search = e.target.value;
     setSearch(search);
   };

   const handleSearch = (e) => {
     e.preventDefault();


     const getSearchR = async () => {
         const res = await axios("http://localhost:8080/blogs/search/"+`${search}`);
         console.log(res.data);
         setSearchR(res.data);
       };
     getSearchR();
 };

  return (
        <div className="content">
          <div className="row">
            <div className="col-sm-12">
              <h4 className="page-title">Blog details</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="blog-view">
                <article className="blog blog-single-post">
                  <h3 className="blog-title">{blogs.title}</h3>
                  <div className="blog-info clearfix">
                    <div className="post-left">
                      <ul>
                        <li>
                          <a href="#.">
                            <i className="fa fa-calendar" />{" "}
                            <span>{dayjs( `${blogs.dateCreation}`).format('DD/MM/YYYY') }</span>
                          </a>
                        </li>
                        <li>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-image">
                    <a href="#.">
                      <img
                        alt=""
                        src={blogs.picture}
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="blog-content">
                    <p>
                     {blogs.description}
                    </p>
                  </div>
                </article>
                <div className="widget blog-share clearfix">
                  <h3>Share the post</h3>
                  <ul className="social-share">
                    <li>
                      <a href="#." title="Facebook">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#." title="Twitter">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#." title="Linkedin">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#." title="Google Plus">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a href="#." title="Youtube">
                        <i className="fa fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="widget search-widget">
                <h5>Get More Details</h5>
                <form className="search-form" onSubmit={handleSearch}>
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="form-control"
                      value={search}
                      onChange={onChangeSearch}
                    />
                    <div className="input-group-append">
                      <button type="submit" className="btn btn-primary">
                        <i className="fa fa-search" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="widget post-widget">
                <ul className="latest-posts">
                {searchR.map((el, index) => {
                  return (
                  <li>
                    <div className="post-info">
                      <h4>
                        <a href={el.link}>
                          <div style={{color : 'blue', fontSize : '20px'}}>{el.title}</div>
                        </a>
                      </h4>
                    </div>
                  </li>
                  );
                })};
                </ul>
              </div>
              </div>
            </div>
            <aside className="col-md-4">
          
              <div className="widget post-widget">
                <h5>Latest Posts</h5>
                <ul className="latest-posts">
                  <li>
                    <div className="post-thumb">
                      <a href="blog-details.html">
                        <img
                          className="img-fluid"
                          src="assets/img/blog/blog-thumb-01.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="post-info">
                      <h4>
                        <a href="blog-details.html">
                          Lorem ipsum dolor sit amet consectetur
                        </a>
                      </h4>
                      <p>
                        <i aria-hidden="true" className="fa fa-calendar" />{" "}
                        December 6, 2017
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="post-thumb">
                      <a href="blog-details.html">
                        <img
                          className="img-fluid"
                          src="assets/img/blog/blog-thumb-02.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="post-info">
                      <h4>
                        <a href="blog-details.html">
                          Lorem ipsum dolor sit amet consectetur
                        </a>
                      </h4>
                      <p>
                        <i aria-hidden="true" className="fa fa-calendar" />{" "}
                        December 6, 2017
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="post-thumb">
                      <a href="blog-details.html">
                        <img
                          className="img-fluid"
                          src="assets/img/blog/blog-thumb-03.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="post-info">
                      <h4>
                        <a href="blog-details.html">
                          Lorem ipsum dolor sit amet consectetur
                        </a>
                      </h4>
                      <p>
                        <i aria-hidden="true" className="fa fa-calendar" />{" "}
                        December 6, 2017
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="post-thumb">
                      <a href="blog-details.html">
                        <img
                          className="img-fluid"
                          src="assets/img/blog/blog-thumb-04.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="post-info">
                      <h4>
                        <a href="blog-details.html">
                          Lorem ipsum dolor sit amet consectetur
                        </a>
                      </h4>
                      <p>
                        <i aria-hidden="true" className="fa fa-calendar" />{" "}
                        December 6, 2017
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="widget category-widget">
                <h5>Blog Categories</h5>
                <ul className="categories">
                  <li>
                    <a href="#.">
                      <i className="fa fa-long-arrow-right" /> Lorem ipsum dolor
                    </a>
                  </li>
                  <li>
                    <a href="#.">
                      <i className="fa fa-long-arrow-right" /> Lorem ipsum dolor
                    </a>
                  </li>
                  <li>
                    <a href="#.">
                      <i className="fa fa-long-arrow-right" /> Lorem ipsum dolor
                    </a>
                  </li>
                  <li>
                    <a href="#.">
                      <i className="fa fa-long-arrow-right" /> Lorem ipsum dolor
                    </a>
                  </li>
                  <li>
                    <a href="#.">
                      <i className="fa fa-long-arrow-right" /> Lorem ipsum dolor
                    </a>
                  </li>
                  <li>
                    <a href="#.">
                      <i className="fa fa-long-arrow-right" /> Lorem ipsum dolor
                    </a>
                  </li>
                </ul>
              </div>
              <div className="widget tags-widget">
                <h5>Tags</h5>
                <ul className="tags">
                  <li>
                    <a href="#." className="tag">
                      Heart
                    </a>
                  </li>
                  <li>
                    <a href="#." className="tag">
                      Cancer
                    </a>
                  </li>
                  <li>
                    <a href="#." className="tag">
                      Kids
                    </a>
                  </li>
                  <li>
                    <a href="#." className="tag">
                      Family
                    </a>
                  </li>
                  <li>
                    <a href="#." className="tag">
                      Medical
                    </a>
                  </li>
                  <li>
                    <a href="#." className="tag">
                      Injection
                    </a>
                  </li>
                  <li>
                    <a href="#." className="tag">
                      Secure
                    </a>
                  </li>
                  <li>
                    <a href="#." className="tag">
                      Insurance
                    </a>
                  </li>
                  <li>
                    <a href="#." className="tag">
                      Doctor
                    </a>
                  </li>
                  <li>
                    <a href="#." className="tag">
                      Nurse
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
  );
}
export default BlogDetails;
