import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddMedication = () => {
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
    })

    const [medica, setMedica] = useState('');
    const [value, setValue] = useState();
    const [number, setNumber] = useState();
    const [ill, setIll] = useState();
    const idrec = useState(false);
    const navigate = useNavigate();
    const handleChange = (event) => {
        setMedica(event.target.value);
    };
    const handleChangeValue = (event) => {
        setValue(event.target.value);
    };
    const handleChangeNumber = (event) => {
        setNumber(event.target.value);
    };
    const handleChangeIll = (event) => {
        setIll(event.target.value);
    };
    const handleClick = () => {
        const json = { "medica": medica.toString(), "value": value.toString(), "number": number.toString(), "ill": ill.toString() };
        record.map((object, index) => {
            object.medication.push(json);

            onUpdate(object);
        });

        navigate(-1)

    };



    return (
        <>
            <div
                class="offset-md-4 card col-md-3"
                style={{ boxShadow: "5px 5px 15px black", marginTop: "20px", }}
            >
                <form
                    style={{
                        padding: "20px",
                        paddingLeft: "40px",
                        marginBottom: "50px"
                    }}
                >
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Medication name:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            value={medica}
                            onChange={handleChange}
                            aria-describedby="emailHelp"
                            style={{ width: "200px" }}
                        />
                        <div id="emailHelp" className="form-text"></div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Dose:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={value}
                            onChange={handleChangeValue}
                            id="exampleInputPassword1"
                            style={{ width: "200px" }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Frequency:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={number}
                            onChange={handleChangeNumber}
                            id="exampleInputPassword1"
                            style={{ width: "200px" }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Condition:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={ill}
                            onChange={handleChangeIll}
                            id="exampleInputPassword1"
                            style={{ width: "200px" }}
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleClick}
                        style={{ marginLeft: "50px", marginTop: "30px" }}
                        class="btn btn-outline-primary"
                    >
                        Add illness
                    </button>

                </form>

            </div>
            <br /><br /><br /><br />
        </>);
}

export default AddMedication;