import React from 'react';
import linkedIn from '../img/linkedin-logo.webp';
import twitter from '../img/logo-Twitter.png';
import github from '../img/GitHub-Logo.png';

function Contact() {
  return (
    <div className="contact">
      <h1>How to Reach Me</h1>
      <div className="blockOne">
        <p className="icons">
          Linked: &nbsp;
          <a href="https://www.linkedin.com/in/newton-alumasa/"><img src={linkedIn} className="linkedin" alt="linked logo" /></a>
        </p>
        <p className="icons">
          Twitter: &nbsp;
          <a href="https://twitter.com/AlumasaNewton"><img src={twitter} className="twitter" alt="linked logo" /></a>
        </p>
        <p className="icons">
          GitHub: &nbsp;
          <a href="https://github.com/altontonn"><img src={github} className="github" alt="linked logo" /></a>
        </p>
      </div>
    </div>
  );
}
export default Contact;
