import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-box">
          <div className="contact-grid">
            <div className="contact-info">
              <h1 className="contact-title">Let's work together</h1>
              <p className="contact-subtitle">
                Tell us about your project and we'll get back to you within 24 hours.
              </p>

              <div className="contact-detail">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="contact-icon"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="contact-detail-text">
                  ReactCraft HQ<br />
                  340 Pine Street, Suite 800<br />
                  San Francisco, CA 94104
                </div>
              </div>

              <div className="contact-detail">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="contact-icon"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="contact-detail-text">+1 (415) 555-0182</div>
              </div>

              <div className="contact-detail">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="contact-icon"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="contact-detail-text">hello@reactcraft.dev</div>
              </div>
            </div>

            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label-hidden">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label-hidden">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label-hidden">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Project Type (e.g. Web App, Dashboard)"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label-hidden">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="form-input form-textarea"
                />
              </div>

              <button type="submit" className="form-submit">
                Send Message &rarr;
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
