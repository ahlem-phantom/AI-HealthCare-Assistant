function Section2 (){

    return (
        <section className="ftco-intro">
  <div className="container">
    <div className="row no-gutters">
      <div className="col-md-3 color-1 p-4">
        <h3 className="mb-4">Emergency Cases</h3>
        <p>A small river named Duden flows by their place and supplies</p>
        <span className="phone-number">+ (123) 456 7890</span>
      </div>
      <div className="col-md-3 color-2 p-4">
        <h3 className="mb-4">Opening Hours</h3>
        <p className="openinghours d-flex">
          <span>Monday - Friday</span>
          <span>8:00 - 19:00</span>
        </p>
        <p className="openinghours d-flex">
          <span>Saturday</span>
          <span>10:00 - 17:00</span>
        </p>
        <p className="openinghours d-flex">
          <span>Sunday</span>
          <span>10:00 - 16:00</span>
        </p>
      </div>
      <div className="col-md-6 color-3 p-4">
        <h3 className="mb-2">Make an Appointment</h3>
        <form action="#" className="appointment-form">
          <div className="row">
            <div className="col-sm-4">
              <div className="form-group">
                <div className="select-wrap">
                  <div className="icon"><span className="ion-ios-arrow-down" /></div>
                  <select name id className="form-control">
                    <option value>Department</option>
                    <option value>Teeth Whitening</option>
                    <option value>Teeth CLeaning</option>
                    <option value>Quality Brackets</option>
                    <option value>Modern Anesthetic</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <div className="icon"><span className="icon-user" /></div>
                <input type="text" className="form-control" id="appointment_name" placeholder="Name" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <div className="icon"><span className="icon-paper-plane" /></div>
                <input type="text" className="form-control" id="appointment_email" placeholder="Email" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="form-group">
                <div className="icon"><span className="ion-ios-calendar" /></div>
                <input type="text" className="form-control appointment_date" placeholder="Date" />
              </div>    
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <div className="icon"><span className="ion-ios-clock" /></div>
                <input type="text" className="form-control appointment_time" placeholder="Time" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <div className="icon"><span className="icon-phone2" /></div>
                <input type="text" className="form-control" id="phone" placeholder="Phone" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <input type="submit" defaultValue="Make an Appointment" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

    );
}
export default Section2;