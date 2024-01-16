
import './Banner.sass'
import PropTypes from 'prop-types';


const Banner = ({backgroundImage, title}) => {
    return (
        <div className="banner">
            <img className='banner__logo' src={backgroundImage} alt="Banner Image" />
            {title && <h1 className='banner__title'>{title}</h1>}
        </div>
    );
};

Banner.propTypes = {
    backgroundImage:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired
}







// const Banner = () => {
//     return (
//         <div className='banner'>
//             <img className='banner__logo' />
//         </div>
//     );
// };

export default Banner;