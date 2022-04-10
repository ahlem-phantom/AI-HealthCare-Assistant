
function Header(){
return (
<section id="home" className="home-slider owl-carousel">
  <div className="slider-item" style={{backgroundImage: 'url("assets/images/bg_1.jpg")'}}>
    <div className="overlay" />
    <div className="container">
      <div className="row slider-text align-items-center" data-scrollax-parent="true">
        <div className="col-md-6 col-sm-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
          <h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Your Health In One Click</h1>
          <p className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><a href="name" className="btn btn-primary px-4 py-3">Make an Appointment</a></p>
        </div>
      </div>
    </div>
  </div>
  <div className="slider-item" style={{backgroundImage: 'url("assets/images/bg_2.jpg")'}}>
    <div className="overlay" />
    <div className="container">
      <div className="row slider-text align-items-center" data-scrollax-parent="true">
        <div className="col-md-6 col-sm-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
          <h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Modern Achieve Your Desired Perfect Smile</h1>
          <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          <p><a href="name" className="btn btn-primary px-4 py-3">Make an Appointment</a></p>
        </div>
      </div>
    </div>
  </div>
</section>

 
);
}
export default Header;