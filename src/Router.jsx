// Router.js

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"; // Importez vos différentes pages
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
