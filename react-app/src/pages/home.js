import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useEffect } from 'react';
import Categories from './Categories';
import About from './about';
import Problems from './Problem';
import team1 from '../assets/ahlem.jpg';
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
            <h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">NearestDoctor</h1>
            <p className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">AI Healthcare Assistant that provides medical services to patients and doctors using chatbots to interact with them. It uses blockchain for storing medical reports and machine learning algorithms for illness detection and patient satisfaction prediction.</p>
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
            <h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">NearestDoctor</h1>
            <p className="mb-4">Your health in one click.</p>
            <p><a href="#" className="btn btn-primary px-4 py-3">Make an Appointment</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>
   <About />
  <Categories />
  <Problems />

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


  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-3">
        <div className="col-md-7 text-center heading-section ftco-animate">
          <h2 className="mb-2">Latest Blog</h2>
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