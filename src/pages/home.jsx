import "../pages/home.css";
import glass from "../../public/images/glass.jpg";
import tool from "../../public/images/tool.jpg";
import typewriter from "../../public/images/typewriter.jpg";
import Carousel_arrow from "../components/Carousel_arrow";"../components/Carousel_arrow.jsx";

const Home = () => {
  return (
    <>
    <span className="key">W</span>
    <span className="key">e</span>
    <span className="key">l</span>
    <span className="key">c</span>
    <span className="key">o</span>
    <span className="key">m</span>
    <span className="key">e</span>
    <span className="key">!</span>
    <br/>
    <img className="glass_image" src={glass}/>
    <img className="typewriter_image" src={typewriter}/>
    <img className="tool_image" src={tool}/>
    <Carousel_arrow/>
    </>
  )
}

export default Home;