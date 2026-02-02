import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

export default function PortfolioFull() {
    const projects = [
        {
            id: "gpa",
            title: "GPA Tracker",
            description: "Built with Python, HTML, and JavaScript. Includes module editing, GPA calculations, and dynamic form updates.",
            image: "/images/GPATracker.png",
            used: "Python, HTML, JavaScript",
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
