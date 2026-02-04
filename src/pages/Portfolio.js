import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

export default function PortfolioFull() {
    const projects = [
        { 
        id: "inexapp", 
        title: "Income & Expense Manager", 
        category: "mobile app", 
        description: "A simple app to track income and expenses. Adding and editing income or expense and a button that calculates the totals and the surplus/deficit.", 
        used: "React, JavaScript, CSS",
        image: "/images/inexapp.png", 
    },
        {
            id: "vr-escape",
            title: "VR Escape Room",
            description: "Designed and developed in Unity using custom puzzle logic.",
            image: "/images/escaperoom.png",
            used: "Unity, C#",
        },
    ];

    return (
        <div className="section">
            <h1 className="section-title">My Projects</h1>

            {projects.map((project) => (
                <div className="project-card card" key={project.id}>
                    <img src={project.image} alt={project.title} />
                    <div className="project-info">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <Link className="btn" to={`/portfolio/${project.id}`}>View</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
