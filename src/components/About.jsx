import Reveal from "./Reveal";
import "../componenetsCSS/about.css";
const About = () => {
  return (
    <main className="about py-5 bg-body-tertiary">
      <div className="container-lg">
        <h1 className="fw-bold text-center">About Me</h1>

        <div className="row mt-5 gap-lg-0 gap-2">
          {/* BIO CARD */}
          <div className="bio col-lg-8 d-lg-grid d-sm-flex d-grid gap-2">
            <Reveal>
              <div className="card shadow-sm border-0 p-4 h-100 col-lg-12 col-md-6 col-sm-6">
                <p className="lead text-body-secondary">
                  My name is
                  <span className="fw-bold"> Ariyibi Ashraf </span>, and I’m a
                  front-end developer with a strong foundation in HTML, CSS,
                  JavaScript, React, and Bootstrap. I originally studied
                  <span className="fw-bold">
                    Materials and Metallurgical Engineering
                  </span>
                  , but limited opportunities in the field led me to explore web
                  development — a decision that changed my career path
                  completely.
                  <br />
                  <br />
                  Over time, I’ve grown passionate about building modern,
                  responsive, and accessible user interfaces. I enjoy turning
                  ideas into functional, visually appealing web experiences and
                  constantly learning new technologies. My long-term goal is to
                  expand into backend development and become a complete
                  full-stack developer.
                </p>
              </div>
            </Reveal>

            {/* SKILLS CARD */}
            <Reveal>
              <div
                id="about-skills"
                className="skills card shadow-sm border-0 p-4 h-100 col-lg-12 col-md-6 text-center"
              >
                <div>
                  <h5 className="fw-bold mb-3">My Skills</h5>

                  <div className="skills-buttons d-flex flex-wrap justify-content-center gap-2 mb-4">
                    <button className="skill-btn">
                      <img src="/skillIcons/html.svg" alt="html" /> HTML5
                    </button>
                    <button className="skill-btn">
                      <img src="/skillIcons/css.png" alt="css" /> CSS3
                    </button>
                    <button className="skill-btn">
                      <img src="/skillIcons/js.png" alt="JS" /> JavaScript
                      (ES6+)
                    </button>
                    <button className="skill-btn">
                      <img src="/skillIcons/react.png" alt="react" /> React
                    </button>
                    <button className="skill-btn">
                      <img src="/skillIcons/bootstrap.jpeg" alt="bootstrap" />
                      Bootstrap
                    </button>
                    <button className="skill-btn">
                      <img src="/skillIcons/responsive.png" alt="responsive" />
                      Responsive Design
                    </button>
                  </div>
                </div>

                <div>
                  <h6 className="fw-bold mb-3">
                    Currently Learning / Next Goals
                  </h6>

                  <div className="skills-buttons d-flex flex-wrap justify-content-center gap-2">
                    <button className="skill-btn">
                      <img src="/skillIcons/backend.jpeg" alt="backend" />
                      Backend Development
                    </button>
                    <button className="skill-btn">
                      <img src="/skillIcons/node.png" alt="node" /> Node.js /
                      Express
                    </button>
                    <button className="skill-btn">
                      <img src="/skillIcons/mongoDB.png" alt="mongoDB" />
                      MongoDB
                    </button>
                    <button className="skill-btn">
                      <img src="/skillIcons/postgresql.png" alt="postgresql" />
                      PostgreSQL
                    </button>
                    <button className="skill-btn">
                      <img src="/skillIcons/fullstack.jpeg" alt="fullstack" />
                      Full-Stack Workflows
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          
            <div className="journey card shadow-sm border-0 p-4 h-100 col-lg-4 reveal">
              <h4 className="fw-bold">🟨 MY WEB DEVELOPMENT JOURNEY</h4>
              <p className="lead text-body-secondary">
                My journey into tech began with curiosity — exploring how
                websites were built and how interactive designs came to life. I
                started learning the basics, building small projects, fixing
                errors, and improving every day. Over time, I developed a strong
                understanding of modern UI development: Creating responsive
                layouts Writing clean and maintainable code Building reusable
                components in React Styling with modern CSS and frameworks Each
                project pushes me to learn more, and I’m constantly expanding my
                skills with the goal of becoming a full-stack engineer.
              </p>
            </div>
          
        </div>
      </div>
    </main>
  );
};

export default About;
