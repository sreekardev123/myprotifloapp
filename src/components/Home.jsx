import React, { useRef, useEffect } from "react";
import hero from "../data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null); 

  useEffect(() => {
    const options = {
      strings: [ 
        "Welcome to My Profile",
        "My Name is Karanam Sreekar",
        "I'm a Frontend React Developer",
      ],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy(); 
    };
  }, []);

  return (
    <>
      <div className="container home">
        <div className="left"  data-aos="fade-up-right"
          data-aos-duration="1000"

        >
          <h1 ref={typedRef}></h1>

          <button className="myresume">
           <a href="https://bit.ly/3B4cW3C"
            target="_blank"
            rel="noopener noreferrer">
            Download Resume</a>
        </button>
        </div>

        <div className="right" data-aos="fade-up-left"
          data-aos-duration="1000">
          <div className="img">
            <img src={`/assets/${hero.imgsrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

