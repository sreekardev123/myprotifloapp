import React from "react";
import Skills from "../data/skills.json";

const Skill = () => {
  return (
    <div className="container skills" id="skills">
      <h1 className="my">My Skills</h1><br></br>
      
      <div className="items">
        {Skills.map((data) => (
          <>
            <div className="item" key={data.id}
             data-aos="flip-left"
          data-aos-duration="1000"
            >
              <img
                style={{ height:"" }}
                src={`/assets/${data.imgsrc}`}
                alt="data"
              />
              <h3>{data.title}</h3>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Skill;
