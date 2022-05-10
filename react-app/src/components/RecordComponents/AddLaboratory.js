import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddLaboratory = () => {



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

    const [test, setTest] = useState('');
    const [result, setResult] = useState();
    const idrec = useState(false);
    const navigate = useNavigate();
    const handleChange = (event) => {
        setTest(event.target.value);
    };
    const handleChangeResult = (event) => {
        setResult(event.target.value);
    };
    const handleClick = () => {
        const json = { "test": test.toString(), "result": result.toString() };
        record.map((object, index) => {
            object.resLabo.push(json);

            onUpdate(object);
        });

        navigate(-1)

    };

















    return (
        <><div
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
                        placeholder="test"
                        className="form-control"
                        id="exampleInputEmail1"
                        value={test}
                        onChange={handleChange}
                        aria-describedby="emailHelp"
                        style={{ width: "200px" }}
                    />
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Illness
                    </label>
                    <textarea

                        placeholder="result"
                        className="form-control"
                        id="exampleInputEmail1"
                        value={result}
                        onChange={handleChangeResult}
                        aria-describedby="emailHelp"
                        style={{ width: "200px" }}
                    />
                    <div id="emailHelp" className="form-text"></div>
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

export default AddLaboratory;