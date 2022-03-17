import Background1 from "../../img/bg_1.jpg"

function Section5() {

    return (
<section className=" img" id="section-counter" style={{backgroundImage: "url(" + Background1 + ")"}} data-stellar-background-ratio="0.5">
  <div className="container">
    <div className="row d-flex align-items-center">
      <div className="col-md-3 aside-stretch py-5">
        <div className=" heading-section heading-section-white  pr-md-4">
          <h2 className="mb-3">Achievements</h2>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>
      </div>
      <div className="col-md-9 py-5 pl-md-5">
        <div className="row">
          <div className="col-md-3 d-flex justify-content-center counter-wrap ">
            <div className="block-18">
              <div className="text">
                <strong className="number" data-number={14}>0</strong>
                <span>Years of Experience</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex justify-content-center counter-wrap ">
            <div className="block-18">
              <div className="text">
                <strong className="number" data-number={4500}>0</strong>
                <span>Qualified Dentist</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex justify-content-center counter-wrap ">
            <div className="block-18">
              <div className="text">
                <strong className="number" data-number={4200}>0</strong>
                <span>Happy Smiling Customer</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex justify-content-center counter-wrap ">
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

    );
}
export default Section5;