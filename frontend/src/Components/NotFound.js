import Background from "../img/404.jpg"
import Background1 from "../img/bg_1.jpg"

function NotFound(){
    return(
    <section >
    <div class="slider-item" style={{backgroundImage: "url(" + Background + ")"}}>
    <img src={Background} alt="aa"/>
    
    </div>
    
  </section>);
}
export default NotFound;