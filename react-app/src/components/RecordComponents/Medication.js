import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Medication = () => {


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
    <div className="col-md-8" style={{ marginTop: "20px" }}>
      <Link
        class="btn btn-primary"
        aria-current="page"
        to={{
          pathname: `/doctor/record/addmedication/${id}`,
        }}
        style={{ color: "white", marginLeft: "60%" }}
      >
        Add Medications
      </Link>
      <div className="table-responsive" style={{ marginLeft: "30%", marginTop: "30px" }}>
        <table className="table table-striped custom-table">
          <thead>
            <tr>
              <th style={{ minWidth: 200 }}>Medication name</th>
              <th>Dose</th>
              <th>Frequency</th>
              <th>Condition</th>


            </tr>
          </thead>
          <tbody>
            {record.map((object, index) => {
              return object.medication?.map((value, i) => {
                return (
                  <tr>
                    <td>
                      <h2>{value.medica}</h2>
                    </td>
                    <td>{value.value}</td>
                    <td>{value.number}</td>
                    <td>{value.ill}</td>


                  </tr>
                )
              });
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Medication;
