import React from "react";
import About from "./About.js";
import Portfolio from "./Portfolio.js";

export default function Home() {
    return (
        <div>

            <div
                className="cloud-bg"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/backgroundimg.png'})` }}
            >
                <h1>Jenelle’s<br/>Developer & Designer<br/>Portfolio</h1>
            </div>

            <About />
            <Portfolio />
        </div>
        
    );
}
