import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'
const Footer = () => {
  return (
    <div   id='footer' className='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>"Experience the ultimate convenience of having your favorite cuisines delivered right to your doorstep with our innovative food delivery website.explore tempting menus, and place your order effortlessly from the comfort of your home. With seamless navigation, secure payment options,timely delivery, we ensure a satisfying culinary experience every time."</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
           <h2>COMPANY</h2>
           <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivary</li>
            <li>Privacy Policy</li>
           </ul>
        </div>
        <div className="footer-content-right">
         <h2>GET IN TOUCH</h2>
         <ul>
          <li>9822650325</li>
          <li>tomatoCon@gmail.com</li>
         </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>
     Copyright 2024  &copy; Tomato.com - All rights reserved.
      </p>
    </div>
  )
}

export default Footer
