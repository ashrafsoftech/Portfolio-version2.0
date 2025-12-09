import Reveal from "./Reveal";

const Home = () => {
  return (
    <div className="home-body container-fluid">
      {/* SIDEBAR REVEAL */}
      <Reveal className="sidebar-reveal">
        <div className="sidebar">
          <a target="_blank" href="https://github.com/ashrafsoftech">
            <img src="../github.svg" alt="github" />
          </a>

          <a target="_blank" href="#">
            <img src="../linkedin.svg" alt="linkedin" />
          </a>

          <a target="_blank" href="https://twitter.com/AsharfAriy44884">
            <img src="../twitter.svg" alt="twitter" />
          </a>

          <a target="_blank" href="https://wa.me/234816892838">
            <img src="../whatsapp.svg" alt="whatsapp" />
          </a>
        </div>
      </Reveal>

      {/* HERO SECTION REVEAL */}
      <Reveal>
        <div className="hero-container d-sm-flex d-grid bg-white shadow">
          <div className="hero col-sm-6 col-7 text-container p-3">
            <h3>HEY, I'M ASHRAF - FrontEnd Developer</h3>

            <p>
              I’m a Frontend Developer passionate about building modern web
              experiences that blend usability, performance, and thoughtful
              design. I love taking concepts from rough sketches to polished
              digital products, responsive, accessible and enjoyable to use.
            </p>

            <div className="button-container d-sm-flex gap-2 d-grid px-sm-0 px-3">
              <a href="#project" className="btn btn-primary">
                view projects
              </a>

              <a href="#about" className="btn btn-outline-secondary">
                learn more
              </a>
            </div>
          </div>

          <div className="hero-img col-sm-6 col-5">
            <img src="../webPictures.png" alt="web img" />
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Home;
