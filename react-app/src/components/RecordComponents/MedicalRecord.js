import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const MedicalRecord = () => {
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

  localStorage.setItem("record", JSON.stringify(record[0]));

  // const [data, setData] = useState();
  // const param = useLocation();
  // console.log(param);

  return (
    <>
      <div class="row">
        <div class="offset-md-2 col-sm-6 col-md-4 mt-5">
          <div class="card">
            <div class="card-body">
              <a href="#">
                <h2 style={{ color: "#ff0000" }}>Active problems</h2>
              </a>

              <p>
                <b>You will find all patient's current problems here.</b>
              </p>
              <a href="#" class="btn btn-primary">
                View all
              </a>
              <a href="#" class="btn btn-primary" style={{ marginLeft: "5px" }}>
                Add problem
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 mt-5  ">
          <div class="card">
            <div class="card-body">
              <a href="#">
                <h2 style={{ color: "#ff0000" }}>Old problems</h2>
              </a>

              <p>
                <b>You will find all patient's old problems here.</b>
              </p>

              {/* {record?.map((object, index) => {
                return object.ancienProb?.map((value, i) => {
                  return (
                    <div>
                      {value.doctor}
                      <div className="note">
                        <h2 style={{ color: "#007bff" }}>Heart Notes</h2>
                        <p key={i}>
                          <b>Doctor :</b> {value.probleme}
                        </p>
                        <p key={i}>
                          <b>Date :</b> {value.date}
                        </p>
                      </div>
                    </div>
                  );
                });
              })} */}
              <Link
                class="btn btn-primary"
                aria-current="page"
                to={{
                  pathname: `/doctor/record/oldproblem/${id}`,
                }}
                style={{ color: "white" }}
              >
                View all
              </Link>

              <Link
                class="btn btn-primary"
                aria-current="page"
                to={{
                  pathname: `/doctor/record/addoldproblem/${id}`,
                }}
                style={{ color: "white", margin: "5px" }}
              >
                Add problem
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="offset-md-2 col-sm-6 col-md-4 ">
          <div class="card">
            <div class="card-body">
              <h2 style={{ color: "#007bff" }}>
                <a href="#">Doctors notes</a>
              </h2>
              <br />
              <p>
                <b>You will find all notes about patient's heart here.</b>
              </p>
              <a href="#" class="btn btn-primary">
                View details
              </a>
              <a href="#" class="btn btn-primary" style={{ marginLeft: "5px" }}>
                Add note
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4">
          <div class="card">
            <div class="card-body">
              <h2 style={{ color: "#007bff" }}>
                <a href="">hereditary illness</a>
              </h2>
              <p>
                <b>You will find all hereditary ilness here.</b>
              </p>
              <br />
              <a href="#" class="btn btn-primary">
                View details
              </a>
              <a href="#" class="btn btn-primary" style={{ marginLeft: "5px" }}>
                Add note
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="offset-md-2 col-sm-6 col-md-4">
          <div class="card">
            <div class="card-body">
              <h2 style={{ color: "#007bff" }}>
                <a href="#">Laboratory result</a>
              </h2>
              <p>
                <b>You will find every patient's laboratory results here.</b>
              </p>
              <br />
              <a href="#" class="btn btn-primary">
                View results
              </a>
              <a href="#" class="btn btn-primary" style={{ marginLeft: "5px" }}>
                Add result
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalRecord;
