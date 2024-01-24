import { useState } from 'react';
import './SlideShow.sass';
import arrowSlide from '../../assets/images/ArrowSlide.png';

const SlideShow = ({ pictures }) => {
    const arrow = arrowSlide;
    // État local pour suivre l'index de l'image actuelle
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Fonction pour gérer le clic sur la flèche précédente
    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
    };
    // Fonction pour gérer le clic sur la flèche suivante
    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className='slideshow'>
            {/* Vérifie si il y a plus d'une image */}
            {pictures.length > 1 && (
                <>
                    <img src={pictures[currentImageIndex]} alt='' className='slideshow__image' />
                    <div className='slideshow__arrow'>
                        <img alt='Previous' className="slideshow__arrow--previous" src={arrow} onClick={handlePrevClick} />
                        <span>{`${currentImageIndex + 1} / ${pictures.length}`}</span>
                        <img alt='Next' className="slideshow__arrow--next" src={arrow} onClick={handleNextClick} />
                    </div>
                </>
            )}
            {/* Rend l'image elle-même même s'il n'y en a qu'une */}
            {pictures.length <= 1 && (
                <img src={pictures[currentImageIndex]} alt='' className='slideshow__image' />
            )}
        </div>
    );
};

export default SlideShow;
