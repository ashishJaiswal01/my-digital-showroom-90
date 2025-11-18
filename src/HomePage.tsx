import React from "react";
import "./styles.css";

export const HomePage = () => {
  return (
    <div>

      {/* Profile Header */}
      <header className="profile-header">
        <h1>My Profile Summary</h1>

        <p>
            Senior Engineering Leader with around 20 years of experience leading global teams in building high-
            reliability, cloud-native (AWS/Multi-Cloud) SaaS platforms. Demonstrated success in scaling
            engineering organizations, driving AI/ML initiatives (Generative AI, MLOps), and executing multi-million-
            dollar programs. Possesses deep expertise in event-driven distributed systems, API-first microservices,
            CI/CD pipelines, cybersecurity, and regulatory compliance — consistently advancing engineering
            velocity and operational excellence. PMI-ACP certified.
        </p>

        <a
          href="https://ashishjaiswal01.github.io/profile/"
          className="resume-link"
          target="_blank"
        >
          View My Resume
        </a>
      </header>

      {/* App Tiles */}
      <main className="app-grid">

        {/* Tile 1: AI Career Chat Resume */}
        <a
          className="app-tile"
          href="https://huggingface.co/spaces/ashish-portfolio/career_conversation"
          target="_blank"
        >
          <div>
            <h2>AI Career Chat Resume 🤖</h2>
            <p>
              A dynamic, interactive AI version of my resume. Ask questions about my
              career and get instant answers — hosted on Hugging Face Space.
            </p>
          </div>
          <span className="link-text">Launch</span>
        </a>

        {/* Tile 2 */}
        <a className="app-tile" href="#">
          <div>
            <h2>Portfolio Tracker 📈</h2>
            <p>Real-time market analytics and dashboards.</p>
          </div>
          <span className="link-text">Launch</span>
        </a>

        {/* Tile 3 */}
        <a className="app-tile" href="#">
          <div>
            <h2>Smart Task Manager ✅</h2>
            <p>ML-based productivity & task optimization.</p>
          </div>
          <span className="link-text">Launch</span>
        </a>

      </main>

    </div>
  );
};
