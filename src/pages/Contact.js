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

  const warn = (notification) =>
    toast.error(notification, {
      autoClose: 3000,
    });

  const success = (notification) =>
    toast.success(notification, {
      autoClose: 3000,
    });

//   const handleNotify = (event) => {
//     const { target } = event;
//     const inputType = target.name;
//     const inputValue = target.value;

//     if (inputType === "email" && !validateEmail(email)) {
//       warn("Please enter a vaild email address.");
//     } else if (!inputValue.trim().length) {
//       warn(`Please enter your ${inputType}`);
//     }
//   };

  // Simply triggers a notification for now - will update with database at a later time
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!name.trim().length && !validateEmail(email) && !message.trim().length) {
      warn("All fields are required.");
    } else {
      if (!name.trim().length) {
        warn("Please enter your name.");
      } else if (!validateEmail(email)) {
        warn("Please enter a vaild email address.");
      } else if (!message.trim().length) {
        warn(`You don't want to send a blank message, do you?`);
      } else {
        success(`Your message has been sent successfully!`);
        setName("");
        setEmail("");
        setMessage("");
      }
    }
  };

  return (
    <main className="content-container">
      <div className="container flex-item flex-column">
        <h2 className="base-text">Get in Touch!</h2>
        <form className="flex-item flex-column">
          <input
            id="name"
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
            className="input-item"
            required
          />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="text"
            placeholder="Email address"
            className="input-item"
            required
          />
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Enter your message here"
            className="input-item"
            required
          />
          <button
            type="submit"
            onClick={handleFormSubmit}
            className="input-item button"
          >
            Send Message
          </button>
          <ToastContainer pauseOnFocusLoss={false} />
        </form>
      </div>
    </main>
  );
};

export default Contact;
