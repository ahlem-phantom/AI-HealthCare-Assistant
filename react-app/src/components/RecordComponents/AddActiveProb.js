import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddActiveProblem = () => {
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

    const [oldproblem, setOldproblem] = useState('');
    const [dateold, setDateold] = useState();
    const idrec = useState(false);
    const navigate = useNavigate();
    const handleChange = (event) => {
        setOldproblem(event.target.value);
    };
    const handleChangeDate = (event) => {
        setDateold(event.target.value);
    };
    const handleClick = () => {
        const json = { "probleme": oldproblem.toString(), "date": dateold.toString() };
        record.map((object, index) => {
            object.probActive.push(json);

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
                            Illness
                        </label>
                        <input
                            type="text"
                            placeholder="Illness"
                            className="form-control"
                            id="exampleInputEmail1"
                            value={oldproblem}
                            onChange={handleChange}
                            aria-describedby="emailHelp"
                            style={{ width: "200px" }}
                        />
                        <div id="emailHelp" className="form-text"></div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Since:
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            value={dateold}
                            onChange={handleChangeDate}
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
        </>
    );
}

export default AddActiveProblem;