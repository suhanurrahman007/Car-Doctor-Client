import About from "../About/About";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Slider from "./Slider/Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <About></About>
            <Services></Services>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;