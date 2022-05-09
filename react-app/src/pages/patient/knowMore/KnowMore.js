import "./KnowMore.css";
import {useParams} from "react-router-dom"

const covid = [
  {
    heading: "Self Isolate",
    subHeading:
      "As soon as you have tested positive for the Coronavirus, you must self-isolate as soon as possible. Make the necessary adjustments and preparations to isolate yourself from all the household members for at least 14 days since the last possible exposure to the virus. Try to isolate yourself in a well ventilated room. Keep the doors closed at all times and wear a triple layer mask as much as possible. This mask must be changed every 8 hours and the used mask must be correctly disposed to avoid contamination of the surroundings. A single caretaker should regularly check up on you provided that they are wearing the appropriate PPE (Personal Protective Equipment) and an N 95 mask.",
  },
  {
    heading: "Regular monitoring",
    subHeading:
      "It is absolutely crucial to monitor yourself and check on your recovery progress and statistics throughout the isolation period. Use an oximeter to frequently check your oxygen levels as well as a thermometer to check your temperature. It is good to maintain a record of all your results and any irregularities can help identify as to whether further assistance is required. Eat nutritious meals and stay hydrated. This aids in keeping your immune system as stable as possible and promotes a smoother recovery.",
  },
  {
    heading: "Medications",
    subHeading:
      "It is advised to resort to supportive medicines such as cough syrups and paracetamol to help any mild symptoms of the virus. However, you must never listen to anyone besides a professional and take any other medications or antibiotics unless specifically prescribed by your doctor as this could aggravate the infection or cause unnecessary side effects which would retard the recovery process. Always consult a doctor or an expert before implementing any drastic medical changes to your recovery and self isolation routine.  ",
  },
  {
    heading: "Seek medical attention",
    subHeading:
      "Medical attention is necessary regardless of the severity of the infection. In general infection scenarios, the right self isolation procedure and care is satisfactory for a seamless recovery without the need for hospitalisation. Stay in touch with a doctor through phone or video calls to help check for diagnosis and recovery progress reports. However, in the case where the infection is between moderate to severe, contact a doctor immediately. If you are having difficulty in breathing, persistent pain, a fever of 101 degrees celsius or above or are finding it difficult to wake up or stay awake, it is advised that you contact a professional caretaker. There are just a few of the symptoms caused by the new variant of the coronavirus.",
  },
  {
    heading: "Stay calm",
    subHeading:
      "Stay relaxed and focused as soon as you test positive for COVID-19. The saying, “Worrying means you suffer twice.” is a very true statement as the problem most likely is not as bad as you would think about in your mind. Most of the scenarios and possibilities that you would overthink about may not even occur which means that you may have spent unnecessary time stressing about hypothetical situations which could adversely affect your recovery process. Maintaining a stable and calm state of mind is vital during the isolation and recovery phase.",
  },
];

const tuberculosis = [
  {
    heading: "Seek medical attention",
    subHeading: "Medical attention is necessary regardless of the severity of the infection. In general infection scenarios, the right self isolation procedure and care is satisfactory for a seamless recovery without the need for hospitalisation. Stay in touch with a doctor through phone or video calls to help check for diagnosis and recovery progress reports. However, in the case where the infection is between moderate to severe, contact a doctor immediately."
  },
  {
    heading: "Manage fever and cough at home",
    subHeading: "Drink plenty of fluids to help loosen secretions and bring up phlegm. Drink warm beverages, take steamy baths and use a humidifier to help open your airways and ease your breathing. Get lots of rest. You may need to stay in bed for a while. Get as much help as you can with meal preparation and household chores until you are feeling stronger. It is important not to overdo daily activities until you are fully recovered."
  },
  {
    heading: "High risk groups",
    subHeading: "people with weakened immune systems. people with alcoholism. people who are older. people living in institutions. people living in overcrowded conditions. people with diabetes",
  },
  {
    heading: "Say no to smoke",
    subHeading: "Stay away from smoke to let your lungs heal. This includes smoking, secondhand smoke and wood smoke."
  },
  {
    heading: "Stopping the spread",
    subHeading: "Always cover your mouth with a tissue when you cough or sneeze. Seal the tissue in a plastic bag, then throw it away. Wash your hands after coughing or sneezing. Don’t visit other people and don’t invite them to visit you. Stay home from work, school, or other public places. Don’t use public transportation."
  },
  {
    heading: "Stay calm",
    subHeading: "Stay relaxed and focused as soon as you affected by tuberculosis. The saying, “Worrying means you suffer twice.” is a very true statement as the problem most likely is not as bad as you would think about in your mind. Most of the scenarios and possibilities that you would overthink about may not even occur which means that you may have spent unnecessary time stressing about hypothetical situations which could adversely affect your recovery process. Maintaining a stable and calm state of mind is vital during the isolation and recovery phase. Use a fan or open windows to move around fresh air"
  }
]

