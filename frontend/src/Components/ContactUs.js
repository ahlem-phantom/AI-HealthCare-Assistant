import Background1 from "../img/bg_1.jpg"

function ContactUs(){

    return(
        <div> 
  <section className="home-slider ">
    <div className="slider-item bread-item" style={{backgroundImage: "url(" + Background1 + ")"}} data-stellar-background-ratio="0.5">
      <div className="overlay" />
      <div className="container" data-scrollax-parent="true">
        <div className="row slider-text align-items-end">
          <div className="col-md-7 col-sm-12 ftco-animate mb-5">
            <p className="breadcrumbs" data-scrollax=" properties: { translateY: '70%', opacity: 1.6}"><span className="mr-2"><a href="index.html">Home</a></span> <span>Blog</span></p>
            <h1 className="mb-3" data-scrollax=" properties: { translateY: '70%', opacity: .9}">Contact Us</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section contact-section ftco-degree-bg">
    <div className="container">
      <div className="row d-flex mb-5 contact-info">
        <div className="col-md-12 mb-4">
          <h2 className="h4">Contact Information</h2>
        </div>
        <div className="w-100" />
        <div className="col-md-3">
          <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
        </div>
        <div className="col-md-3">
          <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
        </div>
        <div className="col-md-3">
          <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
        </div>
        <div className="col-md-3">
          <p><span>Website</span> <a href="#">yoursite.com</a></p>
        </div>
      </div>
      <div className="row block-9">
        <div className="col-md-6 pr-md-5">
          <form action="#">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea name id cols={30} rows={7} className="form-control" placeholder="Message" defaultValue={""} />
            </div>
            <div className="form-group">
              <input type="submit" defaultValue="Send Message" className="btn btn-primary py-3 px-5" />
            </div>
          </form>
        </div>
        <div className="col-md-6" id="map" />
      </div>
    </div>
  </section>
</div>

    );
}
export default ContactUs;