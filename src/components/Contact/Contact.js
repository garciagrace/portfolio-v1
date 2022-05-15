import React from 'react';
import { ContactSection, SendEmail } from './Contact.styled';

const Contact = () => {
  return (
    <ContactSection>
      <p>What’s Next? Get In Touch</p>
      <h4>Contact Me</h4>
      <p>
        My inbox is always open, whether you are interested in hiring me or to
        work on a project together, feel free to contact me.
      </p>

      <SendEmail href="/###">Send me an email</SendEmail>
    </ContactSection>
  );
};

export default Contact;
