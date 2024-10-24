import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Films from "./pages/films/Films";
import Navigation from "./pages/navigation/Navigation";
import Results from "./pages/results/Results";
import Home from "./pages/home/Home";
import About from "./pages/about/About";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Films />} />
          <Route path="/results" element={<Results />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
