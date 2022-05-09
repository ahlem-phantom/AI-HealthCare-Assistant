import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function Upload(props) {

    const [file, setFile] = useState([]);
    const params = JSON.parse(localStorage.getItem('user')).id;
    console.log(params);
    const onFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('profileImg',file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.put("http://localhost:8080/users/user-profile/"+params,formData,config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
        });
      };


      const onChange= (e) => {
        const img = e.target.files[0];
        setFile(img);
      };
       

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <h1>File Upload</h1>
                <input type="file" name="profileImg" onChange= {onChange} />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}

export default Upload;