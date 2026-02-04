import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutFull from "./pages/AboutFull";
import PortfolioFull from "./pages/PortfolioFull";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutFull />} />
                <Route path="/portfolio" element={<PortfolioFull />} />
                <Route path="/portfolio/:projectId" element={<ProjectDetail />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}
