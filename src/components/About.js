import { Fragment, useState } from "react";
import AnimatedText from "./AnimatedText";
import AboutPopup from "./popup/AboutPopup";

const aboutData = {
  firstName: "Burak",
  lastName: "Tekelioğlu",
  bithday: "1970 Muğla",
  address: "Urla Sanat Sokağı",
  phn: "+90 532 409 16 55",
  email: "info@deburky.com",
  serviceLists: [
    "Deburky Sanat Atölyesi",
  ],
  education: [
    { year: "2014 - 2016", unv: "Oxford Univercity", degree: "Master Degree" },
    { year: "2010 - 2014", unv: "Texas Univercity", degree: "Bachelor Degree" },
    { year: "2008 - 2010", unv: "Simone College", degree: "Associate Degree" },
  ],
  working: [
    {
      year: "2018 - running",
      company: "Envato Elements",
      deg: "Exclusive Author",
    },
    { year: "2015 - 2018", company: "Avo Corporation", deg: "Content Manager" },
    { year: "2012 - 2015", company: "FC Barcelona", deg: "Football Player" },
  ],
  partnersLogos: [
    "img/partners/1.png",
    "img/partners/2.png",
    "img/partners/3.png",
    "img/partners/4.png",
  ],
};

const About = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      <AboutPopup
        open={popup}
        close={() => setPopup(false)}
        aboutData={aboutData}
      />
      <div className="edrea_tm_section hidden animated" id="about">
        <div className="section_inner">
          <div className="edrea_tm_about">
            <div className="left">
              <div className="image">
                <img src="img/thumbs/1-1.jpg" alt="" />
                <div className="main" data-img-url="img/about/1.jpg" />
              </div>
            </div>
            <div className="right">
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3>Art
                  <AnimatedText />
                </h3>
              </div>
              <div className="text">
                <p>
                  1970 yılında Muğla’da doğan <span>R.Burak Tekelioğlu</span> ilk, orta ve lise öğrenim hayatını Muğla’da tamamladı. Üniversite öğrenimine Bilkent Üniversitesi GSF İç Mimarlık bölümünde başlayıp Yeditepe Üniversitesi GSF İç Mimarlık bölümünden mezun oldu.Uzun yıllar mimari projelerde yer alarak İç mimarlık mesleğine tasarımları ile devam etti.  Muammer Yanmaz Atölyesi ’40 Haramiler’ topluluğunda profesyonel fotoğrafçılık eğitimi aldı. Yaklaşık 3 yıl boyunca yurtiçi ve yurtdışı  sokak portresi alanında çekimler yaptı.Sonrasında üniversite yıllarında başlayan, kendi yarattığı karakter çizimleri ile çağdaş sanatı birleştirerek sentezlediği resim ve heykel çalışmalarına ağırlık verdi. 2018 yılında Urla Sanat Sokağında ‘DEBURKY’ Sanat Atölyesini kurdu. Yurtiçi ve yurtdışı resim ve seramik eserlerinin  yer aldığı sergilere katıldı. Sanat çalışmalarında varoluş , bilinçaltı ve insan, zaman düşleri ,şehir ve yalnızlık  ,kökler gibi öznel duyuları kendine özgü yorumladı.Sanatçı çalışmalarına Urla’da aynı zamanda sanat galerisi olan ‘Deburky Sanat Atölyesinde’ devam etmektedir.

                </p>
              </div>
              <div className="edrea_tm_button">
                <a href="#" onClick={() => setPopup(true)}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default About;
