
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/banner/Banner";
import './Home.sass';
import homeBanner from '/homeBanner.png';
import Gallery from "../../components/gallery/Gallery";


 function Home() {
  
  const text ='Chez vous, partout et ailleurs'
  
  return (
    <div className="home__container">
      <Header/>
      <Banner backgroundImage={homeBanner} title={text}/>
      <Gallery  />
      <Footer/>
    </div>
  );
}

export default Home;