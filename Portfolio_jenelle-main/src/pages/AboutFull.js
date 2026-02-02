import React, { useState, useRef } from "react";
import "./AboutFull.css";

export default function AboutFull() {
    const [activeCategory, setActiveCategory] = useState("frontend");
    const modalRef = useRef(null);
    const modalImgRef = useRef(null);

    const categories = [
        { id: "frontend", name: "Frontend Development" },
        { id: "backend", name: "Backend / APIs" },
        { id: "software", name: "Software / Testing" },
        { id: "design", name: "Digital Design / Creative Tools" }
    ];

    const certs = {
        frontend: [
            "JavaScript Enhancing the DOM.png",
            "JavaScript Web Form Programming.png",
            "HandsOn Introduction React.png",
            "Create a Quick Clean and Cheap Website with Bootstrap Templates.png"
        ],
        backend: [
            "Node.js Essential Training.png",
            "Programming Foundations APIs and Web Services 2019.png"
        ],
        software: [
            "Software Testing Foundations Test Planning.png",
            "Software Testing Foundations Test Techniques.png",
            "Software Testing Foundations Bug Writing and Management.png",
            "Unit Testing and Test Driven Development in Python.png",
            "ISTQB Foundation Cert Prep.png",
            "Project Management Foundations Requirements.png",
            "Agile Foundation.png",
            "What Is Scrum.png"
        ],
        design: [
            "Photoshop 2021 Quick Start.png",
            "Illustrator 2023 Quick Start.png"
        ]
    };

    const openModal = (src) => {
        modalRef.current.style.display = "flex";
        modalImgRef.current.src = src;
    };

    const closeModal = () => {
        modalRef.current.style.display = "none";
    };

    const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const scrollCarousel = (category, direction) => {
    const carousel = document.getElementById(`carousel-${category}`);
    const distance = direction === "left" ? -300 : 300;
    const duration = 400;
    const start = carousel.scrollLeft;
    const startTime = performance.now();

    const animate = (time) => {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        carousel.scrollLeft = start + distance * easeInOutQuad(progress);
        if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
};


    return (
        <div className="section about-page">
            <div className="top-section">
                <img src="/images/penguin.jpg" className="profile-pic" alt="Profile" />
                <img src="/images/bird2.png" className="bird2" alt="Bird 2" />

                <div className="about-text">
                    <h1>About Me</h1>
                    <p>
                        I am Jenelle. I'm currently a student in Republic Polytechnic Design, Digital and
                        Development, SOI, graduating in 2026. I am passionate about creating user-centered 
                        digital solutions through full-stack development, UI/UX design, and emerging technologies 
                        such as AR/VR and AI. I approach challenges with creativity, innovation, and teamwork
                        in agile environments, and I am particularly interested in AI—how it is programmed
                        and how it can enhance user experiences to solve real-world problems.
                    </p>

                    <h1>Interests</h1>
                    <p>
                        In my free time, I build wooden figurines, LEGO creations, crochet stuff animals/keychains, 
                        or play online games with friends.
                    </p>
                </div>
            </div>

            <div className="card journey">
                <img src="/images/bird1.png" className="bird1" alt="Bird 1" />
                <h1 className="section-title">Journey/Education</h1>
                <h2>Republic Polytechnic</h2>
                <p>Diploma in Digital Design and Development (Graduating in 2026)</p>
                <h2>Canberra Secondary School</h2>
                <p>GCE 'O' Levels (2020-2023)</p>
            </div>

            <div className="card skills">
                <h1 className="section-title">Skills</h1>
                <div className="skills-grid">
                    <div>
                        <h2>Technical skills:</h2>
                        <p>
                            HTML/CSS<br/>
                            JavaScript<br/>
                            Python<br/>
                            SQL<br/>
                            React<br/>
                            React Native<br/>
                            Node.js<br/>
                            UI/UX Design<br/>
                            AR/VR experiences
                        </p>
                    </div>
                    <div>
                        <h2>Soft skills:</h2>
                        <p>
                            Critical Thinking<br/>
                            Collaboration & Teamwork<br/>
                            Flexibility<br/>
                            Positive Attitude<br/>
                            Problem-Solving<br/>
                            Self-Motivation<br/>
                            Time Management
                        </p>
                    </div>
                </div>
            </div>

            <div className="card goals">
                <h1 className="section-title">Goals</h1>
                <p>My goal is to have a life that I am grateful for. :D</p>
            </div>

            <div className="card certificates">
                <h1 className="section-title">Certificates</h1>

                <div className="cert-category">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            className={`category-btn ${activeCategory === cat.id ? "active" : ""}`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {categories.map(cat => (
                    <div
                        key={cat.id}
                        className={`carousels-container ${activeCategory === cat.id ? "active" : ""}`}
                    >
                        <button className="arrow left" onClick={() => scrollCarousel(cat.id, "left")}>&#10094;</button>
                        <div className="carousels" id={`carousel-${cat.id}`}>
                            {certs[cat.id].map(cert => (
                                <img
                                    key={cert}
                                    src={`/images/certificates/${cert}`}
                                    className="cert rotate"
                                    alt={cert}
                                    onClick={() => openModal(`/images/certificates/${cert}`)}
                                />
                            ))}
                        </div>
                        <button className="arrow right" onClick={() => scrollCarousel(cat.id, "right")}>&#10095;</button>
                    </div>
                ))}
            </div>

            <div
                ref={modalRef}
                className="modal"
                onClick={(e) => {
                    if (e.target === modalRef.current) {
                        closeModal();
                    }
                }}
            >
                <span id="closeModal" onClick={closeModal}>&times;</span>
                <img ref={modalImgRef} className="modal-content" alt="Certificate Modal"/>
            </div>
        </div>
    );
}
