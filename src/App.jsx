import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {MovieProvider} from "./contexts/MovieContext";
import NavBar from "./components/NavBar";
import MovieDetails from "./pages/MovieDetails.jsx";

function App() {
  return (
    <>
      <MovieProvider>
        <NavBar/>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </main>
      </MovieProvider>
    </>
  );
}

export default App;
