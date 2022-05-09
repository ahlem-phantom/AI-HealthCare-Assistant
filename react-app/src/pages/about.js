import "./About.css";

// assets imports
import aboutImg from "../assets/about1.jpg";

const About = () => {
  return (
    <div className="about__container d-flex flex-column align-items-center justify-content-center">
      <div className="about__sectionHeading d-flex flex-column align-items-center justify-content-cente">
        <p className="my-0">What We Do ?</p>
        <div className="about__borderDiv"></div>
      </div>
      <div className="about__containerDiv">
        <div className="about__infoContainer">
          <div className="about__infoTextHeading"><p>About NearestDoctor</p></div>
          <div className="about__infoTextPara">
            <p>
            "NearestDoctor" is an AI healthcare assistant that uses AI and machine learning algorithms to improve patients' experience by providing them professional medical assistance. Patients will be able to find the nearest doctor to their location, ask about illness symptoms, and schedule an appointment with a doctor based on their availability. Immediate responses will be provided by a chatbot to redeem the needs of our patients using Artificial Intelligence techniques for decision making. Also, our solution offers a very unique concept with developing patient records using Blockchain. 
            </p>
          </div>
        </div>
        <div className="about__imgContainer text-center">
            <div className="about__imgDiv">
                <img src={aboutImg} alt="about Image" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
