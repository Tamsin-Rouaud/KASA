import './Card.sass';
import jsonData from '../../data/logements.json'
import { Link } from 'react-router-dom';


const Card = () => {
    return (
        <ul className='card-container'>
            {jsonData.map(cardList => (

                    <li className='card' key={cardList.id}>
                         <Link to={`/ForRent/${cardList.id}`}>
                        <img src={cardList.cover} alt={`Couverture de ${cardList.title}`} className="card__image" />
                        <figcaption className='card__title'>{cardList.title}</figcaption>
                        </Link>

                    </li>
                
            ))}
            
        </ul>
    );
};

export default Card;
