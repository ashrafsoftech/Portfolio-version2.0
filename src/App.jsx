function App() {
  return (
    <div>
      {/* NAV */}
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="nav-content container-fluid">
          <a
            href="/"
            className="d-flex align-items-center mb-md-0 me-sm-auto link-body-emphasis text-decoration-none bg-white"
          >
            <img
              src="./profile2.jpg"
              alt=""
              className="bg-white"
              width="50"
              height="50"
            />
          </a>
          <a className="navbar-brand bg-white" href="#">
            AshrafSoftech
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bg-white"></span>
          </button>
          <div
            className="collapse navbar-collapse bg-white justify-content-end ms-auto"
            id="navbarsExample03"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
              <li className="nav-item bg-white">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item bg-white">
                <a className="nav-link" href="#">
                  Project
                </a>
              </li>
              <li className="nav-item bg-white">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item bg-white">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="home-body container-fluid">
        <div className="sidebar">
          <a target="_blank" href="https://github.com/ashrafsoftech">
            <img src="./github.svg" alt="github" />
          </a>
          <a target="_blank" href="#">
            <img src="./linkedin.svg" alt="github" />
          </a>
          <a target="_blank" href="https://twitter.com/AsharfAriy44884">
            <img src="./twitter.svg" alt="github" />
          </a>
          <a target="_blank" href="https://wa.me/234816892838">
            <img src="./whatsapp.svg" alt="github" />
          </a>
        </div>

        <div className="hero-container d-sm-flex d-grid">
          <div className="hero col-sm-6 col-7 text-container p-3">
            <h3>HEY, I'M ASHRAF - FrontEnd Developer</h3>
            <p>
              I’m a Frontend Developer passionate about building modern web
              experiences that blend usability, performance, and thoughtful
              design. I love taking concepts from rough sketches to polished
              digital products, creating interfaces that are responsive,
              accessible, and enjoyable to interact with. My goal is to build
              websites that make a lasting impression while keeping the user’s
              needs at the center of every decision.
            </p>
            <div className="button-container d-sm-flex gap-2 d-grid px-sm-0 px-3">
              <button type="button" className="btn btn-primary">
                view projects
              </button>
              <button type="button" className="btn btn-outline-secondary">
                check out my blog
              </button>
            </div>
          </div>

          <div className="hero-img col-sm-6 col-5">
            <img src="./webPictures.png" alt="web img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
