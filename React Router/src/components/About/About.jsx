import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-inner">
          <div className="about-image-wrapper">
            <img
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=700"
              alt="Team collaborating on a project"
            />
          </div>
          <div className="about-content">
            <span className="about-label">Our Story</span>
            <h2 className="about-title">
              We build React apps that users actually love using
            </h2>
            <hr className="about-divider" />
            <p className="about-text">
              ReactCraft was born from a simple belief — great software should
              feel effortless. Our team of passionate developers specialises in
              building fast, accessible, and beautiful React applications that
              solve real problems for real people.
            </p>
            <p className="about-text">
              From sleek landing pages to complex dashboards, we bring the same
              obsession with craft to every project. Clean code, thoughtful UX,
              and performance that speaks for itself.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
