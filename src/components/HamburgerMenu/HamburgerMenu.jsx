import { useState, React, useEffect } from "react";
import Hamburger from "hamburger-react";
import "./HamburgerMenu.css";

function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".hamburger-container");
      if (element) {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const distanceFromTop = rect.top + scrollTop;

        if (scrollTop > distanceFromTop + 200) {
          setOpen(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <div className="hamburger-container">
      <Hamburger toggled={open} toggle={setOpen} color="#fd4d66" />
      {open && (
        <div className={`hamburger-div ${open ? "open" : ""}`}>
          <ul className="nav-links-burger">
            <li>
              <a href="#Home">Home</a>
            </li>

            <li>
              <a href="#ServicesSection">services</a>
            </li>
            <li>
              <a href="#">Our Work</a>
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
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
