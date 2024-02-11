import Card from '../card/Card'; 
import jsonData from '../../data/logements.json';

/* Le composant Gallery est retourné dans un élément <ul> et sert de conteneur affichant les cards. Chaque card sera rendue en utilisant 
la méthode.map() pour itérer au travers de nos données JSON permettant une mise en page modulaire et réutilisable pour chaque logement de la galerie.*/

const Gallery = () => {
	return (
		<ul className='card-container'>
			{jsonData.map((card) => (
				<Card key={card.id} card={card} />
			))}
		</ul>
	);
};

export default Gallery;

