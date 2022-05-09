import { Link } from "react-router-dom";
import "./LandingPage.css";

// assets imports
import landingPageBg from "../assets/bg_1.jpg";

const LandingPage = () => {
  return (
    <div className="landingPage__container">
      <div className="landingPage__rowContainer row">
        <div className="landingPage__bgContainer col-lg-8 col-md-7 col-sm-6">
          <img src={landingPageBg} alt="Background image" />
        </div>
        <div className="landingPage__bgInfoContainer col-lg-4 col-md-5 col-sm-6 d-flex justify-content-center align-items-center">
          <div className="landingPage__bgInfo d-flex flex-column  justify-content-center">
            <div className="landingPage__smallPHeading">
              <p>Reliabe and Accessible to all</p>
            </div>
            <div className="landingPage__heading">NearestDoctor</div>
            <div className="landingPage__subHeading">
              <p>X-RAY Results at Home</p>
            </div>
            <div className="landingPage__checkBtn">
                <Link to="/upload" className="landingPage__checkBtnLink">Check your X-ray</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
