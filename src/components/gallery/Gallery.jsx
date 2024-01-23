import './Gallery.sass'
import SlideShow from '../slideShow/SlideShow'

const Gallery = ({ card }) => {
    return (
        <div className='gallery'>
                      
                <SlideShow pictures={card.pictures} />
            
        </div>
    );
};

export default Gallery;
