import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nxwn5s5', 'template_9zn0bjk', form.current, {
        publicKey: 'pRMbCxIyIZkSdzecw',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Title</label> <br />
      <input type="text" name="title" /> <br />
      <label>Name</label> <br />
      <input type="text" name="from_name" /> <br />
      <label>Email</label> <br />
      <input type="email" name="from_email" /> <br />
      <label>Message</label> <br />
      <textarea name="message" /> <br /> 
      {/* <input type="submit" value="Send" /> <br /> */}
      <button type="submit">Send</button>
    </form>
  );
};