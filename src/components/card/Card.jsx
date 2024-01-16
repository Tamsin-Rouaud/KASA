// Card.jsx

import PropTypes from 'prop-types';
import './Card.sass';

const Card = ({ data }) => {
    return (
        <div className='card-container'>
            {data.map(cardData => (
                <div key={cardData.id} className='card'>
                    <img className='card__image' src={cardData.cover} alt={`Couverture de ${cardData.title}`} />
                    <h2 className='card__title'>{cardData.title}</h2>
                </div>
            ))}
        </div>
    );
};

Card.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            cover: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            // ... autres propriétés
        })
    ).isRequired
};

export default Card;