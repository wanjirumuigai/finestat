import { Visibility } from "@mui/icons-material";

import React, { useState } from "react";
import Heading from "../common/Heading";
import { portfolio } from "../data/dummydata";

const Portfolio = () => {
  const [list, useList] = useState(portfolio);
  return (
    <>
      <article>
        <div className="container">
          <Heading title="Portfolio" />
          <div className="catButton">Some of Our Clients </div>

          <div className="content grid3">
            {list.map((item) => (
              <div className="box">
                <div className="img">
                  <img src={item.cover} alt="" />
                </div>
                <div className="overlay">
                  <h3>{item.title}</h3>
                  <span>{item.name}</span>
                  <Visibility />
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};

export default Portfolio;
