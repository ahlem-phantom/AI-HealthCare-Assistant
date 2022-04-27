import React, { Fragment } from "react"
import Typography from "@material-ui/core/Typography"
import {useRef} from 'react'
import './bouton.css'
import ReactTOPdf from "react-to-pdf";




const Success = (props) => {
  const componentRef = useRef();
  const ref = React.createRef();



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
      <Typography variant="h4" align="center">
        If you score: 
        </Typography><br/>
      <Typography variant="h6"  align="center">
      <strong> 40-50 - You most likely are suffering from Depression. </strong> <br />
      ✓ Talk to a professional therapist 📞<br />
      ✓ Give yoga, meditation, and breathing exercises a try 🧘‍♂️ <br />
      ✓ Take a break and call a friend ☎️ <br />
      ✓ Check Your Diet 🥗 <br />
      ✓ Make new goals 🎯 <br />
      ✓ Do something meaningful 💡 <br />
      </Typography><br/>
      <Typography variant="h6"  align="center">
     <strong> 30-39 - You are exhibiting some Mental health symptoms. </strong> <br />
     ✓ Take a break and do something you enjoy 🙂
      </Typography><br/>
      <Typography variant="h6"  align="center">
      <strong> 20-29 - You are exhibiting a couple of Mental health symptoms. </strong> <br />
      ✓ Keep monitoring your health everyday 📝
      </Typography><br/>
      <Typography variant="h6"  align="center">
      <strong> 10-19 - You most likely are NOT suffering from any Mental health diseases.  </strong> <br />
      ✓ Keep doing what you're doing 👍
      </Typography> <hr/>
      <Typography variant="h6"  align="center">
       
       Cure:- Consider watchful waiting, and testing again normally within two weeks. We additionally suggest it
       would be prudent to start a conversation with your doctor.
      </Typography></h3>
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