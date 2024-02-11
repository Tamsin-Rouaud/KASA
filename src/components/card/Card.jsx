import './Card.sass';
import { Link } from 'react-router-dom';

/* Le composant Card est retourné dans un élément <li> qui représente chaque logement présent dans le composant Gallery
évoqué précedemment. Il prend en propriéte "card" qui sera implémenté dans le composant Gallery. */

const Card = ({ card }) => {
	return (
		<li className='card'>
			{/* Utilisation du composant Link pour créer un lien vers la page de détail du logement */}
			<Link to={`/ForRent/${card.id}`}>
				<img
					src={card.cover}
					alt={`Couverture de ${card.title}`}
					className='card__image'
				/>
				<figcaption className='card__title'>{card.title}</figcaption>
			</Link>
		</li>
	);
};

export default Card;

