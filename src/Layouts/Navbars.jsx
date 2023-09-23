import React from "react";
import { Link } from "react-router-dom";
import navLogo from "../assets/Burger-icon.svg";
import locationLogo from "../assets/Location-icon.svg";
import allProductLogo from "../assets/Bell-icon.svg";
import guestLogo from "../assets/Display-picture-icon.svg";
import cartLogo from "../assets/Bag-icon.svg";

const Navbars = () => {
  return (
    <div>
      <nav className="container d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-between align-items-center w-25">
          <div>
            <img src={navLogo} className="image-fluid p-3" alt="nav-Logo" />
          </div>
          <div>
            <img
              src={locationLogo}
              className="d-none d-md-block"
              alt="location-Logo"
            />
          </div>
          <h5 className="d-none d-md-block text-danger">Lagos, Nigeria</h5>
        </div>
        <div className="d-flex justify-content-between align-items-center gap-3">
          <img
            src={allProductLogo}
            className="img-fluid"
            alt="all-product-logo"
          />
          <h5 className="d-none d-md-block mt-2">All Product</h5>
          <img src={guestLogo} alt="guest-logo" />
          <h5 className="d-none d-md-block mt-2">Hi, Guests</h5>
          <img src={cartLogo} alt="cart-logo" />
        </div>

        {/* <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Cart'>Cart</Link></li>
            </ul> */}
      </nav>
    </div>
  );
};

export default Navbars;
