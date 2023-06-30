import React from "react";
import { social } from "../data/dummydata";

const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item) => (
          <>
            <a href={item.url} target="_blank">
              {item.icon}
            </a>
          </>
        ))}
        <p>All Rights Reserved 2023</p>
      </footer>
    </>
  );
};

export default Footer;
