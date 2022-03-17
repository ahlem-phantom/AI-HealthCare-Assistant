import Background1 from "../../img/bg_1.jpg"
import Background2 from "../../img/bg_2.jpg"
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'animate.css';
function Section1 (){
return (
<section >
<OwlCarousel  items={1} loop={true}  autoplay ={true} autoplayTimeout={5000} className="home-slider ">  
      <div class="slider-item" style={{backgroundImage: "url(" + Background1 + ")"}}>
        <div class="overlay"></div>
        <div class="container">
          <div class="row slider-text align-items-center" data-scrollax-parent="true">
            <div class="col-md-6 col-sm-12 ftco-animate " data-scrollax=" properties: { translateY: '70%' }">
              <h1 class="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Modern Dentistry in a Calm and Relaxed Environment</h1>
              <p class="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><a href="#" class="btn btn-primary px-4 py-3">Make an Appointment</a></p>
            </div>
          </div>
        </div>
      </div>

      <div class="slider-item" style={{backgroundImage:  "url(" + Background2 + ")"}}>
        <div class="overlay"></div>
        <div class="container">
          <div class="row slider-text align-items-center" data-scrollax-parent="true">
            <div class="col-md-6 col-sm-12 ftco-animate " data-scrollax=" properties: { translateY: '70%' }">
              <h1 class="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Modern Achieve Your Desired Perfect Smile</h1>
              <p class="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <p><a href="#" class="btn btn-primary px-4 py-3">Make an Appointment</a></p>
            </div>
          </div>
        </div>
      </div>
      </OwlCarousel>
    </section>
 
);
}
export default Section1;