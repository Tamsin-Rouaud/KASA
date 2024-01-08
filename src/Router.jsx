// Router.js

import { BrowserRouter as Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Importez vos différentes pages
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="*" component={NotFound} />
      
    </Routes>
  );
};

export default AppRouter;
