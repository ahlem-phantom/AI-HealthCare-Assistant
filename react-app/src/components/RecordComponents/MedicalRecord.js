import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const MedicalRecord = () => {
  const { id } = useParams();

  const [record, setRecord] = useState([]);

  const [data, setData] = useState({
    userid: [{ "_id": id }]
  });

  const getRecords = async () => {
    console.log(id)

    const res = await axios(`http://localhost:8080/records/${id}`).then(async (res) => {

      if (res.data.length !== 0) {
        setRecord(res.data)
      }
      if (res.data.length === 0) {
        console.log('data vide')


        console.log('data', data);
        const result = await axios.post(`http://localhost:8080/records/`, data);
        const resul = await axios(`http://localhost:8080/records/${id}`)
        setRecord(resul.data)


      }
    }
    );



  };
  useEffect(() => {
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
              <Link
                className="btn btn-primary"
                aria-current="page"
                to={{
                  pathname: `/doctor/record/activeproblem/${id}`,
                }}
                style={{ color: "white" }}
              >View all </Link>
              <Link
                class="btn btn-primary"
                aria-current="page"
                to={{
                  pathname: `/doctor/record/addactiveproblem/${id}`,
                }}
                style={{ color: "white", marginLeft: "5px" }}
              >
                Add problem
              </Link>
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

              <p>
                <b>You will find all notes about patient's heart here.</b>
              </p>
              <br />
              <Link
                class="btn btn-primary"
                aria-current="page"
                to={{
                  pathname: `/doctor/record/doctornote/${id}`,
                }}
                style={{ color: "white", margin: "5px" }}
              >
                View details
              </Link>
              <Link
                class="btn btn-primary"
                aria-current="page"
                to={{
                  pathname: `/doctor/record/addnote/${id}`,
                }}
                style={{ color: "white", margin: "5px" }}
              >
                Add note
              </Link>
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
              <Link
                class="btn btn-primary"
                aria-current="page"
                to={{
                  pathname: `/doctor/record/hereditary/${id}`,
                }}
                style={{ color: "white" }}
              >
                View details
              </Link>
              <Link
                class="btn btn-primary"
                aria-current="page"
                to={{
                  pathname: `/doctor/record/addhereditary/${id}`,
                }}
                style={{ color: "white", marginLeft: "5px" }}
              >
                Add note
              </Link>
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
              <Link
                class="btn btn-primary"
                aria-current="page"
                to={{
                  pathname: `/doctor/record/reslabo/${id}`,
                }}
                style={{ color: "white", marginLeft: "5px" }}
              >
                View results
              </Link>
              <Link
                class="btn btn-primary"
                aria-current="page"
                to={{
                  pathname: `/doctor/record/addreslabo/${id}`,
                }}
                style={{ color: "white", marginLeft: "5px" }}
              >
                Add result
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalRecord;
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