import React from "react";
import "./Hero.css";
import hero_image from '../assets/heroimage.jpg'

const Hero = () => {
  return (
    <div className="hero">
    <div className="hero-left">
        <img src={hero_image} alt="" />
    </div>

      <div className="hero-right">
        <h2>New</h2>
        <h3> ARRIVALS ONLY</h3>
        <p>Explore our latest jewellery designs</p>
        < div className="hero-latest-btn">
            <button>SHOP NOW</button> 
        </div>
      </div>
    </div>
  );
};
export default Hero;
