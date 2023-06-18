import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  // const [data, setData] = useState({
  //   firstName: "",
  //   email: "",
  //   message: "",
  // });
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tipcnbm",
        "template_0srqlpf",
        form.current,
        "54R97qG2iGlAlRqOL"
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
      <section className="contact-section">
        <div className="wrapper">
          <div className="contact-container">
            <h1>
              Contact <span className="line"></span>
            </h1>

            <div className="contact-content">
              <div className="contact-info contact-col">
                <div className="card phone">
                  <h3>Phone:</h3>
                  <p>414-243-4862</p>
                </div>
                <div className="card email">
                  <h3>Email:</h3>
                  <p>vsvang@gmail.com</p>
                </div>
                <div className="card location">
                  <h3>LinkedIn:</h3>
                  <p>https://www.linkedin.com/in/vsvang</p>
                </div>
              </div>
              <div className="contact-form contact-col">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="input-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      name="from_name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      name="from_email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                      name="message"
                      cols="30"
                      rows="10"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="submit-btn">
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
