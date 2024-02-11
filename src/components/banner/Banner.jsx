import './Banner.sass';

/* Le composant Banner représente la bannière de l'application Kasa que l'on retrouve sur la page d'accueil et sur la page "à propos". 
Il prend en propriétés une backgroundImage et un titre, l'image de fond sera récupérée directement dans les composants des pages concernées.
Le titre, quant à lui ne sera récupéré que si il est précisé dans la page ou  il devrait s'afficher, dans le cas contraire, rien ne sera rendu.*/

const Banner = ({ backgroundImage, title }) => {
	return (
		<div className='banner'>
			{/* Mon composant retourne une image avec l'attribut alt */}
			<img className='banner__logo' src={backgroundImage} alt='Banner Image' />
			{/* Affiche le titre uniquement s'il est présent  */}
			{title && <h1 className='banner__title'>{title}</h1>}
		</div>
	);
};

export default Banner;


