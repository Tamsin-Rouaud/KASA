// About.js

import Header from "../../components/header/Header";
import './About.sass'
import Footer from "../../components/footer/Footer";
import Banner from "../../components/banner/Banner";
import homeBanner from '/aboutBanner.png';
import aboutBanner from '/homeBanner.png';

function About() {
  const isAboutPage=true;
  const backgroundImage = isAboutPage ? homeBanner : aboutBanner ;
  return (
    <div className="about__container">
      <Header/>
      <Banner  backgroundImage={backgroundImage} title={''}/>
      <Footer/>
    </div>
  );
}

export default About;