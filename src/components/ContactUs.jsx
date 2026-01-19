import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pq3wajk', 'template_e4uvzdz', form.current, {
        publicKey: 'fV376gmfKdT2_Cxwz',
      })
      .then(
        () => {
          alert('Message send successfully!')
          console.log('SUCCESS!');
        },
        (error) => {
          alert('Failed to send message, please try again.', error);
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="p-3 flex flex-col gap-3 text-left w-100  sm:w-130 md:w-160" >
        <label htmlFor="name" >Name</label>
        <input type="text" name="name" className="border p-1 rounded mb-3"/>
        <label htmlFor="email" >Email Address</label>
        <input type="text" name="email" className="border p-1 rounded mb-3"/>
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" className="border p-1 rounded mb-3"/>
        <label htmlFor="message">Your Message</label>
        <textarea name="message" className="border p-1 rounded mb-5 h-30"></textarea>
        <input type="submit" value="Send" className="p-1 ml-auto bg-blue-500 w-20 rounded hover:bg-blue-300 cursor-pointer" />
    </form>
  );
};