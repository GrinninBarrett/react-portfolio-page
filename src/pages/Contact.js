import React, { useState } from 'react';
import styled from 'styled-components';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { validateEmail } from '../utils/helpers';

// Styled Components
const StyledMain = styled.main`
  min-height: 80vh;
`;

const StyledEmail = styled.a`
  color: var(--green-accent);
  &:hover {
    color: var(--red-accent);
  }
`;

const StyledForm = styled.form`
  width: 50%;
  margin-bottom: 4rem;

  @media screen and (max-width: 992px) {
    width: 80%;
  }
`;

const StyledInput = styled.input`
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 3px var(--medium-gray);
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 2em;
  padding: 8px 0 8px 8px;
  font-size: 1em;

  &:focus {
    outline: none;
    border: none;
    box-shadow: 0 5px 10px var(--medium-gray);
  }
`;

const StyledTextArea = styled.textarea`
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 3px var(--medium-gray);
  transition: all 0.3s ease;
  height: 100px;
  width: 100%;
  margin-top: 2em;
  padding: 8px 0 8px 8px;
  font-size: 1em;

  &:focus {
    outline: none;
    border: none;
    box-shadow: 0 5px 10px var(--medium-gray);
  }
`;

const StyledButton = styled.button`
  text-align: center;
  font-size: 1em;
  width: 30%;
  margin-top: 2em;
  padding: 8px 0;
  border-radius: 20px;
  border: none;
  background-color: var(--green-accent);
  color: var(--light-text);
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    box-shadow: 0 5px 10px var(--medium-gray);
  }

  @media screen and (max-width: 992px) {
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const StyledContactByEmail = styled.h3`
  @media screen and (max-height: 750px) {
    margin-bottom: 4em;
  }
`;

// Component function
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

  return (
    <StyledMain>
      <div className="container flex-item flex-column">
        <h2 className="base-text">Get in Touch!</h2>
        <StyledForm className="flex-item flex-column">
          <StyledInput
            key="name"
            id="name"
            value={name}
            name="name"
            onChange={handleInputChange}
            // onBlur={handleNotify}
            type="text"
            placeholder="Name"
            className="input-item quicksand"
            required
          />
          <StyledInput
            key="email"
            value={email}
            name="email"
            onChange={handleInputChange}
            // onBlur={handleNotify}
            type="text"
            placeholder="Email address"
            className="input-item quicksand"
            required
          />
          <StyledTextArea
            key="message"
            value={message}
            name="message"
            onChange={handleInputChange}
            // onBlur={handleNotify}
            type="text"
            placeholder="Enter your message here"
            className="input-item quicksand"
            required
          />
          <StyledButton
            type="submit"
            onMouseDown={preventBlur}
            onClick={handleFormSubmit}
            className="input-item button quicksand"
          >
            Send Message
          </StyledButton>
          <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
        </StyledForm>
      </div>
      <div class="container flex-item flex-column">
        <StyledContactByEmail className="base-text center">
          This form is still under development, so currently it will not send me
          anything. <br></br> <br></br> You can get in touch anytime by sending
          me an email at{' '}
          <StyledEmail
            href="mailto:ctbarrett.tech@gmail.com"
            rel="noreferrer"
            target="_blank"
            id="email"
          >
            ctbarrett.tech@gmail.com
          </StyledEmail>
          !
        </StyledContactByEmail>
      </div>
    </StyledMain>
  );
};

export default Contact;
