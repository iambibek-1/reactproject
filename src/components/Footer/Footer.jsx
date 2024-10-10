import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo.png'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
const Footer = () => {
  return (
    <div className='footer'>
       
        <div className='footer-logo'>
            <img src={footer_logo} alt="" />
            <p>BILQUE</p>
        </div>
<ul className="footer-links">
    <li>Company</li>
    <li>Products</li>
    <li>Reviews</li>
    <li>About</li>
    <li>Contact</li>
</ul>
<div className="footer-social-icon">
    <div className='footer-social-container'>
    <i className="fa-brands fa-facebook"></i>
    <i className="fa-brands fa-instagram"></i>
    <i className="fa-brands fa-facebook-messenger"></i>
    <i className="fa-brands fa-pinterest"></i>
    </div>
    <div className="footer-copyright">
        <hr/>
        <p>Copyright @ 2024 - All Right Reserved</p>
    </div>
</div>
    </div>
  )
}

export default Footer