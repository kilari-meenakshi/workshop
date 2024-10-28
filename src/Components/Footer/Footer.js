import React from 'react';
import './Footer.css';
import { Whatsapp, Instagram, Twitter, Facebook, Linkedin } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <div className='footerContainer'>
      <footer className="text-center text-lg-start" style={{ backgroundColor: 'grey', padding: '20px 0' }}>
        <section className="container text-center">
          <h6 className="section-title">Useful Links</h6>
          <div className="link-container">
            <p><a href="Home" className="footer-link">Home</a></p>
            <p><a href="#!" className="footer-link">Pricing</a></p>
            <p><a href="#!" className="footer-link">Offers</a></p>
            <p><a href="#!" className="footer-link">About</a></p>
            <p><a href="#!" className="footer-link">Blogs</a></p>
            <p><a href="#!" className="footer-link">Settings</a></p>
          </div>
        </section>
        
        <section className="container text-center">
        <h6 className="section-title">Contact us on</h6>
        <div className="link-container" style={{ display: 'flex', gap: '10px', fontSize: '24px', color: '#333' }}>
       
            <p><a href="whatsapp.com" className="footer-link"><Whatsapp />Whatsapp</a></p>
            <p><a href="instagram.com" className="footer-link"><Instagram />Instagram</a></p>
            <p><a href="facebook.com" className="footer-link"><Facebook />Facebook</a></p>
            <p><a href="twitter.com" className="footer-link"><Twitter />Twitter</a></p>
            <p><a href="linkedin" className="footer-link"> <Linkedin />linkedin</a></p>
            </div>
            </section>
        <section className="text-center mt-3">
          <p className='meena'>&copy; Chalapathi Students</p>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
