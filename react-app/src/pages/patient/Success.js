import React, { Fragment } from "react"
import Typography from "@material-ui/core/Typography"
import {useRef} from 'react'
import './button.css'
import ReactTOPdf from "react-to-pdf";
import { useEffect, useState } from "react";
import axios from "axios";
import { ListItem, ListItemText } from "@material-ui/core";


const Success =  ({
  handleNext,
  handleBack,
  values
}) => {
  
  const componentRef = useRef();
  const ref = React.createRef();
  let interest = values[0]["interest"]
  let sadness = values[1]["sadness"]
  let sleep = values[2]["sleep"]
  let energy = values[3]["energy"]
  let app = values[4]["appetite"]
  let feel = values[5]["feeling"]
  let troub = values[6]["trouble"]
  let move = values[7]["moving"]
  let thought = values[8]["thoughts"]
  let issues = values[9]["issues"]
 
  let score = interest + sadness + sleep + energy + app + feel + troub + move + thought + issues;

  const [searchR, setSearchR] = useState([]);
  const getSearchR = async () => {
    const res = await axios("http://localhost:8080/scrap/depression");
    console.log(res.data);
    setSearchR(res.data);
  };
  getSearchR();

  return (
    
    <Fragment>
      <div class="print__section">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div ref={componentRef} className="card">
            <div class="float__start">
              <div className="pdf_container" ref={ref}>
              <h3 class="card-title mb-0"><Typography variant="h3" align="center">
        Results
      </Typography>
      <ListItem>
          <ListItemText primary="Score" secondary={score} />
        </ListItem>

     { score > 40 && score <50 ? ( <Typography variant="h6"  align="center">
      <strong> 40-50 - You most likely are suffering from Depression. </strong> <br />
      ✓ Talk to a professional therapist 📞<br />
      ✓ Give yoga, meditation, and breathing exercises a try 🧘‍♂️ <br />
      ✓ Take a break and call a friend ☎️ <br />
      ✓ Check Your Diet 🥗 <br />
      ✓ Make new goals 🎯 <br />
      ✓ Do something meaningful 💡 <br />
      </Typography>) : (<br></br>)
}

{ score > 30 && score <39 ? (  <Typography variant="h6"  align="center">
     <strong> 30-39 - You are exhibiting some Mental health symptoms. </strong> <br />
     ✓ Take a break and do something you enjoy 🙂
      </Typography>) : (<br></br>)
}

{ score > 20 && score <29 ? (    <Typography variant="h6"  align="center">
      <strong> 20-29 - You are exhibiting a couple of Mental health symptoms. </strong> <br />
      ✓ Keep monitoring your health everyday 📝
      </Typography>) : (<br></br>)
}
     <br/>
   
     { score > 10 && score <19 ? ( <Typography variant="h6"  align="center">
      <strong> 10-19 - You most likely are NOT suffering from any Mental health diseases.  </strong> <br />
      ✓ Keep doing what you're doing 👍
      </Typography> ) : (<br></br>)
}
      <hr/>
      <Typography variant="h6"  align="center">
 
       Cure:- Consider watchful waiting, and testing again normally within two weeks. We additionally suggest it
       would be prudent to start a conversation with your doctor.
      </Typography></h3>
      </div>
      <br/>
      <Typography variant="h5">
        Read More: 
        </Typography><br/>
        <div className="widget post-widget">
                <ul className="latest-posts">
                {searchR.map((el, index) => {
                  return (
                  <li>
                    <div className="post-info">
                      <h4>
                        <a href={el.link}>
                          <div style={{color : 'blue', fontSize : '20px'}}>{el.title}</div>
                        </a>
                      </h4>
                    </div>
                  </li>
                  );
                })};
                </ul>
              </div>
            </div>
            <ReactTOPdf targetRef={ref} >
          {({ toPdf }) => 
            <button onClick={toPdf} className="bouton" >
              Print Your Results
            </button>
          }
        </ReactTOPdf>
            <hr />
            </div>
            </div>
            </div>
            </div>
            </div>
      

      
      
    </Fragment>


  )
  
  }



export default Success