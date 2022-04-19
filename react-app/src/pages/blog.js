/* eslint-disable react/style-prop-object */
import Footer from '../components/footer';
import { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import axios from 'axios';
function Blog() {

  const loadScript = (src) => {
    return new Promise(function (resolve, reject) {
      var script = document.createElement('script')
      script.src = src
      script.addEventListener('load', function () {
        resolve()
      })
      script.addEventListener('error', function (e) {
        reject(e)
      })
      document.body.appendChild(script)
      document.body.removeChild(script)
    })
  }
  const [blogs, setBlog] = useState([]);

   useEffect(() => {
   loadScript(`${process.env.PUBLIC_URL}js/main.js`)
   const getBlogs = async () => {
    const res = await axios('http://localhost:8080/blog');
    console.log(res.data);
    setBlog(res.data);
  };
getBlogs();
}, [] )


    return (
<div>
  <Navbar />
<section className="home-slider owl-carousel">
  <div className="slider-item bread-item" style={{backgroundImage: 'url("images/bg_1.jpg")'}} data-stellar-background-ratio="0.5">
    <div className="overlay" />
    <div className="container" data-scrollax-parent="true">
      <div className="row slider-text align-items-end">
        <div className="col-md-7 col-sm-12 ftco-animate mb-5">
          <p className="breadcrumbs" data-scrollax=" properties: { translateY: '70%', opacity: 1.6}"><span className="mr-2"><a href="index.html">Home</a></span> <span>Blog</span></p>
          <h1 className="mb-3 navbar-brand" data-scrollax=" properties: { translateY: '70%', opacity: .9}">Read Our Blogs </h1>

        </div>
      </div>
    </div>
  </div>
</section>

<section className="ftco-section">
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <div className="row">
          <div className="col-md-12 ftco-animate">
            <div className="blog-entry">
              <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_1.jpg")'}}>
              </a>
              <div className="text d-flex py-4">
                <div className="meta mb-3">
                  <div><a href="#">Sep. 20, 2018</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                </div>
                <div className="desc pl-sm-3 pl-md-5">
                  <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  <p><a href="blog-single.html" className="btn btn-primary btn-outline-primary">Read more</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 ftco-animate">
            <div className="blog-entry" data-aos-delay={100}>
              <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_2.jpg")'}}>
              </a>
              <div className="text d-flex py-4">
                <div className="meta mb-3">
                  <div><a href="#">Sep. 20, 2018</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                </div>
                <div className="desc pl-sm-3 pl-md-5">
                  <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  <p><a href="blog-single.html" className="btn btn-primary btn-outline-primary">Read more</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 ftco-animate">
            <div className="blog-entry" data-aos-delay={200}>
              <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_3.jpg")'}}>
              </a>
              <div className="text d-flex py-4">
                <div className="meta mb-3">
                  <div><a href="#">Sep. 20, 2018</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                </div>
                <div className="desc pl-sm-3 pl-md-5">
                  <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  <p><a href="blog-single.html" className="btn btn-primary btn-outline-primary">Read more</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 ftco-animate">
            <div className="blog-entry">
              <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_4.jpg")'}}>
              </a>
              <div className="text d-flex py-4">
                <div className="meta mb-3">
                  <div><a href="#">Sep. 20, 2018</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                </div>
                <div className="desc pl-sm-3 pl-md-5">
                  <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  <p><a href="blog-single.html" className="btn btn-primary btn-outline-primary">Read more</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 ftco-animate">
            <div className="blog-entry" data-aos-delay={100}>
              <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_5.jpg")'}}>
              </a>
              <div className="text d-flex py-4">
                <div className="meta mb-3">
                  <div><a href="#">Sep. 20, 2018</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                </div>
                <div className="desc pl-sm-3 pl-md-5">
                  <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  <p><a href="blog-single.html" className="btn btn-primary btn-outline-primary">Read more</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 ftco-animate">
            <div className="blog-entry" data-aos-delay={200}>
              <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_6.jpg")'}}>
              </a>
              <div className="text d-flex py-4">
                <div className="meta mb-3">
                  <div><a href="#">Sep. 20, 2018</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                </div>
                <div className="desc pl-sm-3 pl-md-5">
                  <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  <p><a href="blog-single.html" className="btn btn-primary btn-outline-primary">Read more</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <div className="block-27">
              <ul>
                <li><a href="#">&lt;</a></li>
                <li className="active"><span>1</span></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">&gt;</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div> {/* END: col-md-8 */}
      <div className="col-md-4 sidebar ftco-animate">
        <div className="sidebar-box">
          <form action="#" className="search-form">
            <div className="form-group">
              <span className="icon fa fa-search" />
              <input type="text" className="form-control" placeholder="Type a keyword and hit enter" />
            </div>
          </form>
        </div>
        <div className="sidebar-box ftco-animate">
          <div className="categories">
            <h3>Categories</h3>
            <li><a href="#">Food <span>(12)</span></a></li>
            <li><a href="#">Dish <span>(22)</span></a></li>
            <li><a href="#">Desserts <span>(37)</span></a></li>
            <li><a href="#">Drinks <span>(42)</span></a></li>
            <li><a href="#">Ocassion <span>(14)</span></a></li>
          </div>
        </div>
        <div className="sidebar-box ftco-animate">
          <h3>Recent Blog</h3>
          <div className="block-21 mb-4 d-flex">
            <a className="blog-img mr-4" style={{backgroundImage: 'url(images/image_1.jpg)'}} />
            <div className="text">
              <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
              <div className="meta">
                <div><a href="#"><span className="icon-calendar" /> July 12, 2018</a></div>
                <div><a href="#"><span className="icon-person" /> Admin</a></div>
                <div><a href="#"><span className="icon-chat" /> 19</a></div>
              </div>
            </div>
          </div>
          <div className="block-21 mb-4 d-flex">
            <a className="blog-img mr-4" style={{backgroundImage: 'url(images/image_2.jpg)'}} />
            <div className="text">
              <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
              <div className="meta">
                <div><a href="#"><span className="icon-calendar" /> July 12, 2018</a></div>
                <div><a href="#"><span className="icon-person" /> Admin</a></div>
                <div><a href="#"><span className="icon-chat" /> 19</a></div>
              </div>
            </div>
          </div>
          <div className="block-21 mb-4 d-flex">
            <a className="blog-img mr-4" style={{backgroundImage: 'url(images/image_3.jpg)'}} />
            <div className="text">
              <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
              <div className="meta">
                <div><a href="#"><span className="icon-calendar" /> July 12, 2018</a></div>
                <div><a href="#"><span className="icon-person" /> Admin</a></div>
                <div><a href="#"><span className="icon-chat" /> 19</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-box ftco-animate">
          <h3>Tag Cloud</h3>
          <div className="tagcloud">
            <a href="#" className="tag-cloud-link">dish</a>
            <a href="#" className="tag-cloud-link">menu</a>
            <a href="#" className="tag-cloud-link">food</a>
            <a href="#" className="tag-cloud-link">sweet</a>
            <a href="#" className="tag-cloud-link">tasty</a>
            <a href="#" className="tag-cloud-link">delicious</a>
            <a href="#" className="tag-cloud-link">desserts</a>
            <a href="#" className="tag-cloud-link">drinks</a>
          </div>
        </div>
        <div className="sidebar-box ftco-animate">
          <h3>Paragraph</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
        </div>
      </div>
    </div>
  </div>
</section>



  <Footer />
</div>

  );
}
export default Blog;