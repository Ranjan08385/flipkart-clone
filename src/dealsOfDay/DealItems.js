import React from "react";
import "./DealItems.css";

function DealItems({ image, name, offer, brand }) {
  return (
    <div className="dealItems">
      <div className="dealItems__img">
        <img src={image} alt="" />
      </div>
      <div className="dealItems__details">
        <h4>{name}</h4>
        <p className="dealItems__offer">{offer}</p>
        <p className="dealItems__brand">{brand}</p>
      </div>
    </div>
  );
}

export default DealItems;
