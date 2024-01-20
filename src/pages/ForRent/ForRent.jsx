// ForRent.jsx
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import jsonData from '../../data/logements.json';
import Gallery from '../../components/gallery/Gallery';
import ListingInfo from '../../components/ListingInfo/ListingInfo';
import './ForRent.sass'
import Host from '../../components/host/Host';

const ForRent = () => {
    // Utiliser le hook useParams pour obtenir les paramètres de l'URL
    const { id } = useParams();

    const selectedCard = jsonData.find(card => card.id.toString() === id);

    if (!selectedCard) {
        return <div>Logement introuvable</div>;
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
            </div>
            <Footer/>

        </div>
    );
};

export default ForRent;
