import React from 'react'
import './Header.css'

const Header = () => {
    return (
      <div className="header">
        <div className="header-contents">
          <h2>
            Delivering India’s Authentic Flavors, One Local Bite at a Time.
          </h2>
          <p>
            Bringing you the heart and soul of India's street flavors, one local
            bite at a time. Support small vendors, savor authentic tastes, and
            journey through India’s diverse culinary heritage from the comfort
            of your home.
          </p>
          {/* <button>View Menu</button> */}
        </div>
      </div>
    );
}

export default Header
