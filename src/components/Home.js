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
          <h3 className="name">
            {homeData.firstName}{" "}
            <span className="coloring">{homeData.lastName}</span>
          </h3>
          <h3>Art has no rules so do i.
          </h3>
              <div className="edrea_tm_section hidden animated" id="about">
        <div className="section_inner">
          <div className="edrea_tm_about">
            <div className="left">
              <div className="image">
                <img src="img/thumbs/1-1.jpg" alt="" />
                <div className="main" data-img-url="img/1.jpg" />
              </div>
            </div>
            <div className="right">
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3>Art has no rules so do i.
                </h3>
              </div>
              <div className="text">
                <p>
                  1970 yılında Muğla’da doğan <span>R.Burak Tekelioğlu</span> ilk, orta ve lise öğrenim hayatını Muğla’da tamamladı. Üniversite öğrenimine Bilkent Üniversitesi GSF İç Mimarlık bölümünde başlayıp Yeditepe Üniversitesi GSF İç Mimarlık bölümünden mezun oldu.Uzun yıllar mimari projelerde yer alarak İç mimarlık mesleğine tasarımları ile devam etti.  Muammer Yanmaz Atölyesi ’40 Haramiler’ topluluğunda profesyonel fotoğrafçılık eğitimi aldı. 
                </p>
              </div>
              <div className="edrea_tm_button">
                <a href="#" onClick={() => setPopup(true)}>
                  Devamını gör
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
