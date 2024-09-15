import React from 'react';
import type { Contact } from '../types/AppType';

const Contact: React.FC<{ contact: Contact | undefined }> = ({ contact }) => (
  <div className="section" id="info-mobile">
    <ul>
      <li>
        <i className="fa fa-phone" aria-hidden="true"></i>&emsp;{contact?.phone}
      </li>
      <li>
        <i className="fa fa-globe" aria-hidden="true"></i>&emsp;{contact?.address}
      </li>
      <li>
        <i className="fa fa-envelope-o" aria-hidden="true"></i>
        <a target="_blank" href={`mailto:${contact?.email}`} rel="noopener noreferrer">
          &emsp;{contact?.email}
        </a>
      </li>
      <li>
        <i className="fa fa-github" aria-hidden="true"></i>
        <a id="github-link" href={contact?.socialLinks.github} rel="noopener noreferrer">
          &emsp;Github
        </a>
      </li>
      <li>
        <i className="fa fa-linkedin" aria-hidden="true"></i>
        <a target="_blank" id="linkedin-link" href={contact?.socialLinks.linkedin} rel="noopener noreferrer">
          &emsp;LinkedIn
        </a>
      </li>
    </ul>
  </div>
);

export default Contact;
