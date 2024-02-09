import { Link } from 'react-router-dom';
import './Error.sass';

const Error = () => {
	return (
		<div className='error'>
			<p className='error__number'>404</p>
			<p className='error__content'>
				Oups! La page que vous demandez n'existe pas.
			</p>
			<Link to='/' className='error__backlink'>
				Retourner sur la page d’accueil
			</Link>
		</div>
	);
};

export default Error;
