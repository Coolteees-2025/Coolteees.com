import React from "react";
import "./Hero.css";
import HeroItem from "./Hero-items";

const Hero = () => {
  return (
    <>
      <div className="Hero-main">
        <h1>OUR LATEST COLLECTION</h1>
        <hr/>
        <div className="Hero-sec">
          {HeroItem.map((item, index) => (
            <div className="Hero-item-main" key={index}>
              <img src={item.img} className="Hero-item-img" alt={item.name} loading="lazy"/>
              <p className="Hero-item-p">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
