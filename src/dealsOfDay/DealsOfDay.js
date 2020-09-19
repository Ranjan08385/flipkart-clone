import React from "react";
import "./DealsOfDay.css";
import DealItems from "./DealItems";

// const image1 = uri(
//   "https://th.bing.com/th/id/OIP.DndqNTQTvAl2FxFbwLO5UAHaHa?pid=Api&rs=1"
// );

function DealsOfDay() {
  return (
    <div className="dealsDay">
      <div className="dealday__left">
        <div className="dealday__head">
          <h2>Deals of the Day</h2>

          <div className="dealDay__timer">
            <img
              src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/timer_931251.svg"
              alt=""
            />
            <p>15 : 10 : 45 Left</p>
          </div>
          <button>VIEW ALL</button>
        </div>
        <div className="dealDay__items">
          <DealItems
            image={
              "https://th.bing.com/th/id/OIP.DndqNTQTvAl2FxFbwLO5UAHaHa?pid=Api&rs=1"
            }
            name="Wireless Headphones"
            offer="Upto 60% off"
            brand="JBL, Sony & more"
          />
          <DealItems
            image={
              "https://th.bing.com/th/id/OIP.REvM72ZVplzM-V8zmhfX2QHaLl?pid=Api&rs=1"
            }
            name="Smart Phones"
            offer="Upto 50% off"
            brand="Samsung, Vivo & more"
          />
          <DealItems
            image={
              "https://brain-images-ssl.cdn.dixons.com/0/6/10170260/u_10170260.jpg"
            }
            name="Keyboards & Mouse"
            offer="Upto 40% off"
            brand="#Great Deals"
          />
          <DealItems
            image={
              "https://doityourselfpcrepairs.files.wordpress.com/2013/11/laptop_ram_dual13147650214e5db8dd1a177.jpg"
            }
            name="Computer Accessories"
            offer="Upto 30% off"
            brand="Grab Now"
          />
        </div>
      </div>

      <div className="dealDay__right">
        <img
          src="https://rukminim1.flixcart.com/flap/464/708/image/bff0cabb16d1b67f.jpg?q=70"
          alt=""
        />
      </div>
    </div>
  );
}

export default DealsOfDay;
