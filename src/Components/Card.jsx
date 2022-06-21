import React from "react";
import Image from "../assets/images/image 12.png";
import Mountain from "../assets/images/mountain-bike 1.png";
import Wedding from "../assets/images/wedding-photography 1.png";
import Star from "../assets/images/Star 1.png";
import "./style.css";

const Card = ({price,country, rating, currency,available}) => {
  return (
    <div>
      <div className="card">
        <div>
          <img className="imgs" src={Image} alt="" />
          <div className="card-stats">
            <img className="star" src={Star} />
            <span>{rating}</span>
            <span className="gray">{available}</span>
            <span className="gray">{country}</span>
          </div>
          <div className="content">
            <span>Life lessons with Katie Zaferes</span>
            <h4 className="price">From {currency}{price} / <span className="gray">person</span></h4>
          </div>
        </div>
        <div>
          <img className="imgs" src={Wedding} alt="" />
          <div className="card-stats">
            <img className="star" src={Star} />
            <span>5.0</span>
            <span className="gray">{available}</span>
            <span className="gray">{country}</span>
          </div>
          <div className="content">
            <span>Learn wedding photography</span>
            <h4 className="price">From {currency}{price} / <span className="gray">person</span></h4>
          </div>
        </div>
        <div>
          <img className="imgs" src={Mountain} alt="" />
          <div className="card-stats">
            <img className="star" src={Star} />
            <span>{rating}</span>
            <span className="gray"> { available}</span>
            <span className="gray">{country}</span>
          </div>

          <div className="content">
            <span>Group Mountain Biking</span>
            <h4 className="price">From {currency}{price} / <span className="gray">person</span></h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
