import { useContext } from "react";
import { context } from "../context/context";
import AnimatedText from "./AnimatedText";

const homeData = {
  firstName: "Burak",
  lastName: "Tekelioğlu",
};

const Home = ({ activeWithBtn }) => {
  const navContext = useContext(context);
  const { changeNav } = navContext;

  return (
    <div className="edrea_tm_section animated" id="home">
      <div className="section_inner">
        <div className="edrea_tm_home">
        <div className="image">
                <img src="img/thumbs/1-1.jpg" alt="" />
                <div className="main" data-img-url="img/about/1.jpg" />
              </div>
    
          <h3 className="name">
            {homeData.firstName}{" "}
            <span className="coloring">{homeData.lastName}</span>
          </h3>
          <h3>Art has no rules so do i.
          </h3>
          <div className="edrea_tm_button transition_link">
            <a href="#contact" onClick={() => changeNav("contact")}>
              iletişime geç 
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
