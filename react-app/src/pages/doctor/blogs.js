import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
function Blogs() {
  const [blogs, setBlog] = useState([]);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();
  const doctors = JSON.parse(localStorage.getItem('user')).id;

  useEffect(() => {
    const getBlogs = async () => {
      const res = await axios("http://localhost:8080/blogs/blog-doctor/"+doctors);
      console.log(res.data);
      setBlog(res.data);
    };
    getBlogs();


    const getCategories = async () => {
      const res = await axios("http://localhost:8080/blogs/categories");
      console.log(res.data);
      setCategories(res.data);
    };
    getCategories();
    console.log(categories);
  }, []);


  const deletehandler = (id) => {
    axios
      .delete(`http://localhost:8080/blogs/delete-blog/${id}`)
      .then((res) => console.log(res.data));
      window.location.reload();
    };

    const [search, setSearch] = useState("");
    const [searchR, setSearchR] = useState([]);
    const [filtreR, setFiltreR] = useState([]);

    const [showResults, setShowResults] = React.useState(true)

   
    const onChangeSearch = (e) => {
        const search = e.target.value;
        setSearch(search);
      };
   
      const handleSearch = (e) => {
        e.preventDefault();
   
        const getSearchR = async () => {
            const res = await axios("http://localhost:8080/blogs/search-blog/"+`${search}`);
            setSearchR(res.data);
          };
        getSearchR();
        setShowResults(false)
    };

    const handleFilter = async (filtre) => {
      const res = await axios("http://localhost:8080/blogs/filter-blog/"+`${filtre}`)
      .then((res) => setFiltreR(res.data));
      console.log(filtreR);
      setShowResults(false)

      };


  return (
      <div className="content">
      <div class="">
            <h4 class="page-title">Blog</h4>    
          </div>
        <div class="row">
         
          <br></br>
          <div class="col-sm-4 col-12 text-right m-b-30">
            
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
                <br/>
                
        
          </div>
      
        </div>
        
        { showResults ?   <div className="row">
        <aside >
        <Link
              class="btn btn-primary btn-rounded float-right"
              to={"/doctor/add-blog"}
              component={Link}
            >
              <i class="fa fa-plus"></i> Add Blog
            </Link>
            <div className="widget tags-widget">
                <h5>Tags</h5>
                <ul className="tags">
                {categories.map((el, index) => {
                  return(
                  <li>
                    <a onClick={() => { handleFilter(el); }} className="tag">
                      {el}
                    </a>
                  </li> 
                  );
                })}
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
                      Insurance
                    </a>
                  </li>
                  <li>
                    <a href="#." className="tag">
                      Insurance
                    </a>
                  </li>
                  <li>
                    <a href="#." className="tag">
                      Insurance
                    </a>
                  </li>
                  <li>
                    <a href="#." className="tag">
                      Insurance
                    </a>
                  </li>
                  
                </ul>
              </div>

              </aside>
          {blogs.map((el, index) => {
            return (
              
              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="dropdown profile-action ">
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
                      to={`/doctor/edit-blog/${el._id}`}
                      component={Link}
                    >
                      <i className="fa fa-pencil m-r-5" /> Edit
                    </Link>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#delete_doctor"
                      onClick={() => {
                        deletehandler(el._id);
                      }}
                    >
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <div className="blog grid-blog">
                  <div className="blog-image">
                    <Link
                      className="dropdown-item"
                      to={`/doctor/blog-details/${el._id}`}
                      component={Link}
                    >
                      <img
                        className="img-fluid" style={{height : '250px'}}
                        src={el.picture}
                        alt
                      />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <h3 className="blog-title">
                      <Link to={`/doctor/blog-details/${el._id}`} component={Link}>
                        {el.title}
                      </Link>
                    </h3>
                    <p>{el.description.substr(0,195)}<b style={{fontSize : "15px"}}>.&nbsp;.&nbsp;.</b></p>
                    <Link
                      className="read-more"
                      to={`/doctor/blog-details/${el._id}`}
                      component={Link}
                    >
                      <i className="fa fa-long-arrow-right" /> Read More
                    </Link>

                    <div className="blog-info clearfix">
                      <div className="post-left">
                        <ul>
                          <li>
                            <a href="#.">
                              <i className="fa fa-calendar" />{" "}
                              {dayjs(`${el.dateCreation}`).format("DD/MM/YYYY")}{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="post-right">
                        <a href="#.">
                          <i className="fa fa-heart-o" />
                          21
                        </a>{" "}
                        <a href="#.">
                          <i className="fa fa-eye" />8
                        </a>{" "}
                        <a href="#.">
                          <i className="fa fa-comment-o" />
                          17
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          ;
        </div> : null }
      


        <div className="row">
          {searchR.map((el, index) => {
            console.log(el);
            return (
              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="dropdown profile-action ">
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
                      to={`/doctor/edit-blog/${el._id}`}
                      component={Link}
                    >
                      <i className="fa fa-pencil m-r-5" /> Edit
                    </Link>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#delete_doctor"
                      onClick={() => {
                        deletehandler(el._id);
                      }}
                    >
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <div className="blog grid-blog">
                  <div className="blog-image">
                    <Link
                      className="dropdown-item"
                      to={`/doctor/blog-details/${el._id}`}
                      component={Link}
                    >
                      <img
                        className="img-fluid"
                        src={el.picture}
                        alt
                      />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <h3 className="blog-title">
                      <Link to={`/doctor/blog-details/${el._id}`} component={Link}>
                        {el.title}
                      </Link>
                    </h3>
                    <p>{el.description}</p>
                    <Link
                      className="read-more"
                      to={`/doctor/blog-details/${el._id}`}
                      component={Link}
                    >
                      <i className="fa fa-long-arrow-right" /> Read More
                    </Link>

                    <div className="blog-info clearfix">
                      <div className="post-left">
                        <ul>
                          <li>
                            <a href="#.">
                              <i className="fa fa-calendar" />{" "}
                              {dayjs(`${el.dateCreation}`).format("DD/MM/YYYY")}{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="post-right">
                        <a href="#.">
                          <i className="fa fa-heart-o" />
                          21
                        </a>{" "}
                        <a href="#.">
                          <i className="fa fa-eye" />8
                        </a>{" "}
                        <a href="#.">
                          <i className="fa fa-comment-o" />
                          17
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          ;
       </div>

       <div className="row">
          {filtreR.map((el, index) => {
            console.log(el);
            return (
              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="dropdown profile-action ">
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
                      to={`/doctor/edit-blog/${el._id}`}
                      component={Link}
                    >
                      <i className="fa fa-pencil m-r-5" /> Edit
                    </Link>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#delete_doctor"
                      onClick={() => {
                        deletehandler(el._id);
                      }}
                    >
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <div className="blog grid-blog">
                  <div className="blog-image">
                    <Link
                      className="dropdown-item"
                      to={`/doctor/blog-details/${el._id}`}
                      component={Link}
                    >
                      <img
                        className="img-fluid"
                        src={el.picture}
                        alt
                      />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <h3 className="blog-title">
                      <Link to={`/doctor/blog-details/${el._id}`} component={Link}>
                        {el.title}
                      </Link>
                    </h3>
                    <p>{el.description}</p>
                    <Link
                      className="read-more"
                      to={`/doctor/blog-details/${el._id}`}
                      component={Link}
                    >
                      <i className="fa fa-long-arrow-right" /> Read More
                    </Link>

                    <div className="blog-info clearfix">
                      <div className="post-left">
                        <ul>
                          <li>
                            <a href="#.">
                              <i className="fa fa-calendar" />{" "}
                              {dayjs(`${el.dateCreation}`).format("DD/MM/YYYY")}{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="post-right">
                        <a href="#.">
                          <i className="fa fa-heart-o" />
                          21
                        </a>{" "}
                        <a href="#.">
                          <i className="fa fa-eye" />8
                        </a>{" "}
                        <a href="#.">
                          <i className="fa fa-comment-o" />
                          17
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          ;
       </div>
   </div>
  );
}

export default Blogs;
