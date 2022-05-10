import MedicalRecord from "../../components/RecordComponents/MedicalRecord";
import Prescription from "../../components/RecordComponents/Prescription";
import Allergie from "../../components/RecordComponents/Allergie";
import Medication from "../../components/RecordComponents/Medication";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { jsPDF } from "jspdf";
import 'jspdf-autotable';
const Record = () => {
  const { id } = useParams();
  const [record, setRecord] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getRecords = async () => {
      const res = await axios(`http://localhost:8080/records/${id}`);
      console.log(res.data);
      setRecord(res.data);

    };
    const getUser = async () => {
      const res = await axios(`http://localhost:8080/users/user/${id}`);
      console.log(res.data);
      setUser(res.data);

    };
    getRecords();
    getUser();
  }, []);

  console.log(user);
  const generatePdf = () => {
    let data = [];


    record[0].ancienProb.forEach((element) => {
      data.push([element.probleme, element.date])
    })

    let data1 = [];


    record[0].probActive.forEach((element) => {
      data1.push([element.probleme, element.date])
    })
    let data2 = [];


    record[0].allergie.forEach((element) => {
      data2.push([element.allergie])
    })
    const a = 5;

    const doc = new jsPDF('landscape', 'px', 'a4', 'false');
    doc.setTextColor('#009efb');
    doc.text(250, 20, user.firstname + '\'s Record');
    doc.setTextColor('gray');
    doc.text(150, 80, 'Old Problems:');
    doc.autoTable({
      startY: 100,
      head: [['Problem', 'Date']],
      body: data,
      styles: {
        overflow: 'linebreak',
        fontSize: 12,
        valign: 'middle',
        cellWidth: 200,
        halign: "center"
      }, margin: { top: 10, left: 100 },

      headerStyles: {
        lineWidth: 1,
        lineColor: [0, 0, 0],
        fillColor: [0, 0, 0],
        textColor: "#009efb",
        fontStyle: "italic",

      }

    })
    doc.setTextColor('gray');
    doc.text(150, 160, 'Active Problems:');
    doc.autoTable({
      startY: 180,
      head: [['Problem', 'Since']],
      body: data1,
      styles: {
        overflow: 'linebreak',
        fontSize: 12,
        valign: 'middle',
        cellWidth: 200,
        halign: "center",
      }, margin: { top: 200, left: 100 },




      headerStyles: {
        lineWidth: 1,
        lineColor: [0, 0, 0],
        fillColor: [0, 0, 0],
        textColor: "#009efb",
        fontStyle: "italic",

      }
    })
    doc.setTextColor('gray');
    doc.text(150, 240, 'Allergies:');
    doc.autoTable({
      startY: 260,
      head: [['Allergic To']],
      body: data2,
      styles: {
        overflow: 'linebreak',
        fontSize: 12,
        valign: 'middle',
        cellWidth: 200,
        halign: "center",
      }, margin: { top: 200, left: 200 },




      headerStyles: {
        lineWidth: 1,
        lineColor: [0, 0, 0],
        fillColor: [0, 0, 0],
        textColor: "#009efb",
        fontStyle: "italic",

      }
    })
    doc.save('record.pdf')

  };
  return (

    <>
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
                          src={user.picture}
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
                            {user.firstname}&nbsp;{user.lastname}
                          </h3>
                          <small className="text-muted"></small>
                          <div className="staff-msg">

                          </div>
                        </div>
                      </div>
                      <div className="col-md-7">

                        <ul className="personal-info">
                          <li>
                            <span className="title">Phone:</span>
                            <span className="text">
                              <a href="#">{user.phone}</a>
                            </span>
                          </li>
                          <li>
                            <span className="title">Email:</span>
                            <span className="text">
                              <a href="#">{user.email}</a>
                            </span>
                          </li>
                          <li>
                            <span className="title">Birthday:</span>
                            <span className="text">{user.birthdate}</span>
                          </li>
                          <li>
                            <span className="title">Address:</span>
                            <span className="text">
                              {user.street}
                            </span>
                          </li>
                          <li>
                            <span className="title">Gender:</span>
                            <span className="text">{user.gender}</span>
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
        <button className="btn btn-primary" style={{ backgroundColor: "red", marginLeft: "40%", marginTop: "10px" }} onClick={generatePdf}>Download as pdf</button>

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
              to={{ pathname: `prescription/${id}` }}
              style={{ color: "white" }}
            >
              Prescriptions
            </Link>
          </li>
          <li class="nav-item" style={{ backgroundColor: "gray" }}>
            <Link
              class="nav-link hov"
              to={{ pathname: `/doctor/record/allergies/${id}` }}
              style={{ color: "white" }}
            >
              Allergies
            </Link>
          </li>
          <li class="nav-item" style={{ backgroundColor: "gray" }}>
            <Link
              to={{ pathname: `/doctor/record/medication/${id}` }}
              class="nav-link hov"
              style={{ color: "white" }}
            >
              Medications
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Record;
