import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const AddAllergie = () => {
    const { id } = useParams();
    const [allergi,setAllergi]=useState('');
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
    const onUpdate=(async(object)=>{
      await axios.put(`http://localhost:8080/records/${id}`,object).then(
  
      )
    })
    
  
    const handleChange = (event) => {
      setAllergi(event.target.value);
    };
    const handleClick = () => {
      const json = { "allergie": allergi.toString() };
      record.map((object, index) => {object.allergie.push(json);
        
        onUpdate(object);});
        
        navigate(-1)    
       
    };


    return ( <div className="col-sm-6">
  <div className="form-group" style={{marginLeft:"80%",marginTop:"20px"}}>
    <label>Allergie<span className="text-danger">*</span></label>
    <input className="form-control" placeholder="Example: dust" onChange={handleChange}style={{width:"200px"}}value={allergi}type="text" />
    <button class="btn btn-primary submit-btn"onClick={handleClick} style={{marginTop:"15px"}}>Add allergie</button>
  </div>
</div>
 );
}
 
export default AddAllergie;