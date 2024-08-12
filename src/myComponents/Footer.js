import React from 'react'
import "../style/footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="panel-1">
        back to top
      </div>

      <div className="panel-2">
        <ul>
        <p>Get to Know Us</p>
        <a>Careers</a>
        <a>Blog</a>
        <a>About Amazon</a>
        <a>Investor Relations</a>
        <a>Amazon Devices</a>
        <a>Amazon Science</a>
        </ul>

        <ul>
        <p>Make Money with Us</p>
        <a>Sell products on Amazon</a>
        <a>Sell on Amazon Business</a>
        <a>Sell apps on Amazon</a>
        <a>Become an Affiliate</a>
        <a>Advertise Your Products</a>
        <a>Self-Publish with Us</a>
        <a>Host an Amazon Hub</a>
        <a>›See More Make Money with Us</a>
        </ul>

        <ul>
        Amazon Payment Products
        <a>Amazon Business Card</a>
        <a>Shop with Points</a>
        <a>Reload Your Balance</a>
        <a>Amazon Currency Converter</a>
        </ul>

        <ul>
        <p>Let Us Help You</p>
        <a>Amazon and COVID-19</a>
        <a>Your Account</a>
        <a>Your Orders</a>
        <a>Shipping Rates & Policies</a>
        <a>Returns & Replacements</a>
        <a>Manage Your Content and Devices</a>
        <a>Help</a>
        </ul>
      </div>

      <div className="panel-3">
        <div className="logo"></div>

      </div>


      <div className="panel-4">
        <div className="pages">
          <a href="">Conditions of use</a>
          <a href="">Privacy notice</a>
          <a href="">Consumer Health Data Privacy Disclosure</a>
          <a href="">Your Ads privacy Choice</a>
        </div>
        <div className="copyright">
        © 1996-2024, Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </footer>
  )
}

export default Footer
