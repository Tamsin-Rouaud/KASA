import starGrey from '../../assets/images/starGrey.png';
import starRed from '../../assets/images/starRed.png';
import './Host.sass';

/* Le composant Host a pour objectif d'afficher les informations relatives à l'utilisateur d'un logement, tel que son nom,
son prénom, sa photo et sa note. Je lui passe card en propriété qui permettra d'implémenter les données précitées 
lorsque le composant sera appelé sur la page ForRent*/

const Host = ({ card }) => {
	// Je commence par convertir en nombre entier la valeur de cardRating
	const rating = parseInt(card.rating, 10);

	// Je divise la chaîne 'name' en prénom et nom dans les variables firstName et lastName
	const [firstName, lastName] = card.host.name.split(' ');

	return (
		<div key={card.id} className='host__container'>
			<div className='hostIdBlock'>
				
				<p className='hostIdBlock__identity'>
					<span className='hostIdBlock__firstName'>{firstName}</span>

					<span className='hostIdBlock__lastName'>{lastName}</span>
				</p>
				{/*Je récupère l'image de mon Host*/}
				<img
					className='hostIdBlock__image'
					src={card.host.picture}
					alt={`photo of ${card.host.name}`}
				/>
			</div>
			<div className='hostIdBlock__ratingContainer'>
				{/*J'utilise la méthode map pour créer un tableau contenant 5 éléments
				Tant que i est inférieure à la valeur de rating, une star red sera ajouté
				si i est égale ou supérieur à la valeur de rating, dans ce cas une star grey viendra 
				complété le tableau. */}
				{[...Array(5)].map((_, i) => (
					<img
						key={i + 1}
						className='hostIdBlock__ratingContainer--star'
						src={i < rating ? starRed : starGrey}
						alt={`Star ${i + 1}`}
					/>
				))}
			</div>
		</div>
	);
};

export default Host;
