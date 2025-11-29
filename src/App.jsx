function App() {
  return (
    <div>
      <div>
        {/* NAV */}
        <nav className="navbar navbar-expand-sm navbar-light bg-light mb-sm-5 mb-4">
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

        <section className="main-hero">
          <div className="hero-wrapper">
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

            <div className="hero-content container ">
              <div className=" row p-4 pb-0 pe-lg-0 pt-lg-3  rounded-3 border shadow bg-white">
                <div className="text-container col-sm-7 p-2 p-lg-5 pt-lg-3 bg-white">
                  <h1 className="display-6 fw-bold lh-1 text-body-emphasis bg-white">
                    HEY, I'M ASHRAF
                  </h1>
                  <p className="lead bg-white">
                    Quickly design and customize responsive mobile-first sites
                    with Bootstrap, the world’s most popular front-end open
                    source toolkit, featuring Sass variables and mixins,
                  </p>
                  <div className="button-container d-grid gap-2 d-sm-flex justify-content-md-start mb-lg-0 bg-white">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg px-2 me-sm-2 fw-bold"
                    >
                      view projects
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-lg px-3"
                    >
                      check out my blog
                    </button>
                  </div>
                </div>

                <img className="subimg" src="./webPictures.png" alt="" />

                <div className="img-container col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg bg-white rounded-3">
                  <img
                    className="rounded-3 bg-white"
                    src="./webPictures.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
