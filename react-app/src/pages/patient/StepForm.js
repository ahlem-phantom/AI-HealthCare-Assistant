import React, { useState, Fragment } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import FifthStep from "./FifthStep";
import SixthStep from "./SixthStep";
import SeventhStep from "./SeventhStep";
import EighthStep from "./EighthStep";
import NinethStep from "./NinethStep";
import TenthStep from "./TenthStep";
import Confirm from "./Confirm";
import Success from "./Success";

export default function StepForm() {

const labels = [
  "Interest",
  "Sadness",
  "Sleep",
  "Energy",
  "Appetite",
  "Feeling",
  "Trouble",
  "Moving",
  "Thoughts",
  "Issues",
  "Confirmation"
];

// const StepForm = () => {
const [steps, setSteps] = useState(0);

const [answer, setAnswer] = useState("")
 
const [sadAnswer, setSadAnswer] = useState("")

const [sleepAnswer, setSleepAnswer] = useState("")

const [energyAnswer, setEnergyAnswer] = useState("")

const [appetiteAnswer, setAppetiteAnswer] = useState("")

const[feelingAnswer, setFeelingAnswer] = useState("")

const[troubleAnswer, setTroubleAnswer] = useState("")

const[movingAnswer, setMovingAnswer] = useState("")

const[thoughtsAnswer, setThoughtsAnswer] = useState("")

const[issuesAnswer, setIssuesAnswer] = useState("")

const handleChange = (evt, value) => {
    setAnswer(value)
  }

 const handleChange2 =  (evt, value) => {
  setSadAnswer(value)
 }

 const handleChange3 = (evt, value) => {
  setSleepAnswer(value)
 }

 const handleChange4 = (evt, value) => {
  setEnergyAnswer(value)
 }

 const handleChange5 = (evt, value) => {
  setAppetiteAnswer(value)
 }

 const handleChange6 = (evt, value) => {
  setFeelingAnswer(value)
 }

 const handleChange7 = (evt, value) => {
  setTroubleAnswer(value)
 }
  
 const handleChange8 = (evt, value) => {
  setMovingAnswer(value)
 }

 const handleChange9 = (evt, value) => {
  setThoughtsAnswer(value)
 }

 const handleChange10 = (evt, value) => {
  setIssuesAnswer(value)
 }

          const quesAnswers = [
              {"interest": answer }, 
              {"sadness": sadAnswer},
              {"sleep": sleepAnswer},
              {"energy": energyAnswer},
              {"appetite": appetiteAnswer},
              {"feeling": feelingAnswer},
              {"trouble": troubleAnswer},
              {"moving": movingAnswer},
              {"thoughts": thoughtsAnswer},
              {"issues": issuesAnswer},
          ]
 

  // Proceed to next step
  const handleNext = () => setSteps(steps + 1);
  // Go back to prev step
  const handleBack = () => setSteps(steps - 1)

 
  const handleSteps = step => {

    switch (step) {
      case 0:
        return (
          <FirstStep
            handleNext={handleNext}
            handleChange={handleChange}
            value={quesAnswers[0]}
          />
        );
      case 1:
        return (
          <SecondStep
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange2}
            value={quesAnswers[1]}
          />
        );
      case 2:
        return (
          <ThirdStep
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange3}
            value={quesAnswers[2]}
          />
        );
      case 3:
        return (
          <FourthStep
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange4}
            value={quesAnswers[3]}
          />
        );
      case 4:
        return (
          <FifthStep
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange5}
            value={quesAnswers[4]}
          />
        );
        case 5:
          return (
            <SixthStep
              handleNext={handleNext}
              handleBack={handleBack}
              handleChange={handleChange6}
              value={quesAnswers[5]}
            />
        );  
        case 6:
          return (
            <SeventhStep
              handleNext={handleNext}
              handleBack={handleBack}
              handleChange={handleChange7}
              value={quesAnswers[6]}
            />
        );  
        case 7:
          return (
            <EighthStep
              handleNext={handleNext}
              handleBack={handleBack}
              handleChange={handleChange8}
              value={quesAnswers[7]}
            />
        );  
        case 8:
          return (
            <NinethStep
              handleNext={handleNext}
              handleBack={handleBack}
              handleChange={handleChange9}
              value={quesAnswers[8]}
            />
        );  
        case 9:
          return (
            <TenthStep
              handleNext={handleNext}
              handleBack={handleBack}
              handleChange={handleChange10}
              value={quesAnswers[9]}
            />
        ); 
        
      case 10:
        return (
          <Confirm
            handleNext={handleNext}
            handleBack={handleBack}
            values={quesAnswers} 
          />
        );
        case 11:
          return (
            <Success
              handleNext={handleNext}
              handleBack={handleBack}
              values={quesAnswers} 
            />
          );
      default:
        break;
        }
      };

  // Handle components
  return (
    <Fragment>
      {steps === labels.length ? (
        <Success values={quesAnswers}  />
      ) : (
        <Fragment>
          <Stepper
            activeStep={steps}
            style={{ paddingTop: 30, paddingBottom: 50 }}
            alternativeLabel
          >
            {labels.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {handleSteps(steps)}
        </Fragment>
      )}
    </Fragment>
  )
}