const pneumonia = [
  {
    heading: "Seek medical attention",
    subHeading: "If you start feeling sick and your breathing get worse seek medical attention which is necessary regardless of the severity of the infection. In general infection scenarios, the right self isolation procedure and care is satisfactory for a seamless recovery without the need for hospitalisation. Stay in touch with a doctor through phone or video calls to help check for diagnosis and recovery progress reports. However, in the case where the infection is between moderate to severe, contact a doctor immediately."
  },
  {
    heading: "Manage pneumonia at home",
    subHeading: "Drink plenty of water. Eat balanced diet. Eat food with proper nutrition. Get plenty of rest. Aim to slowly work back into your usual routine and be sure to take notes of any sign that the infections may be coming back."
  },
  {
    heading: "High risk groups",
    subHeading: "infants from birth to 2 years old. people with age above 65. People with weakened immune systems due to pregnancy, HIV, and the use of certain medications such as steroids or certain cancer drugs. people with certain chronic medical conditions such as asthma, cystic fibrosis, diabetes, COPD, heart failure, sickel cell disease, liver disease, kidney disease. People who’ve had a brain disorder, which can affect the ability to swallow or cough",
  },
  {
    heading: "Possible Complications",
    subHeading: "Worsened chronic conditions. If you have certain preexisting health conditions, pneumonia could make them worse. These conditions include congestive heart failure and emphysema. Bacteremia. Bacteria from the pneumonia infection may spread to your bloodstream. This can lead to dangerously low blood pressure, septic shock, and, in some cases, organ failure. Impaired breathing. You may have trouble getting enough oxygen when you breathe. You may need to use a ventilator. Acute respiratory distress syndrome. This is a severe form of respiratory failure. It’s a medical emergency. Kidney, heart, and liver damage. These organs may be damaged if they don’t receive enough oxygen, or if there’s an overreaction of the immune system to the infection.",
  },
  {
    heading: "Stay calm",
    subHeading: "Stay relaxed and focused as soon as you affected by tuberculosis. The saying, “Worrying means you suffer twice.” is a very true statement as the problem most likely is not as bad as you would think about in your mind. Most of the scenarios and possibilities that you would overthink about may not even occur which means that you may have spent unnecessary time stressing about hypothetical situations which could adversely affect your recovery process. Maintaining a stable and calm state of mind is vital during the isolation and recovery phase. Use a fan or open windows to move around fresh air"
  }
]

const KnowMore = () => {
  const {result} = useParams()
  return (
    <div className="main-wrapper">
 
    <div className="page-wrapper">
      <div className="content">
    <div className="knowMore__container container d-flex flex-column align-items-center">
      <div className="knowMore__sectionHeading">
        <p>W.H.O recommendation for {result&&result}</p>
      </div>
      <div className="knowMore__containerDiv">
        <div className="knowMore__otherInfoDiv d-flex flex-column align-items-center">
          <div className="knowMore__otherInfoHeading">
            <p>Measures to Take</p>
          </div>
          <ul>
            {result === "covid" && covid.map((element, index) => (
              <div key={index}>
                <li>{element.heading}</li>
                <p>{element.subHeading}</p>
              </div>
            ))}
            {result === "tuberculosis" && tuberculosis.map((element, index) => (
              <div key={index}>
                <li>{element.heading}</li>
                <p>{element.subHeading}</p>
              </div>
            ))}
            {result === "pneumonia" && pneumonia.map((element, index) => (
              <div key={index}>
                <li>{element.heading}</li>
                <p>{element.subHeading}</p>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default KnowMore;
