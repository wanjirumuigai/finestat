import React, { useRef, useState } from "react";
import Heading from "../common/Heading";
import { contact } from "../data/dummydata";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [formData, setContact] = useState({
    user_name: "",
    user_email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lo8legp",
        "template_dc3ecqk",
        form.current,
        "EPkfjXhokXiFqDzqy"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setContact({
      user_name: "",
      user_email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };
  function handleFormChange(e) {
    setContact({ ...formData, [e.target.name]: e.target.value });
  }
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
                    value={formData.user_name}
                    required
                    onChange={(e) => handleFormChange(e)}
                  />
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    value={formData.user_email}
                    onChange={(e) => handleFormChange(e)}
                    required
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile No."
                  required
                  value={formData.phone}
                  onChange={(e) => handleFormChange(e)}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => handleFormChange(e)}
                />
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  required
                  value={formData.message}
                  onChange={(e) => handleFormChange(e)}
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
