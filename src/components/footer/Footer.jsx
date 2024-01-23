
import './Footer.sass'
import footerLogoDesktop from  '../../assets/images/footerLogoDesktop.png'


const Footer = () => {
    return (
        
            <footer className='footer'>
                
                <img src={footerLogoDesktop} className ="footer__logo" alt="Logo Kasa" />
                
                <p className='footer__content' >&copy; 2020 Kasa. All rights reserved</p>
                
            </footer>
        
    );
};

export default Footer;