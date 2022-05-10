import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Laboratory = () => {

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
    return (
        <div class="row">
            {record.map((object, index) => {
                return object.resLabo?.map((value, i) => {
                    return (
                        <div class="offset-md-2 col-sm-6 col-md-3 mt-5">
                            <div class="card">
                                <div class="card-body">
                                    <a href="#">
                                        <h1 style={{ color: "red" }}>
                                            <b>Test {i + 1}</b>
                                        </h1>
                                    </a>
                                    <p>
                                        <b key={index}>Result:</b>
                                        {value.test}
                                    </p>
                                    <p>
                                        <b key={index}>Result:</b>
                                        {value.result}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                });
            })}
        </div>
    );
}

export default Laboratory;