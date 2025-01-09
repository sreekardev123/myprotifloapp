import React from "react";
import Project from "../data/project.json";

const Projects = () => {
  return (
    <div id="project">
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        marginTop: "100px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#fff", marginBottom: "50px" }}>My Projects</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "50px",
          justifyContent: "center",
        }}
      >
        {Project.map((data) => (
          <div
            key={data.id}
             data-aos="flip-right"
          data-aos-duration="1000"
            style={{
              border:"1px solid yellow",
              boxShadow: "5px 3px 8px 10px rgba(101,175,101,0.5)",
              backgroundColor: "#212529",
              color: "#fff",
              borderRadius: "10px",
              height:"360px",
              width: "280px",
              textAlign: "center",
              padding: "15px",
             
            }}
          >
            {/* Center the image */}
            <img
              src={`/assets/${data.imgsrc}`}
              alt={data.title}
              style={{
                width: "260px",
                height: "200px",
                objectFit: "cover",
                display: "block",
                margin: "0 auto 15px",
                borderRadius: "8px",
                border:"2px solid yellow"
                
              }}
            />
            <h3 >
              {data.title}
            </h3>
            <p >
              {data.description}
            </p>
            <a
              href={data.Demo}
              target="_blank"
              rel="noopener noreferrer"

              style={{
                backgroundColor: "#0d6efd",
                color: "#fff",
                padding: "8px 15px",
                borderRadius: "5px",
                textDecoration: "none",
                
                
              }}
            >
              Demo
            </a>
            <a
              href={data.Github}
              target="_blank"
              rel="noopener noreferrer"
            
              style={{
                backgroundColor: "yellow",
                color: "blue",
                padding: "8px 15px",
                borderRadius: "5px",
                textDecoration: "none",
                marginLeft:"55px",
                
              }}
            >
              Github
            </a>

          </div>
        ))}
      </div>
    </div>

    </div>
  );
};

export default Projects;


