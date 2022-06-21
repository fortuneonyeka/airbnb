import React from "react";

import "./style.css";

const Card = ({price,location, openSpot, rating, currency,reviewCount,title, img, description}) => {
  return (

      <div className="container">
        <div className="card">
          <img className="imgs" src={img} alt="" />
          <div className="card-stats">
            {/* <img className="star" src={Star} /> */}
            <span>Open Spots{openSpot}</span>
            <span>Ratings:{rating}</span>
            <span className="gray">Reviews:({reviewCount})</span>
            <span className="gray">Location:{location}</span>
          </div>
          <div className="content">
            <span>{title}</span>
            <span className="description">{description}</span>
            <h4 className="price">From {currency}{price} / <span className="gray">person</span></h4>
          </div>
        </div>
       
    </div>
  );
};

export default Card;
