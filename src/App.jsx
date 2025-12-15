import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

import { useState, useEffect } from "react";

import Home from "./components/Home";

import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) setDarkMode(JSON.parse(savedTheme));
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);
  useEffect(() => {
    const navbar = document.querySelector(".navbar");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navbar.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(navbar);
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-light mb-sm-0">
        <div className="container-fluid nav-content">
          {/* BRAND */}
          <div className="d-flex align-items-center flex-grow-1 flex-md-grow-0">
            <h1 className="m-0">
              <a className="navbar-brand bg-white" href="#home">
                Ashraf Softech
              </a>
            </h1>
          </div>

          {/* RIGHT */}
          <div className="d-flex align-items-center gap-sm-3 gap-1 ms-auto order-md-3">
            <div className="sun-icon-wrapper" onClick={toggleTheme}>
              <img
                src={darkMode ? "./moon.svg" : "./sun.svg"}
                alt="theme"
                className="sun-icon"
              />
            </div>

            <div className="profile-ring">
              <img className="ring-img" src="./profile.jpg" />
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          {/* NAV LINKS */}
          <div
            className="collapse navbar-collapse justify-content-center order-md-2 mt-3"
            id="navbarNav"
          >
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#project" className="nav-link">
                  Project
                </a>
              </li>
              <li className="nav-item">
                <a href="#about-skills" className="nav-link">
                  Skills
                </a>
              </li>

              <li className="nav-item">
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* PAGE SECTIONS */}
      <section id="home">
        <Home />
      </section>
      <section id="project">
        <Project />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>

      {/* BACK TO TOP BUTTON */}
      <BackToTop />
    </div>
  );
}

export default App;
