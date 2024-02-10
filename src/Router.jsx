// Import des composants nécessaires de la bibliothèque React-Router
// BrowserRouter permet à mon application de gérer la navigation et d'afficher des composants en fonction de l'URL du navigateur
// Routes sert de conteneur pour les routes
// Route sert à définir les routes spécifiques 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import ForRent from './pages/ForRent/ForRent.jsx';

// Définition de mon composant AppRouter encapsulant la configuration de mon routeur
function AppRouter() {
	return (
		
		<div className='AppRouter'>
			{/* Utilisation de BrowserRouter en tant que Router*/}
			<Router>
				{/* Utilisation de Routes comme container de mes différentes Route */}
				<Routes>
					{/* Définition de chacune de mes routes avec le composant Route */}
					<Route path='/' element={<Home />} />
					<Route path='/About' element={<About />} />
					
					<Route path='/ForRent/:id' element={<ForRent />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Router>
		</div>
	);
}

export default AppRouter;
