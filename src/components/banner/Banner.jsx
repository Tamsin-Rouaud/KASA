import './Banner.sass'

const Banner = ({backgroundImage, title}) => {
    return (
        <div className="banner">
            <img className='banner__logo' src={backgroundImage} alt="Banner Image" />
            {title && <h1 className='banner__title'>{title}</h1>}
        </div>
    );
};


export default Banner;