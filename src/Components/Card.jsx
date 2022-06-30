import React from "react";
import Star from "../assets/images/Star 1.png"
import "./style.css";

const Card = (props) => {
  let badgeText;
  if (props.openSpot === 0) {
    badgeText = "SOLD OUT"
  }else if (props.location === "Online"){
    badgeText = "Oline"
  }else {
    badgeText = ""
  }
  return (

      
        <div className="card">
          {badgeText && <div className="card-badge">{badgeText}</div>}
          <img className="imgs" src={props.coverImg} alt="" />
          <div className="card-stats">
            <span>Open Spots{props.openSpot}</span>
            <span>Ratings:{props.stats.rating}</span>
            <img className="star" src={Star} />
            <span className="gray">Reviews:({props.stats.reviewCount})</span>
             <span className="gray">Location:{props.location}</span>
          </div>
          <div className="content">
            {/* <span>{title}</span> */}
            <span className="description">{props.description}</span>
            <h4 className="price">From {props.currency}{props.price} / <span className="gray">person</span></h4>
          </div>
        </div>
       
  );
};

export default Card;
