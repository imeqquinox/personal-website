import React from 'react'
import EmailJS from '@emailjs/browser'

import './css/Contact.css';

function Contact() {

  function SendEmail(event) {
    event.preventDefault(); 

    EmailJS.sendForm('service_8yywu54', 'template_6srhn5g', event.target, 'AMQP6AKoXSh4zayMk')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

      event.target.reset();
  }

  return (
    <section className='contact' id='contact'>
      <h1>Contact</h1>

      <div className='form_container'>
        <form onSubmit={SendEmail}>
          <label>Name</label>
          <input type='text' name='name' />

          <label>Email</label>
          <input type='email' name='email' />

          <label>Subject</label>
          <input type='text' name='subject' />

          <label>Message</label>
          <textarea name='message' rows='4' />
          <input type='submit' value='Send' />
        </form>
      </div>
    </section>
  )
}

export default Contact