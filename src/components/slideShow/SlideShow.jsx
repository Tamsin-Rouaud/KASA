import { useState } from 'react';
import './SlideShow.sass';
import arrowSlide from '../../assets/images/ArrowSlide.png'; // Import de ma flèche

/* Le composant SlideShow crée un caroussel interactif d'images pour afficher les différentes photos d'un logement. Il est constitué de 2 flèches, et d'un compteur.
// Il prend en propriété "pictures" qui sera récupéré dans ma page ForRent */
const SlideShow = ({ pictures }) => {
	const arrow = arrowSlide;

	const [currentImageIndex, setCurrentImageIndex] = useState(0); // J'importe le hook useState et le définit à 0 afin de récupérer la position de l'index de mon img

	/* J'ai crée une première fonction "handleNextClick" qui s'éxécute en cliquant sur la flèche Next et permet de faire défiler les photos. Cette fonction gère aussi
	 le fait que lorsque l'on arrive à la fin du slide on rebascule sur la 1ère photo pour continuer le défilement des images.*/
	const handleNextClick = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
		);
	};

	/* J'ai crée une deuxième fonction "handlePrevClick" qui fonctionne de la même manière mais inversée. Lorsque l'on clique sur la flèche Previous et que l'utilisateur
	se situe au début du slide cela permettra de rebasculer sur la dernière photo. */
	const handlePrevClick = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
		);
	};

	return (
		<div className='slideshow'>
			{/* En premier lieu, je vérifie que le nombre de pictures soit supérieur à 1 et dans ce cas, j'insère les flèches "Next" et "Previous" sur chaque coté
			(droite et gauche) tout en insèrant le compteur au bas du conteneur. */}
			{pictures.length > 1 && (
				<>
					<img
						src={pictures[currentImageIndex]}
						alt=''
						className='slideshow__image'
					/>
					<div className='slideshow__arrow'>
						<img
							alt='Previous'
							className='slideshow__arrow--previous'
							src={arrow}
							onClick={handlePrevClick}
						/>
						<span>{`${currentImageIndex + 1} / ${pictures.length}`}</span>
						<img
							alt='Next'
							className='slideshow__arrow--next'
							src={arrow}
							onClick={handleNextClick}
						/>
					</div>
				</>
			)}
			{/* Dans un 2ème temps, dans le cas ou le nombre de photos (pictures) est inférieur ou égale à 1,
			alors les flèches et le compteur ne seront pas affichés.*/}
			{pictures.length <= 1 && (
				<img
					src={pictures[currentImageIndex]}
					alt=''
					className='slideshow__image'
				/>
			)}
		</div>
	);
};

export default SlideShow;
