import React, { useEffect } from 'react'
import EmailJS from '@emailjs/browser'

import './css/Contact.css';

function Contact() {
  const observer = new IntersectionObserver(entries => {
    
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('contact_fade');
      }
    })
  });

  useEffect(() => {
    observer.observe(document.querySelector('.contact'));
  })

  function SendEmail(event) {
    event.preventDefault(); 

    EmailJS.sendForm('service_8yywu54', 'template_6srhn5g', event.target, 'AMQP6AKoXSh4zayMk')
      .then((result) => {
        console.log(result.text);
        if (result.text === 'OK') {
          alert("Message sent!");
        }
      }, (error) => {
        alert("Sorry something went wrong, please try again.")
        console.log(error.text);
      });

      event.target.reset();
  }

  return (
    <div className='contact_wrapper'>
      <section className='contact' id='contact'>
        <h1>Contact</h1>

        <div className='form_container'>
          <form onSubmit={SendEmail}>
            <label>Name</label>
            <input className='form_input' type='text' name='name' required/>

            <label>Email</label>
            <input className='form_input' type='email' name='email' required/>

            <label>Subject</label>
            <input className='form_input' type='text' name='subject' required/>

            <label>Message</label>
            <textarea className='form_text' name='message' rows='8' required/>
            <input className='form_button' type='submit' value='Send' />
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact