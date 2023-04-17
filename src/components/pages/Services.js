import React from "react";
import Heading from "../common/Heading";
import { services } from "../data/dummydata";

export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <Heading title="Services" />
        <div className="content grid3" data-aos="flip-left">
          {services.map((item, i) => (
            <div className="box">
              <i>{item.icon}</i>
              <i>{item.title}</i>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
