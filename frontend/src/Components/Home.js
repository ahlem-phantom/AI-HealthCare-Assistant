import Section1 from "./home/Section1";
import Section3 from "./home/Section3";
import Section4 from "./home/Section4";
import Section5 from "./home/Section5";
import Section6 from "./home/Section6";
import Section7 from "./home/Section7";
import Section8 from "./home/Section8";
import Navbar from "./Navbar";
import Router from '../routes';

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