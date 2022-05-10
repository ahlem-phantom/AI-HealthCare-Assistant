import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddPrescription = () => {
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
        await axios.put(`http://localhost:8080/records/${id}`, object).then(

        )
    })


    const handleChange = (event) => {
        setDescription(event.target.value);
    };
    const handleChangeDoctor = (event) => {
        setDoctor(event.target.value);
    };
    const handleClick = () => {
        const json = { "description": description.toString(), "doctor": doctor.toString() };
        record.map((object, index) => {
            object.prescripton.push(json);

            onUpdate(object);
        });

        navigate(-1)

    };


    return (<div className="col-sm-6">
        <div className="form-group" style={{ marginLeft: "80%", marginTop: "20px" }}>
            <label>Description<span className="text-danger">*</span></label>
            <textarea className="form-control" placeholder="Example: dust" onChange={handleChange} style={{ width: "200px" }} value={description} type="text" />
        </div>

        <div className="form-group" style={{ marginLeft: "80%", marginTop: "20px" }}>
            <label>Doctor<span className="text-danger">*</span></label>
            <input className="form-control" placeholder="Example: dr.med" onChange={handleChangeDoctor} style={{ width: "200px" }} value={doctor} type="text" />
            <button class="btn btn-primary submit-btn" onClick={handleClick} style={{ marginTop: "15px" }}>Add allergie</button>
        </div>
    </div>);
}

export default AddPrescription;