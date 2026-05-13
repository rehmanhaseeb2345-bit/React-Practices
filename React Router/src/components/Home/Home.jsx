import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-wrapper">
      <aside className="home-hero">
        <div className="home-hero-content">
          <div className="home-hero-text">
            <h2 className="home-hero-title">
              Build Beautiful
              <span className="home-hero-subtitle">Web Experiences</span>
            </h2>

            <Link className="home-download-btn" to="/contact">
              <svg
                fill="white"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13 3L16.293 6.293 9.293 13.293 10.707 14.707 17.707 7.707 21 11V3H13Z" />
                <path d="M19 19H5V5H12L10 3H5C3.897 3 3 3.897 3 5V19C3 20.103 3.897 21 5 21H19C20.103 21 21 20.103 21 19V14L19 12V19Z" />
              </svg>
              &nbsp; Start a Project
            </Link>
          </div>
        </div>

        <div className="home-hero-image">
          <img
            src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Developers collaborating"
          />
        </div>
      </aside>

      <div className="home-image-center">
        <img
          src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Modern code editor"
        />
      </div>

      <h1 className="home-tagline">Crafting modern React experiences</h1>
    </div>
  );
}
