import { useParams } from 'react-router-dom';
import jsonData from '../../data/logements.json';
import starGrey from     '../../assets/images/starGrey.png' 
import starRed from '../../assets/images/starRed.png'
import './Host.sass';

const Host = () => {
  const { id } = useParams();

  const foundCard = jsonData.find((item) => item.id.toString() === id);

  if (!foundCard) {
    return <p>Logement introuvable</p>;
  }

  const generateRatingStars = (rating) => {
    const stars = [];
    const activeStar = starRed;
    const inactiveStar = starGrey;

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img
          key={i}
          className="star"
          src={i <= rating ? activeStar : inactiveStar}
          alt={`Star ${i}`}
        />
      );
    }
    return stars;
  };

  return (
    <div key={foundCard.id} className='host__container'>
      <div className='host__idBlock'>
        <p className='host__identity'>{foundCard.host.name}</p>
        <img className='host__image' src={foundCard.host.picture} alt={`photo of ${foundCard.host.name}`} />
      </div>
      <div className="host__ratingContainer">
        {generateRatingStars(foundCard.rating)}
      </div>
    </div>
  );
};

export default Host;
