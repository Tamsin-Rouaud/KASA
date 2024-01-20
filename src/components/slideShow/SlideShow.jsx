import { useState } from 'react';
import './SlideShow.sass';
import arrowSlide from '../../assets/images/ArrowSlide.png';

const SlideShow = ({ pictures }) => {
    const arrow = arrowSlide;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className='slideshow'>
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
        </div>
    );
};

export default SlideShow;
