import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DoctorNotes = () => {
    const { id } = useParams();
    const [record, setRecord] = useState([]);

    useEffect(() => {
        const getRecords = async () => {
            await axios(`http://localhost:3001/address/${id}`).then((res) => {
                setRecord(res.data)
            });

        };
        getRecords();
    }, []);

    return (
        <div class="row">
            {record.addressData?.addressTransactions?.map((object, index) => {

                return (
                    <div class="offset-md-2 col-sm-6 col-md-3 mt-5">
                        <div class="card">
                            <div class="card-body">


                                <p>
                                    <b key={index} style={{ color: 'blue' }}>Doctor:&nbsp;&nbsp;</b>
                                    <b>{object.doctor}</b>
                                </p>
                                <p key={index}>
                                    <b style={{ color: 'blue' }}>Description:&nbsp;&nbsp;&nbsp;&nbsp;</b>
                                    <br />
                                    {object.description}
                                </p>
                                <a href="#">
                                    <h1 style={{ color: "red" }}>
                                        <b>Note date: {dayjs(object.date).format("YYYY/MM/DD hh:mm")}</b>
                                    </h1>
                                </a>
                            </div>
                        </div>
                    </div>
                );

            })}
        </div>
    );
}

export default DoctorNotes;