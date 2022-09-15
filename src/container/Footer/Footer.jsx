import React from 'react';
import { images } from '../../constants'
import './Footer.css';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
const Footer = () => (

  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">

      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">korangi 4 karea karachi</p>
        <p className="p__opensans">090078601</p>
        <p className="p__opensans">03363498664</p>


      </div>

      <div className="app__footer-links_logo">

        <img src={images.gericht} alt="" />
        <p className="p__opensans">The best way to find yourself is to loose yourself in service of others</p>
        <img src={images.spoon} style={{ marginTop: 15 }} alt="" className="spoon__img" />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>


      </div>

      <div className="app__footer-links_work">

        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday:</p>
        <p className="p__opensans">08:00am - 12:00am</p>
        <p className="p__opensans">Saturday - Sunday</p>
        <p className="p__opensans">08:00am - 01:00am</p>


      </div>


    </div>

    <div className="footer__copyright">
      <p className="p__opensans">
        2022 Uniyer, All Right Reserved
      </p>
    </div>

  </div>


);

export default Footer;
