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
	const { id } = useParams(); // J'utilise le  hook useParams pour extraire l'ID de la route
	const navigate = useNavigate(); //ainsi que le hook useNavigate pour obtenir une fonction de navigation

	// Je crée une constante selectedCard qui contient une fonction qui me permettra d'implementer les données passée en propriétés en utilisant l'ID extrait des données JSON
	const selectedCard = jsonData.find((card) => card.id.toString() === id);

	// J'utilise le hook useEffect pour déclencher la redirection vers "/NotFound" après le rendu initial du composant si selectedCard n'est pas trouvée
	useEffect(() => {
		if (!selectedCard) {
			navigate('/NotFound');
		}
	}, [selectedCard, navigate]); // Le tableau de dépendances [selectedCard, navigate] indique quand le useEffect doit être réexécuté

	// Si selectedCard est toujours introuvable, redirection vers "/NotFound"
	if (!selectedCard) {
		return navigate('/NotFound');
	}

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
