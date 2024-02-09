import './Collapse.sass';
import { useState } from 'react';
import arrow from '../../assets/images/arrow.png';

const Collapse = ({ title, content }) => {
	// Paramétrage de l'état local de mon composant en définissant mon useState à true
	const [isCollapsed, setCollapsed] = useState(true);

	const toggleCollapse = () => {
		setCollapsed(!isCollapsed);
	};

	return (
		<div className='collapse'>
			<div className='collapse__header' onClick={toggleCollapse}>
				<span className='collapse__title'>{title}</span>
				<img
					className={`collapse__arrow${isCollapsed ? '--up' : '--down'}`}
					src={arrow}
					alt='Voir le contenu'
				/>
			</div>

			<div className={`collapse__text${isCollapsed ? '--hidden' : ''}`}>
				<div>{content}</div>
			</div>
		</div>
	);
};

export default Collapse;
