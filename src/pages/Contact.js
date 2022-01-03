import React, { useState } from 'react';
import styled from 'styled-components';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { validateEmail } from '../utils/helpers';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // const [submitClicked, setSubmitClicked] = useState(false);

  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const warn = (notification) => {
    toast.error(notification, {
      autoClose: 3000,
    });
  };

  const success = (notification) => {
    toast.success(notification, {
      autoClose: 3000,
    });
  };

  // This prevents the blur event, which causes multiple notifications
  const preventBlur = (event) => {
    event.preventDefault();
  };

  // const handleNotify = (event) => {
  //   const { target } = event;
  //   const inputType = target.name;
  //   const inputValue = target.value;
  //   console.log(typeof inputType);

  //   if (!submitClicked) {
  //     if (!inputValue.trim().length) {
  //       warn(`Your ${inputType} is required.`);
  //     }
  //   }

  //   setSubmitClicked(false);
  // };

  // Simply triggers a notification for now - will update with database at a later time
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // setSubmitClicked(true);

    if (
      !name.trim().length &&
      !validateEmail(email) &&
      !message.trim().length
    ) {
      warn('All fields are required.');
    } else {
      if (!name.trim().length) {
        warn('Please enter your name.');
      } else if (!validateEmail(email)) {
        warn('Please enter a vaild email address.');
      } else if (!message.trim().length) {
        warn(`You don't want to send a blank message, do you?`);
      } else {
        success(`Your message has been sent successfully!`);
        setName('');
        setEmail('');
        setMessage('');
      }
    }
  };

  const StyledEmail = styled.a`
    color: var(--green-accent);
    &:hover {
      color: var(--red-accent);
    }
  `;

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
            // onBlur={handleNotify}
            type="text"
            placeholder="Name"
            className="input-item"
            required
          />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            // onBlur={handleNotify}
            type="text"
            placeholder="Email address"
            className="input-item"
            required
          />
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            // onBlur={handleNotify}
            type="text"
            placeholder="Enter your message here"
            className="input-item"
            required
          />
          <button
            type="submit"
            onMouseDown={preventBlur}
            onClick={handleFormSubmit}
            className="input-item button"
          >
            Send Message
          </button>
          <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
        </form>
      </div>
      <div class="container flex-item flex-column">
        <h3 className="base-text center">
          You can also send an email anytime at{' '}
          <StyledEmail
            href="mailto:ctbarrett.tech@gmail.com"
            rel="noreferrer"
            target="_blank"
            id="email"
          >
            ctbarrett.tech@gmail.com
          </StyledEmail>
          !
        </h3>
      </div>
    </main>
  );
};

export default Contact;
