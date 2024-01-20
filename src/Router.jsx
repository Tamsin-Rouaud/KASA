// Router.js

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import ForRent from "./pages/ForRent/ForRent.jsx";

function AppRouter() {
  return (
    <div className="AppRouter">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
       <Route path="/ForRent/:id" element={<ForRent/>} />
        <Route path="*" element={<NotFound/>} />

      </Routes>
    </Router>
    </div>
  );
}

export default AppRouter;
