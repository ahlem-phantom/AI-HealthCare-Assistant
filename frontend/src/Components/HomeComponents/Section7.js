import p1 from "../../img/person_1.jpg"
import p2 from "../../img/person_2.jpg"
import p3 from "../../img/person_3.jpg"
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'animate.css';
function Section7 () {

    return(
<section className="ftco-section testimony-section bg-light">
  <div className="container">
    <div className="row justify-content-center mb-5 pb-3">
      <div className="col-md-7 text-center heading-section ">
        <h2 className="mb-2">Testimony</h2>
        <span className="subheading">Our Happy Customer Says</span>
      </div>
    </div>
    <div className="row justify-content-center ">
      <div className="col-md-8">
        <div className="carousel-testimony  ftco-owl"> {/* owl-carousel*/}
        <OwlCarousel  items={1} dots={true}	 dotsEach={true} loop={true}  className="home-slider ">
          <div className="item">
            <div className="testimony-wrap p-4 pb-5">
              <div className="user-img mb-5" style={{backgroundImage: "url(" + p1 + ")"}}>
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
              <div className="user-img mb-5" style={{backgroundImage: "url(" + p2 + ")"}}>
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
              <div className="user-img mb-5" style={{backgroundImage: "url(" + p3 + ")"}}>
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
              <div className="user-img mb-5" style={{backgroundImage: "url(" + p1 + ")"}}>
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
              <div className="user-img mb-5" style={{backgroundImage: "url(" + p1 + ")"}}>
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
          </OwlCarousel>
        </div>
      </div>
    </div>
  </div>
</section>

    );
}
export default Section7;