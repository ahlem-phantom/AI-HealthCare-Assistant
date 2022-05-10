import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddDoctorNote = () => {
    const { id } = useParams();
    const [description, setDescription] = useState('');
    const [doctor, setDoctor] = useState('');
    const navigate = useNavigate();
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
        await axios.post(`http://localhost:3001/transaction/broadcast`, object).then(

        )
        // Axios({
        //     method: 'post',
        //     headers: { 'Content-Type': 'application/json'},
        //     url: 'http://localhost:3001/transaction/broadcast',
        //     data: json,
        //   })
    })


    const user = JSON.parse(localStorage.getItem('user')).id;
    console.log(user);
    const date = new Date();

    const handleChange = (event) => {
        setDescription(event.target.value);
    };
    const handleChangeDoctor = (event) => {
        setDoctor(event.target.value);
    };
    const handleClick = () => {
        const json = { "sender": user, "recipient": id, "doctor": doctor.toString(), "date": date, "description": description.toString() };
        record.map((object, index) => {
            object.prescripton.push(json);

            onUpdate(json);
        });

        navigate(-1)

    };


    return (<div className="col-sm-6">
        <div className="form-group" style={{ marginLeft: "80%", marginTop: "20px" }}>
            <label>Description<span className="text-danger">*</span></label>
            <textarea className="form-control" placeholder="" onChange={handleChange} style={{ width: "200px" }} value={description} type="text" />
        </div>

        <div className="form-group" style={{ marginLeft: "80%", marginTop: "20px" }}>
            <label>Doctor<span className="text-danger">*</span></label>
            <input className="form-control" placeholder="Example: dr.med" onChange={handleChangeDoctor} style={{ width: "200px" }} value={doctor} type="text" />
            <button class="btn btn-primary submit-btn" onClick={handleClick} style={{ marginTop: "15px" }}>Add note</button>
        </div>
    </div>
    );
}

export default AddDoctorNote;