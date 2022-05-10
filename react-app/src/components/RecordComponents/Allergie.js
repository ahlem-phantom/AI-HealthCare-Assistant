import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'

const Allergie = () => {
  const { id } = useParams();
  const [record, setRecord] = useState([]);
  const [allergi, setAllergi] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const getRecords = async () => {
      const res = await axios(`http://localhost:8080/records/${id}`);
      console.log(res.data);
      setRecord(res.data);
    };
    getRecords();
  }, []);
  const onUpdate = (async (object) => {
    await axios.put(`http://localhost:8080/records/${id}`, object).then(

    )
  });

  const handleDelete = (ind) => {


    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-outline-success',
        cancelButton: 'btn btn-outline-danger'

      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Allergie has been deleted.',
          'success',

        )
        record.map((object, index) => {
          var i = object.allergie.indexOf(ind);
          object.allergie.splice(i , 1);
          // if (i !== -1) {
          //   object.allergie=object.allergie.filter(allergie=>allergie.allergie=allergic  );
          //   console.log('alllll',object.allergie)
          // }
          onUpdate(object);
        });
        navigate(-1)
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your data is safe :)',
          'error'
        )
      }
    })

  };
  return (
    <>
      <Link
        class="btn btn-primary"
        aria-current="page"
        to={{
          pathname: `/doctor/record/addallergie/${id}`,
        }}
        style={{ color: "white", marginTop: "2%", marginLeft: "40%" }}
      >
        <i className="fa fa-plus" aria-hidden="true" /> Add allergie
      </Link>


      <div class="row">
        {record.map((object, index) => {
          return object.allergie?.map((value, i) => {
            return (
              <div class="offset-md-2 col-sm-6 col-md-2 mt-5" style={{ marginRight: "1px" }}>
                <div class="card" style={{ width: "300px" }}>
                  <div class="card-body">
                    <h1 style={{ color: "blue" }}>
                      <b>Allergic to</b>
                    </h1>
                    <a href="#" key={index}>
                      <b>{value.allergie}</b>
                    </a>
                    <br />
                    <a onClick={() => handleDelete(value.allergie)} type="button" class="btn btn-danger">Delete</a>

                  </div>
                </div>
              </div>
            );
          });
        })}
      </div>
    </>
  );
};

export default Allergie;
