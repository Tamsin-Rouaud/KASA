import './Banner.sass'

// Définition du composant Banner comme une fonction qui prend des propriétés (backgroundImage et title)
const Banner = ({backgroundImage, title}) => {
    return (
        <div className="banner">
            <img className='banner__logo' src={backgroundImage} alt="Banner Image" />
            {/* Affiche le titre uniquement s'il est présent (non nul et non vide) */}
            {title && <h1 className='banner__title'>{title}</h1>}
        </div>
    );
};


export default Banner;