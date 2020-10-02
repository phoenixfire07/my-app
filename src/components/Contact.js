import React, {Fragment} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


export default function Contact() {

  return (
    <Fragment>
      <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>       
        <div id="contact-section" className=" pt-4 contact-container">
            <h1 className="contact-heading pl-2 pb-3">Get in touch</h1>
            <a href="tel:+1-203-550-8303" className="contact-text pl-3 pt-3">(US) 203-550-8303</a>
            <br></br>
            <a href = "mailto: phoebestaab@gmail.com" className="contact-text pl-3 pt-3">phoebestaab@gmail.com</a>
            <br></br>
            <a className="contact-text pl-3 pt-1" href="https://www.linkedin.com/in/phoebe-staab-52587b150/">linkedin</a>
        </div>
      </ScrollAnimation>
    </Fragment>
  );
}
