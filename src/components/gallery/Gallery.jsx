
import Card from '../card/Card'; // Utilise le composant Card pour afficher les cartes
import jsonData from '../../data/logements.json';

const Gallery = () => {
  return (
    <ul className='card-container'>
      {jsonData.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </ul>
  );
};

export default Gallery;