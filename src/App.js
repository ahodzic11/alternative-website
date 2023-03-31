import "./App.css";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import Statut from "./pages/Statut";
import RealAboutUs from "./pages/RealAboutUs";
import OthersAboutUs from "./pages/OthersAboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nastim" element={<AboutUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/statut" element={<Statut />} />
          <Route path="/onama" element={<RealAboutUs />} />
          <Route path="/drugionama" element={<OthersAboutUs />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
