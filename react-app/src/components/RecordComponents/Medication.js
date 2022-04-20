const Medication = () => {
  return (
    <div className="col-md-8" style={{ marginTop: "50px" }}>
      <div className="table-responsive">
        <table className="table table-striped custom-table">
          <thead>
            <tr>
              <th style={{ minWidth: 200 }}>Medication name</th>
              <th>Dose</th>
              <th>Frequency</th>
              <th>Condition</th>

              <th className="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h2>aspirine</h2>
              </td>
              <td>3 puffs</td>
              <td>5 times</td>
              <td>asthma</td>

              <td className="text-right">
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{ marginLeft: "50%", backgroundColor: "gray" }}
                >
                  <i className="fa fa-file-pdf-o" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  class="btn btn-primary"
                  style={{ marginLeft: "5px", backgroundColor: "gray" }}
                >
                  <i className="fa fa-trash" aria-hidden="true" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Medication;
