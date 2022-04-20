import React from 'react';
import { Link } from 'react-router-dom';
function Blogs() {
    return (
        <div >
  <div className="content">
    <div className="row">
      <div className="col-sm-8 col-4">
        <h4 className="page-title">Blog</h4>
      </div>
      <div className="col-sm-4 col-8 text-right m-b-30">
        <Link className="btn btn-primary btn-rounded float-right"
                component={Link}
                exact
                to="add-blog"
                underline="hover"
              >
               <i className="fa fa-plus" /> <span>Add Blog</span> 
        </Link> 
      </div>

    </div>
    <div className="row">
      <div className="col-sm-6 col-md-6 col-lg-4">
        <div className="blog grid-blog">
          <div className="blog-image">
            <a href="blog-details.html"><img className="img-fluid" src="assets/img/blog/blog-01.jpg" alt /></a>
          </div>
          <div className="blog-content">
            <h3 className="blog-title"><a href="blog-details.html">Do You Know the ABCs of Health Care?</a></h3>
            <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor incididunt ut labore etmis dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris.</p>
            <a href="blog-details.html" className="read-more"><i className="fa fa-long-arrow-right" /> Read More</a>
            <div className="blog-info clearfix">
              <div className="post-left">
                <ul>
                  <li><a href="#."><i className="fa fa-calendar" /> <span>December 6, 2017</span></a></li>
                </ul>
              </div>
              <div className="post-right"><a href="#."><i className="fa fa-heart-o" />21</a> <a href="#."><i className="fa fa-eye" />8</a> <a href="#."><i className="fa fa-comment-o" />17</a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-6 col-lg-4">
        <div className="blog grid-blog">
          <div className="blog-image">
            <a href="blog-details.html"><img className="img-fluid" src="assets/img/blog/blog-02.jpg" alt /></a>
          </div>
          <div className="blog-content">
            <h3 className="blog-title"><a href="blog-details.html">Do You Know the ABCs of Health Care?</a></h3>
            <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor incididunt ut labore etmis dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris.</p>
            <a href="blog-details.html" className="read-more"><i className="fa fa-long-arrow-right" /> Read More</a>
            <div className="blog-info clearfix">
              <div className="post-left">
                <ul>
                  <li><a href="#."><i className="fa fa-calendar" /> <span>December 6, 2017</span></a></li>
                </ul>
              </div>
              <div className="post-right"><a href="#."><i className="fa fa-heart-o" />21</a> <a href="#."><i className="fa fa-eye" />8</a> <a href="#."><i className="fa fa-comment-o" />17</a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-6 col-lg-4">
        <div className="blog grid-blog">
          <div className="blog-image">
            <a href="blog-details.html"><img className="img-fluid" src="assets/img/blog/blog-03.jpg" alt /></a>
          </div>
          <div className="blog-content">
            <h3 className="blog-title"><a href="blog-details.html">Do You Know the ABCs of Health Care?</a></h3>
            <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor incididunt ut labore etmis dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris.</p>
            <a href="blog-details.html" className="read-more"><i className="fa fa-long-arrow-right" /> Read More</a>
            <div className="blog-info clearfix">
              <div className="post-left">
                <ul>
                  <li><a href="#."><i className="fa fa-calendar" /> <span>December 6, 2017</span></a></li>
                </ul>
              </div>
              <div className="post-right"><a href="#."><i className="fa fa-heart-o" />21</a> <a href="#."><i className="fa fa-eye" />8</a> <a href="#."><i className="fa fa-comment-o" />17</a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-6 col-lg-4">
        <div className="blog grid-blog">
          <div className="blog-image">
            <a href="blog-details.html"><img className="img-fluid" src="assets/img/blog/blog-04.jpg" alt /></a>
          </div>
          <div className="blog-content">
            <h3 className="blog-title"><a href="blog-details.html">Do You Know the ABCs of Health Care?</a></h3>
            <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor incididunt ut labore etmis dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris.</p>
            <a href="blog-details.html" className="read-more"><i className="fa fa-long-arrow-right" /> Read More</a>
            <div className="blog-info clearfix">
              <div className="post-left">
                <ul>
                  <li><a href="#."><i className="fa fa-calendar" /> <span>December 6, 2017</span></a></li>
                </ul>
              </div>
              <div className="post-right"><a href="#."><i className="fa fa-heart-o" />21</a> <a href="#."><i className="fa fa-eye" />8</a> <a href="#."><i className="fa fa-comment-o" />17</a></div>
            </div>
          </div>
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

    );
}

export default Blogs;