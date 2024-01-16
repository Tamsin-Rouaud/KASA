// Home.js
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/banner/Banner";
import './Home.sass';
import homeBanner from '/aboutBanner.png';
import aboutBanner from '/homeBanner.png';
import Card from "../../components/card/Card";
import jsonData from '../../data/logements.json'

 function Home() {
  const isHomePage =true;
  const backgroundImage = isHomePage ? aboutBanner : homeBanner;
  const title = isHomePage ? 'Chez vous, et partout ailleurs' : '';
  
  return (
    <div className="home__container">
      <Header/>
      <Banner backgroundImage={backgroundImage} title={title}/>
      <Card data={jsonData} />
      <Footer/>
    </div>
  );
}

export default Home;