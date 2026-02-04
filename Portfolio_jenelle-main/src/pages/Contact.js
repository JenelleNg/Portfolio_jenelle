import React from "react";
import "./Contact.css";

export default function Contact() {
    return (
        <div>
            <h1 className="contact-title">Contact</h1>

            <section className="contact-list">
                <div className="contact-item">
                    <img src="/images/phone.png" className="contact-icon" alt="Phone" />
                    <span>+65 9674 4379</span>
                </div>

                <div className="contact-item">
                    <img src="/images/gmail.png" className="contact-icon" alt="Email" />
                    <span>24013515@myrp.edu.sg</span>
                </div>

                <div className="contact-item">
                    <img src="/images/linkedin.png" className="contact-icon" alt="LinkedIn" />
                    <a href="http://www.linkedin.com/in/jenelleng" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>

                <div className="contact-item">
                    <img src="/images/github.png" className="contact-icon" alt="GitHub" />
                    <a href="https://github.com/JenelleNg?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </section>
        </div>
    );
}
