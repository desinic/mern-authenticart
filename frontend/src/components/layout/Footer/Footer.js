import React from "react";
import { Link } from 'react-router-dom'
import dribble from '../../../images/icons/social/dribble.png'
import facebook from '../../../images/icons/social/facebook.png'
import instagram from '../../../images/icons/social/instagram.png'
import pinterest from '../../../images/icons/social/pinterest.png'
import whatsapp from '../../../images/icons/social/whatsapp.png'
import "./Footer.css";

const Footer = () => {
  let date = new Date().getFullYear().toString()
  return (
    <footer id="footer">
      <p>Copyright© { date } All rights reserved by <Link to="/">Authentic Art</Link></p>
      <div>
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebok.com/authenticart99">
        <img src={facebook} alt="" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=01731-913451&app=facebook&entry_point=page_cta&fbclid=IwAR3CXU6DCEBUd5ftds9uoy9GZbdptlPppT49wHaEtelFrNXBor_QJLGvpwk">
        <img src={whatsapp} alt="" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/AuthenticArt">
          <img src={dribble} alt="" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.pinterest.com/authenticart99/_created/">
        <img src={pinterest} alt="" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/authenticart99/?fbclid=IwAR37dfOab3bzy-zhWFN6fmwJJa0HbOe08LUX9V2i51n-fzcu0FWDTf2Qxsk">
          <img src={instagram} alt="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
