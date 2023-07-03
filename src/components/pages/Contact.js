import React, { useRef } from "react";
import Heading from "../common/Heading";
import { contact } from "../data/dummydata";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rysm5kb",
        "template_v92qrp9",
        form.current,
        "dUiFIP5aarRV0h-6h"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="contact">
        <div className="container">
          <Heading title="Get in Touch" />
          <div className="content flexsb">
            <div className="right">
              <form ref={form} onSubmit={sendEmail}>
                <div className="flex">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile No."
                  required
                />
                <input type="text" placeholder="Subject" required />
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  required
                ></textarea>
                <button>Submit</button>
              </form>
            </div>
            <div className="left">
              {contact.map((item) => (
                <div className="box">
                  <i>{item.icon}</i>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
