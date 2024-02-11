import logo from '../../assets/images/logoDesktop.png'; // Import du logo Kasa
import { Link, useLocation } from 'react-router-dom';
import './Header.sass';

/* Le composant Header repésente la barre de navigation principale, il contient le logo et les liens de navivation de ma page.
J'utilise useLocation() pour obtenir des informations sur l'URL actuelle afin d'ajuster dynamiquement les classes des liens permettant d'appliquer des styles
 spécifiques à la navigation plus particulièrement l'underline pour la page active.*/

const Header = () => {
	const location = useLocation(); // useLocation fournit des infos sur l'URL actuelle via l'objet localisation
	return (
		<header className='header'>
			<img src={logo} className='header__logo' alt='Logo Kasa' />
			<nav className='header__navbar'>
				<ul>
					<li>
						<Link
							className={`header__link ${
								location.pathname === '/' && 'header__link--active'
							}`}
							to='/'
						>
							Accueil
						</Link>
					</li>
					<li>
						<Link
							className={`header__link ${
								location.pathname === '/About' && 'header__link--active'
							}`}
							to='/About'
						>
							À propos
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
export default Header;
