// NotFound.js
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Error from '../../components/error/Error';
import './NotFound.sass';

const NotFound = () => {
	return (
		<div className='error__container'>
			<Header />
			<Error />
			<Footer />
		</div>
	);
}

export default NotFound;
