import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useEffect } from 'react';
function Home() {
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
  
   useEffect(() => {
   loadScript(`${process.env.PUBLIC_URL}js/main.js`)
  
    })
    return (
  <div>
      <Navbar/>

  <div>
  {/* END nav */}
  <section className="home-slider owl-carousel">
    <div className="slider-item" style={{backgroundImage: 'url("images/bg_1.jpg")'}}>
      <div className="overlay" />
      <div className="container">
        <div className="row slider-text align-items-center" data-scrollax-parent="true">
          <div className="col-md-6 col-sm-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
            <h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Modern Dentistry in a Calm and Relaxed Environment</h1>
            <p className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><a href="#" className="btn btn-primary px-4 py-3">Make an Appointment</a></p>
          </div>
        </div>
      </div>
    </div>
    <div className="slider-item" style={{backgroundImage: 'url("images/bg_2.jpg")'}}>
      <div className="overlay" />
      <div className="container">
        <div className="row slider-text align-items-center" data-scrollax-parent="true">
          <div className="col-md-6 col-sm-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
            <h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Modern Achieve Your Desired Perfect Smile</h1>
            <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <p><a href="#" className="btn btn-primary px-4 py-3">Make an Appointment</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-services">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-5">
        <div className="col-md-7 text-center heading-section ftco-animate">
          <h2 className="mb-2">What makes us different?</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services d-block text-center">
            <div className="icon d-flex justify-content-center align-items-center">
              <span className="flaticon-tooth-1" />
            </div>
            <div className="media-body p-2 mt-3">
              <h3 className="heading" style={{fontWeight: 'bold',}} >Valid Doctors Identity</h3>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>
          </div>      
        </div>
        <div className="col-md-3 d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services d-block text-center">
            <div className="icon d-flex justify-content-center align-items-center">
              <span className="flaticon-dental-care" />
            </div>
            <div className="media-body p-2 mt-3">
              <h3 className="heading" style={{fontWeight: 'bold',}}>Safe & Secure</h3>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>
          </div>    
        </div>
        <div className="col-md-3 d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services d-block text-center">
            <div className="icon d-flex justify-content-center align-items-center">
              <span className="flaticon-tooth-with-braces" />
            </div>
            <div className="media-body p-2 mt-3">
              <h3 className="heading" style={{fontWeight: 'bold',}}>Variety Of Doctors</h3>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>
          </div>      
        </div>
        <div className="col-md-3 d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services d-block text-center">
            <div className="icon d-flex justify-content-center align-items-center">
              <span className="flaticon-anesthesia" />
            </div>
            <div className="media-body p-2 mt-3">
              <h3 className="heading">Modern Anesthetic</h3>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>
          </div>      
        </div>
      </div>
    </div>
    <div className="container-wrap mt-5">
      <div className="row d-flex no-gutters">
        <div className="col-md-6 img" style={{backgroundImage: 'url(images/about-2.jpg)'}}>
        </div>
        <div className="col-md-6 d-flex">
          <div className="about-wrap">
            <div className="heading-section heading-section-white mb-5 ftco-animate">
              <h2 className="mb-2">Dentacare with a personal touch</h2>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
            <div className="list-services d-flex ftco-animate">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="icon-check2" />
              </div>
              <div className="text">
                <h3>Well Experience Dentist</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
            <div className="list-services d-flex ftco-animate">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="icon-check2" />
              </div>
              <div className="text">
                <h3>High Technology Facilities</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
            <div className="list-services d-flex ftco-animate">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="icon-check2" />
              </div>
              <div className="text">
                <h3>Comfortable Clinics</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-5">
        <div className="col-md-7 text-center heading-section ftco-animate">
          <h2 className="mb-3">Meet Our Experience Dentist</h2>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 d-flex mb-sm-4 ftco-animate">
          <div className="staff">
            <div className="img mb-4" style={{backgroundImage: 'url(images/person_5.jpg)'}} />
            <div className="info text-center">
              <h3><a href="teacher-single.html">Tom Smith</a></h3>
              <span className="position">Dentist</span>
              <div className="text">
                <p>Far far away, behind the word mountains, far from the countries Vokalia</p>
                <ul className="ftco-social">
                  <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
                  <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
                  <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
                  <li className="ftco-animate"><a href="#"><span className="icon-google-plus" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex mb-sm-4 ftco-animate">
          <div className="staff">
            <div className="img mb-4" style={{backgroundImage: 'url(images/person_6.jpg)'}} />
            <div className="info text-center">
              <h3><a href="teacher-single.html">Mark Wilson</a></h3>
              <span className="position">Dentist</span>
              <div className="text">
                <p>Far far away, behind the word mountains, far from the countries Vokalia</p>
                <ul className="ftco-social">
                  <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
                  <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
                  <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
                  <li className="ftco-animate"><a href="#"><span className="icon-google-plus" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex mb-sm-4 ftco-animate">
          <div className="staff">
            <div className="img mb-4" style={{backgroundImage: 'url(images/person_7.jpg)'}} />
            <div className="info text-center">
              <h3><a href="teacher-single.html">Patrick Jacobson</a></h3>
              <span className="position">Dentist</span>
              <div className="text">
                <p>Far far away, behind the word mountains, far from the countries Vokalia</p>
                <ul className="ftco-social">
                  <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
                  <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
                  <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
                  <li className="ftco-animate"><a href="#"><span className="icon-google-plus" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex mb-sm-4 ftco-animate">
          <div className="staff">
            <div className="img mb-4" style={{backgroundImage: 'url(images/person_8.jpg)'}} />
            <div className="info text-center">
              <h3><a href="teacher-single.html">Ivan Dorchsner</a></h3>
              <span className="position">System Analyst</span>
              <div className="text">
                <p>Far far away, behind the word mountains, far from the countries Vokalia</p>
                <ul className="ftco-social">
                  <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
                  <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
                  <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
                  <li className="ftco-animate"><a href="#"><span className="icon-google-plus" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row  mt-5 justify-conten-center">
        <div className="col-md-8 ftco-animate">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi vero accusantium sunt sit aliquam ipsum molestias autem perferendis, incidunt cumque necessitatibus cum amet cupiditate, ut accusamus. Animi, quo. Laboriosam, laborum.</p>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-counter img" id="section-counter" data-stellar-background-ratio="0.5">
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-md-3 aside-stretch py-5">
          <div className=" heading-section heading-section-white ftco-animate pr-md-4">
            <h2 className="mb-3">Achievements</h2>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>
        </div>
        <div className="col-md-9 py-5 pl-md-5">
          <div className="row">
            <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18">
                <div className="text">
                  <strong className="number" data-number={14}>0</strong>
                  <span>Years of Experience</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18">
                <div className="text">
                  <strong className="number" data-number={4500}>0</strong>
                  <span>Qualified Dentist</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18">
                <div className="text">
                  <strong className="number" data-number={4200}>0</strong>
                  <span>Happy Smiling Customer</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18">
                <div className="text">
                  <strong className="number" data-number={320}>0</strong>
                  <span>Patients Per Year</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section className="ftco-section testimony-section bg-light">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-3">
        <div className="col-md-7 text-center heading-section ftco-animate">
          <h2 className="mb-2">Testimony</h2>
          <span className="subheading">Our Happy Customer Says</span>
        </div>
      </div>
      <div className="row justify-content-center ftco-animate">
        <div className="col-md-8">
          <div className="carousel-testimony owl-carousel ftco-owl">
            <div className="item">
              <div className="testimony-wrap p-4 pb-5">
                <div className="user-img mb-5" style={{backgroundImage: 'url(images/person_1.jpg)'}}>
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                </div>
                <div className="text text-center">
                  <p className="mb-5">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                  <p className="name">Dennis Green</p>
                  <span className="position">Marketing Manager</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap p-4 pb-5">
                <div className="user-img mb-5" style={{backgroundImage: 'url(images/person_2.jpg)'}}>
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                </div>
                <div className="text text-center">
                  <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <p className="name">Dennis Green</p>
                  <span className="position">Interface Designer</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap p-4 pb-5">
                <div className="user-img mb-5" style={{backgroundImage: 'url(images/person_3.jpg)'}}>
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                </div>
                <div className="text text-center">
                  <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <p className="name">Dennis Green</p>
                  <span className="position">UI Designer</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap p-4 pb-5">
                <div className="user-img mb-5" style={{backgroundImage: 'url(images/person_1.jpg)'}}>
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                </div>
                <div className="text text-center">
                  <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <p className="name">Dennis Green</p>
                  <span className="position">Web Developer</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap p-4 pb-5">
                <div className="user-img mb-5" style={{backgroundImage: 'url(images/person_1.jpg)'}}>
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                </div>
                <div className="text text-center">
                  <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <p className="name">Dennis Green</p>
                  <span className="position">System Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-3">
        <div className="col-md-7 text-center heading-section ftco-animate">
          <h2 className="mb-2">Latest Blog</h2>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 ftco-animate">
          <div className="blog-entry">
            <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_1.jpg")'}}>
            </a>
            <div className="text d-flex py-4">
              <div className="meta mb-3">
                <div><a href="#">Sep. 20, 2018</a></div>
                <div><a href="#">Admin</a></div>
                <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
              </div>
              <div className="desc pl-3">
                <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 ftco-animate">
          <div className="blog-entry" data-aos-delay={100}>
            <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_2.jpg")'}}>
            </a>
            <div className="text d-flex py-4">
              <div className="meta mb-3">
                <div><a href="#">Sep. 20, 2018</a></div>
                <div><a href="#">Admin</a></div>
                <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
              </div>
              <div className="desc pl-3">
                <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 ftco-animate">
          <div className="blog-entry" data-aos-delay={200}>
            <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_3.jpg")'}}>
            </a>
            <div className="text d-flex py-4">
              <div className="meta mb-3">
                <div><a href="#">Sep. 20, 2018</a></div>
                <div><a href="#">Admin</a></div>
                <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
              </div>
              <div className="desc pl-3">
                <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section-parallax">
    <div className="parallax-img d-flex align-items-center">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
            <h2>Subcribe to our Newsletter</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
            <div className="row d-flex justify-content-center mt-5">
              <div className="col-md-8">
                <form action="#" className="subscribe-form">
                  <div className="form-group d-flex">
                    <input type="text" className="form-control" placeholder="Enter email address" />
                    <input type="submit" defaultValue="Subscribe" className="submit px-3" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
  {/* loader */}
</div>

</div>


    );
}
export default Home;