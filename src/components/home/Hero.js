import React, { useState } from "react";
import { home } from "../data/dummydata";
import Typewriter from "typewriter-effect";
import Contact from "../pages/Contact";
import { useHistory } from "react-router-dom";

const Hero = () => {
  const history = useHistory();
  function handleConsultation() {
    history.push("/contact");
  }

  return (
    <section className="hero">
      {home.map((val, i) => (
        <div className="heroContent">
          <h3>{val.text}</h3>
          <h1>
            <Typewriter
              options={{
                strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p>{val.desc}</p>
          <button className="primaryBtn" onClick={handleConsultation}>
            Book Consultation
          </button>
        </div>
      ))}
    </section>
  );
};

export default Hero;
