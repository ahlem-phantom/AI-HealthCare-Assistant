const Allergie = () => {
  return (
    <>
      <a
        href="#"
        class="btn btn-primary"
        style={{ marginTop: "50px" }}
      >
        <i className="fa fa-plus" aria-hidden="true" /> Add allergie
      </a>
      <div class="row">
        <div class="offset-md-2 col-sm-6 col-md-4 mt-5">
          <div class="card">
            <div class="card-body">
              <a href="#">
                <h2>Allergie 1</h2>
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 mt-5  ">
          <div class="card">
            <div class="card-body">
              <a href="#">
                <h2>Allergie 2</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allergie;
