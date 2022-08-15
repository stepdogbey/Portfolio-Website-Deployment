import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

function Contact() {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dogbeystephen@gmail.com</h5>
            <a href="mailto:dogbeystephen@gmail.com"> Send me a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineTwitter className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>00000000000000000</h5>
            <a href="https://api.whatsapp.com/send?phone+233240553221">
              {" "}
              Send me a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5> Steve Worth</h5>
            <a href="https://twitter.com"> Send me a message</a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your full Name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
