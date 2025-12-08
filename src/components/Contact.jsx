import "../componenetsCSS/contact.css";
import React, { useState, useEffect } from "react";
// import emailjs from "@emailjs/browser";

const Contact = () => {
  const [status, setStatus] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        e.target,
        "your_public_key"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          e.target.reset();
        },
        () => {
          setStatus("Something went wrong. Try again.");
        }
      );
  };

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.2 }
    );

    revealElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="contact reveal" id="contact">
      <h1 className="fw-bold text-center mb-4 reveal">CONTACT US</h1>

      <img src="./profile.jpg" alt="profile" className="profile-img reveal" />

      <div className="profile-card reveal">
        <p className="contact-text">
          I'm currently taking on freelance work. If you're interested in
          working with me, use the form below. Want to know more? Check my{" "}
          <a href="#project">projects</a> and{" "}
          <a target="blank" href="#resume">
            resume
          </a>
          .
        </p>

        <p className="social-title">You can also find me here:</p>

        <div className="social-row reveal">
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
      </div>

      <h2 className="form-title reveal">Get In Touch</h2>

      <form className="contact-form reveal" onSubmit={sendMessage}>
        <input type="text" name="user_name" placeholder="Name" required />
        <input type="email" name="user_email" placeholder="Email" required />
        <textarea
          name="message"
          placeholder="Enter your message"
          rows="6"
          required
        ></textarea>

        <button type="submit" className="send-btn">
          Send Message
        </button>

        <p className="status">{status}</p>
      </form>
    </section>
  );
};

export default Contact;
