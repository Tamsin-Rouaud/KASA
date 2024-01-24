import './Card.sass';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
  return (
    <li className='card'>
      <Link to={`/ForRent/${card.id}`}>
        <img src={card.cover} alt={`Couverture de ${card.title}`} className="card__image" />
        <figcaption className='card__title'>{card.title}</figcaption>
      </Link>
    </li>
  );
};

export default Card;