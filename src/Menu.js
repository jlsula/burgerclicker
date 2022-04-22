import React from "react";
import { Link } from "react-router-dom";
import iconburger from "./images/icon-burger.png";
import iconcoupon from "./images/icon-coupon.png";
import iconboy from "./images/icon-boy.png";

function Menu(props) {
  return (
    <div className="menu">
      <Link to="/">
        <div>
          {" "}
          <img src={iconburger} alt="game"></img>
        </div>
      </Link>
      <Link to="/coupons">
        <div>
          {" "}
          <img src={iconcoupon} alt="coupons"></img>
          <span className="badge">{props.claimableCoupons}</span>
        </div>
      </Link>
      <Link to="/profile">
        <div>
          <img src={iconboy} alt="boy"></img>
        </div>
      </Link>
    </div>
  );
}

export default Menu;
