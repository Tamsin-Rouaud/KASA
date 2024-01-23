import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import jsonData from '../../data/logements.json';
import Gallery from '../../components/gallery/Gallery';
import ListingInfo from '../../components/ListingInfo/ListingInfo';
import './ForRent.sass'
import Host from '../../components/host/Host';
import Collapse from '../../components/collapse/Collapse';

const ForRent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedCard = jsonData.find((card) => card.id.toString() === id);

  useEffect(() => {
    if (!selectedCard) {
      // Appel de navigate dans un effet React
      navigate('/NotFound');
    }
  }, [selectedCard, navigate]);

  if (!selectedCard) {
    // Si selectedCard n'est pas trouvé, le composant ne rend rien
    return null;
  }

    return (
        <div className='forRent__container'>
            <Header/>
            <div className='forRent__main'>
                <Gallery card={selectedCard} />
                <div className='forRent__info'>
                    <ListingInfo card={selectedCard} />
                    <Host />
                </div>
                <div className='forRent__collapse'>
                    <Collapse title="Description" content={selectedCard.description} className="collapse__description"/>
                    <Collapse
  title="Équipements"
  content={selectedCard.equipments.map((word, index) => (
    <span key={index}>
      {word}
      <br/>
    </span>
  ))}
/>
                </div>
            </div>
            <Footer/>

        </div>
    );
};

export default ForRent;
