import React from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";


export default function Navbar() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]); 

    return (
        <nav className="navbar">
            <img src="/images/logo.png" alt="Logo" className="logo" />
            <div className="nav-links">
                <Link to="/">
                    <img src="/images/home-icon.png" alt="Home" className="nav-icon" />
                    <span>Home</span>
                </Link>
                <Link to="/about">
                    <img src="/images/about-icon.png" alt="About" className="nav-icon" />
                    <span>About</span>
                </Link>
                <Link to="/portfolio">
                    <img src="/images/portfolio-icon.png" alt="Portfolio" className="nav-icon" />
                    <span>Portfolio</span>
                </Link>
                <Link to="/contact">
                    <img src="/images/contact-icon.png" alt="Contact" className="nav-icon" />
                    <span>Contact</span>
                </Link>
            </div>
        </nav>
    );
}
