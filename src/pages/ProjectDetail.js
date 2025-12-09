import React, { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "./projects";
import "./PortfolioFull.css";

export default function ProjectDetail() {
    const { projectId } = useParams();
    const project = projects.find(p => p.id === projectId);

    const modalRef = useRef(null);
    const modalImgRef = useRef(null);

    if (!project) {
        return (
            <div style={{ padding: "20px" }}>
                <h2>Project not found</h2>
                <Link to="/portfolio">Back to Portfolio</Link>
            </div>
        );
    }

    const openModal = (src) => {
        modalRef.current.style.display = "flex";
        modalImgRef.current.src = src;
    };

    const closeModal = () => {
        modalRef.current.style.display = "none";
    };

    const scrollCarousel = (direction) => {
        const carousel = document.getElementById("project-carousel");
        const distance = direction === "left" ? -300 : 300;
        carousel.scrollLeft += distance;
    };

    return (
        <div className="section">
            <div className="portfolio-page" style={{ padding: "20px" }}>
                <h1>{project.title}</h1>

                <div className="carousel-container">
                    <button className="arrow left" onClick={() => scrollCarousel("left")}>&#10094;</button>
                    <div className="carousel" id="project-carousel">
                        {project.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`${project.title} ${index + 1}`}
                                className="project-img"
                                onClick={() => openModal(img)}
                            />
                        ))}
                    </div>
                    <button className="arrow right" onClick={() => scrollCarousel("right")}>&#10095;</button>
                </div>

                <div className="card">
                    <p><strong>Description:</strong> {project.description}</p>
                    <p><strong>Technologies used:</strong> {project.used}</p>
                </div>

                <Link className="btn" to="/portfolio">Back to Portfolio</Link>
            </div>

            <div
                ref={modalRef}
                className="modal"
                onClick={(e) => {
                    if (e.target === modalRef.current) closeModal();
                }}
            >
                <span id="closeModal" onClick={closeModal}>&times;</span>
                <img ref={modalImgRef} className="modal-content" alt="Project Modal"/>
            </div>
        </div>
    );
}
