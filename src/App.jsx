import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light mb-sm-4 mb-2">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          {/* LEFT SIDE BRAND */}
          <div className="d-flex align-items-center">
            <h1 className="m-0">
              <NavLink className="navbar-brand bg-white" to="/">
                Ashraf Softech
              </NavLink>
            </h1>
          </div>

          {/* PROFILE ICON — ALWAYS VISIBLE */}
          <div className="d-flex align-items-center order-sm-3 ms-3">
            <div className="profile-ring">
              <img src="./profile2.jpg" className="ring-img" alt="profile" />
            </div>
          </div>

          {/* NAV TOGGLER */}
          <button
            className="navbar-toggler order-sm-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
          >
            <span className="navbar-toggler-icon bg-white"></span>
          </button>

          {/* COLLAPSIBLE NAV MENU */}
          <div
            className="collapse navbar-collapse bg-white justify-content-end order-sm-1"
            id="navbarsExample03"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-sm-0 align-items-center">
              <li className="nav-item bg-white">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>

              <li className="nav-item bg-white">
                <NavLink to="/project" className="nav-link">
                  Project
                </NavLink>
              </li>

              <li className="nav-item bg-white">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>

              <li className="nav-item bg-white">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>

              {/* SUN ICON — collapses with menu */}
              <li className="nav-item bg-white ms-3">
                <div className="sun-icon-wrapper">
                  <img src="./sun.svg" alt="theme" className="sun-icon" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ROUTING */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
