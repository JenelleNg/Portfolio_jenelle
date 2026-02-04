import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "./projects";
import "./PortfolioFull.css";

export default function PortfolioFull() {
    const categories = ["all", "vr", "web app", "mobile app", "design", "others"];
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredProjects = activeCategory === "all"
        ? projects
        : projects.filter(proj => proj.category === activeCategory);

    return (
        <div className="portfolio-page">
            <header className="top-bar">
                <h1 className="title">Projects</h1>
            </header>

            <div className="category-buttons">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={activeCategory === cat ? "active-cat" : ""}
                    >
                        {cat.toUpperCase()}
                    </button>
                ))}
            </div>

            <section className="projects-container">
                {filteredProjects.map((proj) => (
                    <div className="card project-cards" key={proj.id}>
                        <img src={proj.images[0]} alt={proj.title} />
                        <h2>{proj.title}</h2>
                        <Link to={`/portfolio/${proj.id}`}>
                            <button style={{fontFamily:"time new roman", color: "#1B4965"}}>View</button>
                        </Link>
                    </div>
                ))}
            </section>
        </div>
    );
}
