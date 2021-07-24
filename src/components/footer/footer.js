import React from 'react';
import { NavLink } from "react-router-dom";
import "./Footer.css";

const FooterLinks = () => {
  return (
    <div className="footer-contaner">
      <div>
        <h5>About</h5>
        <ul className="list-unstyled text-small">
          <li>
            <NavLink to="/">Company</NavLink>
          </li>
          <li>
            <NavLink to="/">Location</NavLink>
          </li>
          <li>
            <NavLink to="/">Contacts</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <h5>Useful links</h5>
        <ul className="list-unstyled text-small">
          <li>
            <NavLink to="/">Help</NavLink>
          </li>
          <li>
            <NavLink to="/">Privacy Ploicy</NavLink>
          </li>
          <li>
            <NavLink to="/">Terms and Conditions</NavLink>
          </li>
          <li>
            <NavLink to="/">FAQ</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <h5>Customer Servie</h5>
        <ul className="list-unstyled text-small">
          <li>
            <NavLink to="/">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/">placeholder</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <h5>Join Us</h5>
        <ul className="list-unstyled text-small">
          <li>
            <NavLink to="/">Twitter</NavLink>
          </li>
          <li>
            <NavLink to="/">Facebook</NavLink>
          </li>
          <li>
            <NavLink to="/">Instagram</NavLink>
          </li>
          <li>
            <NavLink to="/">Linkedin</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;