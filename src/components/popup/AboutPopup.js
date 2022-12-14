import { useContext } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { context } from "../../context/context";
import { testimonialSlider } from "../../sliderProps";
import AnimatedText from "../AnimatedText";
import Modal from "./Modal";

const AboutPopup = ({ open, close, aboutData }) => {
  const colorContext = useContext(context);
  const { color } = colorContext;

  return (
    <Modal open={open} close={close}>
      <div className="about_popup_details">
        <div className="left">
          <div className="left_inner">
            <div className="author">
              <div className="avatar_image">
                <img src="img/thumbs/1-1.jpg" alt="" />
                <div className="main" data-img-url="img/1.jpg" />
              </div>
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3> Art has no rules so do i.

                </h3>
              </div>
            </div>
            <div className="list">
              <ul>
                <li>
                  <div className="list_inner">
                    <i className="icon-user" />
                    <span>
                      {aboutData.firstName} {aboutData.lastName}
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-calendar" />
                    <span>{aboutData.bithday}</span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-location" />
                    <span>
                      <a href="#" className="href_location">
                        {aboutData.address}
                      </a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-phone" />
                    <span>
                      <a href="#">{aboutData.phn}</a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-mail-1" />
                    <span>
                      <a href={`mailto:${aboutData.email}`}>
                        {aboutData.email}
                      </a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="edrea_tm_button full">
     
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right_inner">
            <div className="biography">
              <div className="about_title">
                <h3>
                  <span>
                    Ben <span className="coloring">kimim?</span>
                  </span>
                </h3>
              </div>
              <div className="text">
                <p>
                  1970 y??l??nda Mu??la???da do??an R.Burak Tekelio??lu ilk, orta ve lise ????renim hayat??n?? Mu??la???da tamamlad??. ??niversite ????renimine Bilkent ??niversitesi GSF ???? Mimarl??k b??l??m??nde ba??lay??p Yeditepe ??niversitesi GSF ???? Mimarl??k b??l??m??nden mezun oldu.Uzun y??llar mimari projelerde yer alarak ???? mimarl??k mesle??ine tasar??mlar?? ile devam etti.  Muammer Yanmaz At??lyesi ???40 Haramiler??? toplulu??unda profesyonel foto??raf????l??k e??itimi ald??. Yakla????k 3 y??l boyunca yurti??i ve yurtd??????  sokak portresi alan??nda ??ekimler yapt??.Sonras??nda ??niversite y??llar??nda ba??layan, kendi yaratt?????? karakter ??izimleri ile ??a??da?? sanat?? birle??tirerek sentezledi??i resim ve heykel ??al????malar??na a????rl??k verdi. 2018 y??l??nda Urla Sanat Soka????nda ???DEBURKY??? Sanat At??lyesini kurdu. Yurti??i ve yurtd?????? resim ve seramik eserlerinin  yer ald?????? sergilere kat??ld??. Sanat ??al????malar??nda varolu?? , bilin??alt?? ve insan, zaman d????leri ,??ehir ve yaln??zl??k  ,k??kler gibi ??znel duyular?? kendine ??zg?? yorumlad??.Sanat???? ??al????malar??na Urla???da ayn?? zamanda sanat galerisi olan ???Deburky Sanat At??lyesinde??? devam etmektedir.

                </p>
              </div>
            </div>
           
            <div className="timeline">
              <div className="about_title">
                <h3>
                  <span>
                   ??al????malar??m??z
                  </span>
                </h3>
              </div>
              <div className="list">
                <ul>
                  {aboutData &&
                    aboutData.working &&
                    aboutData.working.map((work, i) => (
                      <li key={i}>
                        <div className="list_inner">
                          <div className="time">
                            <span>{work.year}</span>
                          </div>
                          <div className="place">
                            <h3>{work.company}</h3>
                            <span>{work.deg}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
       
          
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default AboutPopup;
