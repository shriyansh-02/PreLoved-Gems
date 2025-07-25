import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li>Jaipur</li>
              <li>Mumbai</li>
              <li>Nagpur</li>
              <li>Nanded</li>
              <li>Kanpur</li>
              
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li><a href="http://localhost:3000/about">About Us</a></li>
              <li>Careers</li>
              <li><a href='http://localhost:3000/contactus'>Contact Us</a></li>
              <li>People</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>PreLoved Gem</p>
          </div>
          <div className="list">
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="footer">
        <p>Other Countries Pakistan - South Africa - Indonesia</p>
        <p>Free Classifieds in India. © 2006-2021 OLX</p>
      </div> */}
    </div>
  );
}

export default Footer;
