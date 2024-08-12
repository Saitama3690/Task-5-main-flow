import React from 'react';
import '../style/nav.css';



const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <div className="nav-logo borderww">
          <div className="logo"></div>
        </div>

        <div className="nav-address borderww">
          <p className="address-1">Deliver to</p>
          <div className="add-icon">
            <i className="fa-solid fa-location-dot"></i>
            <p className="address-2">India</p>
          </div>
        </div>

        <div className="nav-search">
          <select name="" id="" className="search-select">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="Search Amazon" className="search-bar" />
          <div className="search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <div className="nav-account borderww">
          <p className="nav-first">Hello, sign in</p>
          <p className="nav-second">Accounts & Lists</p>
        </div>

        <div className="nav-order borderww">
          <p className="nav-first">Returns</p>
          <p className="nav-second">& Orders</p>
        </div>

        <div className="nav-cart borderww">
          <div className="cart-number">0</div>
          <div className="cart-icon">
            <i className="fa-solid fa-cart-shopping"></i>
            <p id="cart">Cart</p>
          </div>
        </div>
      </div>

      <div className="panel">
        <i className="fa-solid fa-bars" style={{ color: 'white' }}></i>
        <a href="#" id="panel-all">All</a>
        <a href="#">Today's Deals</a>
        <a href="#">Customer Service</a>
        <a href="#">Registry</a>
        <a href="#">Gift Cards</a>
        <a href="#">Sell</a>
      </div>
    </header>
  );
};

export default Navbar;
