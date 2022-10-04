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
                    About <span className="coloring">Me</span>
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
                    Working <span className="coloring">Timeline</span>
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
            <div className="partners">
              <div className="about_title">
                <h3>
                  <span>
                    My <span className="coloring">Partners</span>
                  </span>
                </h3>
              </div>
              <div className="list">
                <ul>
                  {aboutData &&
                    aboutData.partnersLogos &&
                    aboutData.partnersLogos.map((logo, i) => (
                      <li key={i}>
                        <div className="list_inner">
                          <img src={logo} alt="" />
                          <a className="cavani_tm_full_link" href="#" />
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="testimonial">
              <div className="about_title">
                <h3>
                  <span>
                    Clients <span className="coloring">Feedback</span>
                  </span>
                </h3>
              </div>
              <div className="list">
                <Swiper {...testimonialSlider} className="owl-carousel">
                  <SwiperSlide>
                    <div className="list_inner">
                      <div className="text">
                        <i className="icon-quote-left" />
                        <p>
                          Beautiful minimalist design and great, fast response
                          with support. Highly recommend. Thanks Marketify!
                        </p>
                      </div>
                      <div className="details">
                        <div className="image">
                          <div
                            className="main"
                            data-img-url="img/testimonials/1.jpg"
                          />
                        </div>
                        <div className="info">
                          <h3>Alexander Walker</h3>
                          <span>Graphic Designer</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="list_inner">
                      <div className="text">
                        <i className="icon-quote-left" />
                        <p>
                          These people really know what they are doing! Great
                          customer support availability and supperb kindness.
                        </p>
                      </div>
                      <div className="details">
                        <div className="image">
                          <div
                            className="main"
                            data-img-url="img/testimonials/2.jpg"
                          />
                        </div>
                        <div className="info">
                          <h3>Armin Van Buuren</h3>
                          <span>Content Manager</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="list_inner">
                      <div className="text">
                        <i className="icon-quote-left" />
                        <p>
                          I had a little problem and the support was just
                          awesome to quickly solve the situation. And keep going
                          on.
                        </p>
                      </div>
                      <div className="details">
                        <div className="image">
                          <div
                            className="main"
                            data-img-url="img/testimonials/3.jpg"
                          />
                        </div>
                        <div className="info">
                          <h3>Baraka Clinton</h3>
                          <span>English Teacher</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default AboutPopup;
