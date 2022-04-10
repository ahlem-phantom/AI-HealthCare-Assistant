import Section1 from "../components/home/Section1";
import Section3 from "../components/home/Section3";
import Section4 from "../components/home/Section4";
import Section5 from "../components/home/Section5";
import Section6 from "../components/home/Section6";
import Section7 from "../components/home/Section7";
import Section8 from "../components/home/Section8";
import Navbar from "../components/Navbar";

function Home(){

    return(
        <div>
        <Navbar/>
        <Section1/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
        <Section8/>
        </div>
    );
}
export default Home;