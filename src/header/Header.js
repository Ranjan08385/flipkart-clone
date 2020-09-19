import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddCircleOutlineSharpIcon from '@material-ui/icons/AddCircleOutlineSharp';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';

function Header() {
  const showMenu = () => {
    return (
      <div className="login__menu">
        <div className="login__signup">
          <p className="login__newCust">New customer?</p>
          <p className="login__signupText">Sign Up</p>
        </div>
        <div className="loginMenu__options">
          <AccountCircleIcon style={{ color: '#2874f0' }} />
          <p>My Profile</p>
        </div>
        <div className="loginMenu__options">
          <AddCircleOutlineSharpIcon style={{ color: '#2874f0' }} />
          <p>Flipkart Plus Zone</p>
        </div>
        <div className="loginMenu__options">
          <LocalMallIcon style={{ color: '#2874f0' }} />
          <p>Orders</p>
        </div>
        <div className="loginMenu__options">
          <FavoriteIcon style={{ color: '#2874f0' }} />
          <p>Wishlist</p>
        </div>
        <div className="loginMenu__options">
          <ConfirmationNumberIcon style={{ color: '#2874f0' }} />
          <p>Rewards</p>
        </div>
        <div className="loginMenu__options">
          <CardGiftcardIcon style={{ color: '#2874f0' }} />
          <p>Gift Cards</p>
        </div>
      </div>
    );
  };

  return (
    <div className="header">
      <div className="header__mainLogo">
        <img
          className="header__logo"
          src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png"
          alt=""
        />
        <div className="header__sublogo">
          <p>
            Explore{" "}
            <span>
              Plus{" "}
              <img
                src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png"
                alt=""
              />
            </span>
          </p>
        </div>
      </div>
      <div className="header__search">
        <input placeholder="Search for products, brands and more" type="text" />
        <SearchIcon style={{ cursor: "pointer", color: "#2874f0" }} />
      </div>

      <div className="header__loginBtn">
        <button>Login</button>
        {showMenu()}
      </div>

      <div className="header__more">
        <p>More</p>
        <ExpandMoreOutlinedIcon
          style={{ color: "#fff", fontSize: 16, paddingTop: 5 }}
        />
      </div>

      <div className="header__cart">
        <ShoppingCartIcon />
        <p>Cart</p>
      </div>
    </div>
  );
}

export default Header;
