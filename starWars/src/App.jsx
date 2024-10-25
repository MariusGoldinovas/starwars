import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Films from "./pages/films/Films";
import Navigation from "./pages/navigation/Navigation";
import Results from "./pages/results/Results";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Planets from "./pages/planets/Planets";
import StarShips from "./pages/starships/StarShips";
import People from "./pages/people/People";

function App() {
  return (
    <BrowserRouter>
      <div className="container vh-100">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Films />} />
          <Route path="/results/:episode_id" element={<Results />} />
          <Route path="/about" element={<About />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/starships" element={<StarShips />} />
          <Route path="/people" element={<People />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
