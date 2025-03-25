import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="about" className="hero">
            <h1>Hi, I'm [Your Name]</h1>
            <h2>Frontend Developer</h2>
            <p>
                I build responsive web applications with modern technologies.
                Passionate about creating clean, efficient code and intuitive user experiences.
            </p>
            <div className="cta-buttons">
                <a href="#projects" className="cta-primary">View My Work</a>
                <a href="#contact" className="cta-secondary">Contact Me</a>
            </div>
        </section>
    );
};

export default Hero;