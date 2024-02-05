import logo from '../../assets/images/logoDesktop.png'
import { Link, useLocation } from 'react-router-dom';
import './Header.sass';

const Header = () => {
    // Utilisation de useLocation pour obtenir l'objet location qui contient des informations sur l'URL actuelle.
    const location = useLocation();

    return (
        <header className='header'>
            <img src={logo} className ="header__logo" alt="Logo Kasa" />
            <nav className='header__navbar' >
                <ul>
                    <li>
                        <Link className={`header__link ${location.pathname === '/' && 'header__link--active'}`} to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link className={`header__link ${location.pathname === '/About' && 'header__link--active'}`} to="/About">À propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

