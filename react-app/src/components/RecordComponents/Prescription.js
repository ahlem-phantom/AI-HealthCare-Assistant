const Prescription = () => {
  const local = localStorage.getItem("record");
  console.log(local);
  return (
    <>
      <div class="row">
        <div class="offset-md-2 col-sm-6 col-md-4 mt-5">
          <div class="card">
            <div class="card-body">
              <a href="#">
                <h2>Prescription 1</h2>
              </a>
              <a
                href="#"
                className="btn btn-primary"
                style={{ marginLeft: "50%" }}
              >
                <i className="fa fa-file-pdf-o" aria-hidden="true" />
              </a>
              <a href="#" class="btn btn-primary" style={{ marginLeft: "5px" }}>
                <i className="fa fa-trash" aria-hidden="true" />
              </a>
              <p>
                <b>Doctor:</b>
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 mt-5">
          <div class="card">
            <div class="card-body">
              <a href="#">
                <h2>Prescription 1</h2>
              </a>
              <a
                href="#"
                className="btn btn-primary"
                style={{ marginLeft: "50%" }}
              >
                <i className="fa fa-file-pdf-o" aria-hidden="true" />
              </a>
              <a href="#" class="btn btn-primary" style={{ marginLeft: "5px" }}>
                <i className="fa fa-trash" aria-hidden="true" />
              </a>
              <p>
                <b>Doctor:</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <a href="#" class="btn btn-primary" style={{ marginLeft: "40%" }}>
        <i className="fa fa-plus" aria-hidden="true" /> Add prescription
      </a>
    </>
  );
};

export default Prescription;
