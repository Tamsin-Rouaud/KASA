import './Collapse.sass';
import { useState } from 'react';
import arrow from '../../assets/images/arrow.png';

/* Le composant collapse offre une solution permettant d'afficher ou de masquer le contenu de manière interactive.
Il prend en propriétés un titre et un contenu qui sera implémenté au travers de la page dans laquelle le composant sera appelé.*/

const Collapse = ({ title, content }) => {

	// Pour gérer l'état local de Collapse, j'utilise le hook useState initialisé à true permettant d'évalué la valeur de "isCollapsed".
	const [isCollapsed, setCollapsed] = useState(true);

	/* Je crée ensuite une fonction toggleCollapse déterminant la position de mon collapse en fonction de si 
	l'utilisateur à cliqué sur la barre de mon collapse (collapse__header).*/
	const toggleCollapse = () => {
		setCollapsed(!isCollapsed);
	};

	// 
	return (
		<div className='collapse'>
			<div className='collapse__header' onClick={toggleCollapse}>
				<span className='collapse__title'>{title}</span>
				{/* J'ajoute la flèche à mon collapse via la balise img, si mon isCollapsed est évalué à true, 
				alors la className --up sera ajouté et dans le cas contraire, c'est la className --down qui sera 
				ajouté jouant ainsi la transition sur la flèche en fonction de la className qui sera ajoutée. */}
				<img
					className={`collapse__arrow${isCollapsed ? '--up' : '--down'}`}
					src={arrow}
					alt='Voir le contenu'
				/>
			</div>
			{/*Cette partie fonctionne de la même manière, elle évalue la valeur de isCollapsed et en fonction ajoutera ou non
			la className --hidden à mon contenu permettant de jouer la transition dans un sens ou dans l'autre.*/}
			<div className={`collapse__text${isCollapsed ? '' : '--hidden'}`}>
				<div>{content}</div>
			</div>
		</div>
	);
};

export default Collapse;

 