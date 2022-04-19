import Navbar from './navbar';
function Header() {
    return (
        <div>

<section className="home-slider owl-carousel">
  <div className="slider-item bread-item" style={{backgroundImage: 'url("images/bg_1.jpg")'}} data-stellar-background-ratio="0.5">
    <div className="overlay" />
    <div className="container" data-scrollax-parent="true">
      <div className="row slider-text align-items-end">
        <div className="col-md-7 col-sm-12 ftco-animate mb-5">
          <p className="breadcrumbs" data-scrollax=" properties: { translateY: '70%', opacity: 1.6}"><span className="mr-2"><a href="index.html">Home</a></span> <span>Services</span></p>
          <h1 className="mb-3" data-scrollax=" properties: { translateY: '70%', opacity: .9}">Your Health In One Click</h1>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  );
}
export default Navbar;