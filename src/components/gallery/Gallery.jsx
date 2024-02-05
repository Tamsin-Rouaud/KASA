
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

//  Le composant Gallery fonctionne comme un conteneur dynamique qui affiche les 
//  cards générées à partir des données JSON. Chaque carte de logement est rendue en utilisant 
//  le composant Card, ce qui permet une mise en page modulaire et réutilisable 
//  pour chaque logement dans la galerie.