import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { validateEmail } from "../utils/helpers";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const notify = (message) => toast.error(message);

    if (!validateEmail(email)) {
      notify("Please enter a valid email address.");
    } else if (!name) {
      notify("Please enter your name.");
    } else if (!message) {
      notify(
        `You don't want to send a blank message, do you? Write me something!`
      );
    } else {
      notify(`Your message has been sent successfully`);
    }
  };

  return (
    <div className="container flex-item flex-column">
      <h2 className="base-text">Get in Touch!</h2>
      <form>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          className="input-item"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email address"
          className="input-item"
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter your message here"
          className="input-item"
        />
        <button type="submit" onClick={handleFormSubmit}>
          Submit
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Contact;
