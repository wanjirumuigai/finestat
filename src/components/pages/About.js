import React from "react";
import Heading from "../common/Heading";
import { about } from "../data/dummydata";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-right">
                <img src="../src/images/" alt="" />
              </div>
              <div className="right" data-aos="fade-down-left">
                <Heading title="About Us" />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
