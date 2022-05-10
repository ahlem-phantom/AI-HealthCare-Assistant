import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'

const ActiveProblem = () => {
  const navigate = useNavigate();

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
          `${ind} has been deleted.`,
          'success',

        )
        record.map((object, index) => {
          var i = object.probActive.indexOf(ind);
          object.probActive.splice(i, 1);
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
    <div class="row">
      {record.map((object, index) => {
        return object.probActive?.map((value, i) => {
          return (
            <div class="offset-md-2 col-sm-6 col-md-3 mt-5">
              <div class="card">
                <div class="card-body">
                  <a href="#">
                    <h1 style={{ color: "red" }}>
                      <b>Active probleme {i + 1}</b>
                    </h1>
                  </a>

                  <p>
                    <b key={index}>Probleme:</b>
                    {value.probleme}
                  </p>
                  <p>
                    <b key={index}>Since:</b>
                    {value.date}
                  </p>
                  <a onClick={() => handleDelete(value.probleme)} type="button" class="btn btn-danger">Delete</a>

                </div>
              </div>
            </div>
          );
        });
      })}
    </div>

  );
}

export default ActiveProblem;