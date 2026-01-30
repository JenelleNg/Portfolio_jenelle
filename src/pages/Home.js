import React from "react";
import About from "./About.js";
import Portfolio from "./Portfolio.js";

export default function Home() {
    return (
        <div>
            <div
                className="hero-bg"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/backgroundimg.png'})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundBlendMode: 'overlay',
                    backgroundColor: 'rgba(216, 236, 246, 0.7)',
                }}
            >
                <h1>
                    Jenelle’s<br/>
                    <span className="highlight">Developer & Designer</span><br/>
                    Portfolio
                </h1>
                <a href="/portfolio" className="btn">View Portfolio</a>
            </div>

            <About />
            <Portfolio />
        </div>
    );
}
