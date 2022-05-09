import "./Problem.css";
import Problem1 from "../assets/problem1.jpg";
import Problem2 from "../assets/problem2.png";
import Problem3 from "../assets/problem3.jpeg";
import Problem7 from "../assets/problem7.jpeg";
import Problem4 from "../assets/problem4.png"
import Problem5 from "../assets/problem5.png"
import Problem6 from "../assets/problem6.png"

const Problem = () => {
  return (
    <div className="problem__container">
      <div className="problem__sectionHeading d-flex flex-column align-items-center justify-content-cente">
        <p className="my-0">What We Solve ?</p>
        <div className="problem__borderDiv"></div>
      </div>
      <div className="problem__infoTextHeading d-flex justify-content-center"><p>Features</p></div>
      <div className="problem__containerDiv">
        <div className="problem__cardsDiv  card" style={{ width: "22rem" }}>
          <img src={Problem1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center fs-3" style={{fontSize :"27px", fontweight : "bold" }}>Early Detection</h5>
            <p className="card-text text-center">
              Early and quick detection with recommendations, precautions and best practices.
            </p>
          </div>
        </div>

        <div className="problem__cardsDiv  card" style={{ width: "22rem" }}>
          <img src={Problem6} className="card-img-top" alt="..." height={"200px"}/>
          <div className="card-body">
            <h5 className="card-title text-center fs-3"style={{fontSize :"27px", fontweight : "bold" }}>User History</h5>
            <p className="card-text text-center">
              Access all your previous Chest X-ray test reports on the website.
            </p>
          </div>
        </div>

        <div className="problem__cardsDiv  card" style={{ width: "22rem" }}>
          <img src={Problem3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center fs-3" style={{fontSize :"27px", fontweight : "bold" }}>Ease of Access</h5>
            <p className="card-text text-center">
              Readily available to any patient in the world with a click of a button.
            </p>
          </div>
        </div>


        <div className="problem__cardsDiv  card" style={{ width: "22rem" }}>
          <img src={Problem4} className="card-img-top" alt="..." height="200px" />
          <div className="card-body">
            <h5 className="card-title text-center fs-4"style={{fontSize :"24.2px", fontweight : "bold" }}><br/>Decentralised and Secure</h5>
            <p className="card-text text-center">
            Completely Immutable and Enduring as stored on Blockchain.
            </p>
          </div>
        </div>


        <div className="problem__cardsDiv  card" style={{ width: "22rem" }}>
          <img src={Problem7} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center fs-3"style={{fontSize :"27px", fontweight : "bold" }}>Further Help</h5>
            <p className="card-text text-center">
              Precautions and safety measures recommended by best institutions.
            </p>
          </div>
        </div>


        <div className="problem__cardsDiv  card" style={{ width: "22rem" }}>
          <img src={Problem5} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title text-center fs-4"style={{fontSize :"27px", fontweight : "bold" }}>Multilayered Model</h5>
            <p className="card-text text-center">
            Multilayered Model for improving accuracy minimizing faults.
            </p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Problem;
