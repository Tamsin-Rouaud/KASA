import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import jsonData from '../../data/logements.json';
import ListingInfo from '../../components/ListingInfo/ListingInfo';
import './ForRent.sass';
import Collapse from '../../components/collapse/Collapse';
import SlideShow from '../../components/slideShow/SlideShow';
import Host from '../../components/host/Host';

const ForRent = () => {
	// Utilisation du hook useParams pour extraire l'ID de la route
	const { id } = useParams();
	// Utilisation du hook useNavigate pour obtenir une fonction de navigation
	const navigate = useNavigate();
	// Recherche de la carte correspondante dans les données en utilisant l'ID extrait
	const selectedCard = jsonData.find((card) => card.id.toString() === id);

	// Utilisation du hook useEffect pour déclencher une action après le rendu initial du composant
	useEffect(() => {
		// Si la carte n'est pas trouvée , redirection vers "/NotFound"
		if (!selectedCard) {
			navigate('/NotFound');
		}
		// Le tableau de dépendances [selectedCard, navigate] indique quand le useEffect doit être réexécuté
	}, [selectedCard, navigate]);
	// Si selectedCard est toujours introuvable, le composant ne rend rien (return null)
	if (!selectedCard) {
		return null;
	}
	// Retourne la structure JSX du composant ForRent avec les composants inclus
	return (
		<div className='forRent__container'>
			<Header />
			<div className='forRent__main'>
				<SlideShow pictures={selectedCard.pictures} />
				<div className='forRent__info'>
					<ListingInfo card={selectedCard} />
					<Host card={selectedCard} />
				</div>
				<div className='forRent__collapse'>
					<Collapse title='Description' content={selectedCard.description} />
					<Collapse
						title='Équipements'
						content={selectedCard.equipments.map((word, index) => (
							<li key={index}>{word}</li>
						))}
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ForRent;
