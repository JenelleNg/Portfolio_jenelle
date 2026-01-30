import React, { useRef, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "./projects";
import "./PortfolioFull.css";

export default function ProjectDetail() {
    const { projectId } = useParams();
    const project = projects.find(p => p.id === projectId);

    const modalRef = useRef(null);
    const modalImgRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!modalRef.current || modalRef.current.style.display !== "flex") return;
            if (!project) return;

            if (e.key === "ArrowRight") {
                const nextIndex = (currentIndex + 1) % project.images.length;
                setCurrentIndex(nextIndex);
                modalImgRef.current.src = project.images[nextIndex];
            }

            if (e.key === "ArrowLeft") {
                const prevIndex =
                    (currentIndex - 1 + project.images.length) % project.images.length;
                setCurrentIndex(prevIndex);
                modalImgRef.current.src = project.images[prevIndex];
            }

            if (e.key === "Escape") {
                closeModal();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentIndex, project]);

    // ✅ Early return AFTER hooks
    if (!project) {
        return (
            <div style={{ padding: "20px" }}>
                <h2>Project not found</h2>
                <Link to="/portfolio">Back to Portfolio</Link>
            </div>
        );
    }

    const openModal = (src, index) => {
        modalRef.current.style.display = "flex";
        modalImgRef.current.src = src;
        setCurrentIndex(index);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        modalRef.current.style.display = "none";
        document.body.style.overflow = "auto";
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
                                onClick={() => openModal(img, index)}
                            />
                        ))}
                    </div>

                    <button className="arrow right" onClick={() => scrollCarousel("right")}>&#10095;</button>
                </div>

                <div className="card">
                    <p><strong>Description:</strong> {project.description}</p>
                    <p><strong>Technologies used:</strong> {project.used}</p>

                    {/* Only show the link if project.link exists */}
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            {project.linkLabel || "View Project"}
                        </a>
                    )}
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
                <img ref={modalImgRef} className="modal-content" alt="Project Modal" />
                <p className="image-counter">
                    {currentIndex + 1} / {project.images.length}
                </p>
            </div>
        </div>
    );
}
