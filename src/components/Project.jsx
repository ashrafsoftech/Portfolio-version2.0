import "../componenetsCSS/project.css";
const Project = () => {
  return (
    <main className="project mt-3 bg-body-tertiary">
      <section className="project-hero text-center ">
        <div className="container">
          <div className="row py-3">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Project Album</h1>
              <p className="lead text-body-secondary">
                Dive into projects I’ve designed and developed — where ideas
                turn into interactive digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="album py-2 ">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
            {/* 1st project */}
            <div className="col">
              <div className="card shadow-sm overlay-card">
                <img src="../taskifysplash.png" alt="taskify" className="" />
                <div className="card-body ">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a
                        href="https://taskify-2025.netlify.app"
                        className="btn btn-sm btn-outline-secondary"
                        target="_blank"
                        
                        rel="noopener noreferrer"
                      >
                        View
                      </a>

                      <a
                        href="#"
                        className="btn btn-sm btn-outline-secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Comment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd project */}
            <div className="col">
              <div className="card shadow-sm overlay-card">
                <img src="../backroads.jpeg" alt="backroads" className="" />
                <div className="card-body ">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a
                        href="https://my-backroad.netlify.app"
                        className="btn btn-sm btn-outline-secondary"
                        target="_blank"
                        
                        rel="noopener noreferrer"
                      >
                        View
                      </a>

                      <a
                        href="#"
                        className="btn btn-sm btn-outline-secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Comment
                      </a>
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
