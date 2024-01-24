import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import jsonData from '../../data/logements.json';

import ListingInfo from '../../components/ListingInfo/ListingInfo';
import './ForRent.sass'

import Collapse from '../../components/collapse/Collapse';
import SlideShow from '../../components/slideShow/SlideShow';
import Host from '../../components/host/Host';

const ForRent = () => {
  // Extrait ID de la route
  const { id } = useParams();

  const navigate = useNavigate();

  const selectedCard = jsonData.find((card) => card.id.toString() === id);

  // Utilisation de useEffect pour déclencher la redirection vers "/NotFound" si selectedCard n'est pas trouvé.
  useEffect(() => {
    if (!selectedCard) {
      
      navigate('/NotFound');
    }
  }, [selectedCard, navigate]);

  if (!selectedCard) {

    return null;
  }

    return (
        <div className='forRent__container'>
            <Header/>
            <div className='forRent__main'>
                <SlideShow pictures={selectedCard.pictures} />
                <div className='forRent__info'>
                    <ListingInfo card={selectedCard} />
                    <Host card={selectedCard} />
                </div>
                <div className='forRent__collapse'>
                    <Collapse title="Description" content={selectedCard.description} className="collapse__description"/>
                    <Collapse
  title="Équipements"
  content={selectedCard.equipments.map((word, index) => (
    <li key={index}>
      {word}
    </li>
  ))}
/>
                </div>
            </div>
            <Footer/>

        </div>
    );
};

export default ForRent;
