import React from "react";
import "./Navbar.css";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div class="logo">
          <a href="/">LuxeSites</a>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li className="dropdown">
            <a href="#Services">Services</a>
            <ul className="dropdown-menu">
              <li>
                <a href="/">Mobile Optimisation</a>
              </li>
              <li>
                <a href="/">Web Design</a>
              </li>
              <li>
                <a href="/">SEO</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#PriceSection">Pricing</a>
          </li>
          <li>
            <a href="#FAQ">FAQ</a>
          </li>
          <li>
            <a href="#Footer">Contact</a>
          </li>
        </ul>

        <HamburgerMenu />
        {/* <div className="night-mode">
          <label className="switch">
            <input type="checkbox" id="nightModeToggle" />
            <span className="slider"></span>
          </label>
        </div> */}
      </nav>
    </header>
  );
}

export default Navbar;
