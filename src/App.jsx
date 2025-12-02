import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Optional: persist theme across reloads
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) setDarkMode(JSON.parse(savedTheme));
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-light mb-sm-4 mb-2">
        <div className="container-fluid nav-content">
          {/* LEFT — BRAND */}
          <div className="d-flex align-items-center flex-grow-1 flex-md-grow-0">
            <h1 className="m-0">
              <NavLink className="navbar-brand bg-white" to="/">
                Ashraf Softech
              </NavLink>
            </h1>
          </div>

          {/* RIGHT — ICONS (still beside toggler on mobile) */}
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
            {/* TOGGLER — stays far right */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          {/* CENTER — NAV LINKS */}
          <div
            className="collapse navbar-collapse justify-content-center order-md-2"
            id="navbarNav"
          >
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/project" className="nav-link">
                  Project
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog" className="nav-link">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ROUTING */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
