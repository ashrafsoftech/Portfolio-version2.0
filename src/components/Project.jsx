import "../componenetsCSS/project.css";
import { useEffect, useState } from "react";

const Project = () => {
  const [expandedCards, setExpandedCards] = useState({});

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealElements.forEach((el) => observer.observe(el));
  }, []);

  const toggleReadMore = (cardId) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  return (
    <main className="project mt-3 bg-body-tertiary">
      <section className="project-hero text-center">
        <div className="container">
          <div className="row py-3">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Project Album</h1>
              <p className="lead text-body-secondary">
                Dive into projects I've designed and developed — where ideas
                turn into interactive digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="album py-2">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-center">
            {/* 1st project - Taskify */}
            <div className="col reveal">
              <div className="card shadow-sm overlay-card">
                <img src="../taskifysplash.png" alt="taskify" className="" />
                <div className="card-body">
                  <p className="card-text">
                    <b>Taskify</b> is a clean and intuitive task management app
                    that helps you organize your daily activities efficiently.
                    {expandedCards["taskify"] && (
                      <span>
                        Built with React, it features task creation, editing,
                        deletion, and status tracking with a modern, responsive
                        interface. Perfect for anyone looking to boost
                        productivity and stay organized.
                      </span>
                    )}
                  </p>
                  <button
                    onClick={() => toggleReadMore("taskify")}
                    className="btn btn-link p-0 text-decoration-none read-more-btn"
                  >
                    {expandedCards["taskify"] ? "Read Less" : "Read More"}
                  </button>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <a
                      href="https://taskify-2025.netlify.app"
                      className="btn btn-sm btn-outline-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>

                    <div
                      className="d-flex align-items-center gap-3"
                      style={{ marginRight: "2em" }}
                    >
                      <img
                        src="./skillIcons/react.png"
                        alt="React"
                        className="project-skills"
                      />
                      <img
                        src="./skillIcons/css.png"
                        alt="CSS"
                        className="project-skills"
                      />
                      <img
                        src="./skillIcons/js.png"
                        alt="JavaScript"
                        className="project-skills"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd project - Assouq */}
            <div className="col reveal">
              <div className="card shadow-sm overlay-card">
                <img src="./1.png" alt="taskify" className="" />
                <div className="card-body">
                  <p className="card-text">
                    <b>Assouq</b> is a responsive e-commerce web interface
                    inspired by modern online marketplaces. The project focuses
                    on
                    {expandedCards["taskify"] && (
                      <span>
                        clean UI design, structured layouts, and user-friendly
                        navigation for browsing products, categories, and
                        promotions. It demonstrates strong frontend skills in
                        building scalable and responsive shopping experiences.
                      </span>
                    )}
                  </p>
                  <button
                    onClick={() => toggleReadMore("taskify")}
                    className="btn btn-link p-0 text-decoration-none read-more-btn"
                  >
                    {expandedCards["taskify"] ? "Read Less" : "Read More"}
                  </button>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <a
                      href="https://assouq.netlify.app"
                      className="btn btn-sm btn-outline-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>

                    <div
                      className="d-flex align-items-center gap-3"
                      style={{ marginRight: "2em" }}
                    >
                      <img
                        src="./skillIcons/react.png"
                        alt="React"
                        className="project-skills"
                      />
                      <img
                        src="./skillIcons/css.png"
                        alt="CSS"
                        className="project-skills"
                      />
                      <img
                        src="./skillIcons/js.png"
                        alt="JavaScript"
                        className="project-skills"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Project;
