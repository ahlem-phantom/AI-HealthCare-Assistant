import MedicalRecord from "../../components/RecordComponents/MedicalRecord";
import Prescription from "../../components/RecordComponents/Prescription";
import Allergie from "../../components/RecordComponents/Allergie";
import Medication from "../../components/RecordComponents/Medication";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Record = () => {
  const { id } = useParams();
  const [record, setRecord] = useState([]);

  useEffect(() => {
    const getRecords = async () => {
      const res = await axios(`http://localhost:8080/records/${id}`);
      console.log(res.data);
      setRecord(res.data);
    };
    getRecords();
  }, []);
  return (
    <div className="page-wrapper">
    <div className="content">
      <div className="offset-md-2 col-md-8 pt-5">
        <div class="col-sm-7 col-6">
          <h4 class="page-title mt-2">Patient's record</h4>
        </div>
        <div className="card-box profile-header">
          <div className="row">
            <div className="col-md-12">
              <div className="profile-view">
                <div className="profile-img-wrap">
                  <div className="profile-img">
                    <a href="#">
                      <img
                        className="avatar"
                        src="assets/img/doctor-03.jpg"
                        alt
                      />
                    </a>
                  </div>
                </div>
                <div className="profile-basic">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="profile-info-left">
                        <h3 className="user-name m-t-0 mb-0">
                          Cristina Groves
                        </h3>
                        <small className="text-muted">Gynecologist</small>
                        <div className="staff-id">Employee ID : DR-0001</div>
                        <div className="staff-msg">
                          <a href="chat.html" className="btn btn-primary">
                            Send Message
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <ul className="personal-info">
                        <li>
                          <span className="title">Phone:</span>
                          <span className="text">
                            <a href="#">770-889-6484</a>
                          </span>
                        </li>
                        <li>
                          <span className="title">Email:</span>
                          <span className="text">
                            <a href="#">cristinagroves@example.com</a>
                          </span>
                        </li>
                        <li>
                          <span className="title">Birthday:</span>
                          <span className="text">3rd March</span>
                        </li>
                        <li>
                          <span className="title">Address:</span>
                          <span className="text">
                            714 Burwell Heights Road, Bridge City, TX, 77611
                          </span>
                        </li>
                        <li>
                          <span className="title">Gender:</span>
                          <span className="text">Female</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul class="nav mt-5" style={{ marginLeft: "30%" }}>
        <li class="nav-item " style={{ backgroundColor: "gray" }}>
          {/* <a
            className="nav-link active"
            style={{ color: "white" }}
            onClick={() => {
              return <MedicalRecord Record={record} />;
            }}
          >
            Medical records
          </a> */}

          <Link
            class="nav-link active hov"
            aria-current="page"
            to={{
              pathname: `/doctor/record/medicalrecord/${id}`,
              state: { record: record },
            }}
            style={{ color: "white" }}
          >
            Medical records
          </Link>
        </li>
        <li class="nav-item" style={{ backgroundColor: "gray" }}>
          <Link
            class="nav-link hov"
            to="/doctor/record/prescription"
            style={{ color: "white" }}
          >
            Prescriptions
          </Link>
        </li>
        <li class="nav-item" style={{ backgroundColor: "gray" }}>
          <Link
            class="nav-link hov"
            to="/doctor/record/allergies"
            style={{ color: "white" }}
          >
            Allergies
          </Link>
        </li>
        <li class="nav-item" style={{ backgroundColor: "gray" }}>
          <Link
            to="/doctor/record/medication"
            class="nav-link hov"
            style={{ color: "white" }}
          >
            Medications
          </Link>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Record;
