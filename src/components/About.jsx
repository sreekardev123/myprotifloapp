
import React from "react";
import boy from "../data/boy.json";

const About = () => {
  return (
    <div className="container">
      <div className="image"  data-aos="zoom-in"
          data-aos-duration="1000">
        <img className="hero" src={`/assets/${boy.imgsrc}`} alt="boy" />
      </div>  
      
      <section className="about-me" id="about">
        <h1> Get To  Know </h1>
        <h1>About Me</h1>
        <p>
          Hello! I'm a passionate Frontend Developer specializing in creating
          <br></br>
          responsive and user-friendly web applications. I have experience
          <br></br>
          working with technologies like HTML, CSS, JavaScript, React.js, and
          <br></br>
          modern web development tools. As a fresher, I'm eager to apply my
          <br></br>
          skills to solve real-world problems and contribute to impactful
          <br></br>
          projects.
        </p>
        
        <p>
          I enjoy learning new technologies, optimizing performance, and
          <br></br>
          focusing on clean, maintainable code. I'm excited about building
          <br></br>
          visually appealing interfaces that enhance user experiences.<br></br>
        </p>
      </section>
      <button className="connect">Let's Talk</button>
    </div>
  );
};

export default About;
