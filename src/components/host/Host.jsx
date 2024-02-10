import starGrey from '../../assets/images/starGrey.png';
import starRed from '../../assets/images/starRed.png';
import './Host.sass';

const Host = ({ card }) => {
	const rating = parseInt(card.rating, 10);

	// Divise la chaîne 'name' en prénom et nom
	const [firstName, lastName] = card.host.name.split(' ');

	return (
		<div key={card.id} className='host__container'>
			<div className='hostIdBlock'>
				{/* Utilise les variables firstName et lastName */}
				<p className='hostIdBlock__identity'>
					<span className='hostIdBlock__firstName'>{firstName}</span>

					<span className='hostIdBlock__lastName'>{lastName}</span>
				</p>
				<img
					className='hostIdBlock__image'
					src={card.host.picture}
					alt={`photo of ${card.host.name}`}
				/>
			</div>
			<div className='hostIdBlock__ratingContainer'>
				{/* Utilisation de la méthode map pour créer un tableau contenant 5 éléments
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
