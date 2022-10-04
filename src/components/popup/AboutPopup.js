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
                <h3 className="job">
                  <AnimatedText />
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
                  1970 yılında Muğla’da doğan R.Burak Tekelioğlu ilk, orta ve lise öğrenim hayatını Muğla’da tamamladı. Üniversite öğrenimine Bilkent Üniversitesi GSF İç Mimarlık bölümünde başlayıp Yeditepe Üniversitesi GSF İç Mimarlık bölümünden mezun oldu.Uzun yıllar mimari projelerde yer alarak İç mimarlık mesleğine tasarımları ile devam etti.  Muammer Yanmaz Atölyesi ’40 Haramiler’ topluluğunda profesyonel fotoğrafçılık eğitimi aldı. Yaklaşık 3 yıl boyunca yurtiçi ve yurtdışı  sokak portresi alanında çekimler yaptı.Sonrasında üniversite yıllarında başlayan, kendi yarattığı karakter çizimleri ile çağdaş sanatı birleştirerek sentezlediği resim ve heykel çalışmalarına ağırlık verdi. 2018 yılında Urla Sanat Sokağında ‘DEBURKY’ Sanat Atölyesini kurdu. Yurtiçi ve yurtdışı resim ve seramik eserlerinin  yer aldığı sergilere katıldı. Sanat çalışmalarında varoluş , bilinçaltı ve insan, zaman düşleri ,şehir ve yalnızlık  ,kökler gibi öznel duyuları kendine özgü yorumladı.Sanatçı çalışmalarına Urla’da aynı zamanda sanat galerisi olan ‘Deburky Sanat Atölyesinde’ devam etmektedir.

                </p>
              </div>
            </div>
            
            <div className="timeline">
              <div className="about_title">
                <h3>
                  <span>
                    Education <span className="coloring">Timeline</span>
                  </span>
                </h3>
              </div>
              <div className="list">
                <ul>
                  {aboutData &&
                    aboutData.education &&
                    aboutData.education.map((edu, i) => (
                      <li key={i}>
                        <div className="list_inner">
                          <div className="time">
                            <span>{edu.year}</span>
                          </div>
                          <div className="place">
                            <h3>{edu.unv}</h3>
                            <span>{edu.degree}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="timeline">
              <div className="about_title">
                <h3>
                  <span>
                   Çalışmalarımız
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
