import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa"; // carrito de react-icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartActive, setIsCartActive] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCartActive = () => {
    setIsCartActive(!isCartActive);
  };

  return (
    <header className="nav-wrapper">
      <img className="nav-img" src="/assets/images/google-logo.png" />
      <nav className="menunav">
        <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <li className="navbar-item">
            {" "}
            <a>Phone</a>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/earbuds"
              activeClassName="active"
              onClick={toggleMenu}
            >
              {" "}
              Earbuds
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/watches"
              activeClassName="active"
              onClick={toggleMenu}
            >
              {" "}
              Watches
            </NavLink>
          </li>
          <li className="navbar-item">
            <a>Smart Home</a>
          </li>
          <li className="navbar-item">
            <a>Accessories</a>
          </li>
          <li className="navbar-item">
            <a>Subsciptions</a>
          </li>
        </ul>
      </nav>
      <span className="iconos-nav">
        <img src="/assets/images/icons/Search.svg" />
        <img src="/assets/images/icons/Help.svg" />
        <NavLink to="/cart">
          <FaShoppingCart
            className={`cart-icon ${isCartActive ? "active" : ""}`}
            onClick={handleCartActive}
          />{" "}
        </NavLink>
        <img src="/assets/images/icons/Avatar.svg" />
        <div className={`navbar-toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <label htmlFor="menu" className="menu-hamburgesa">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="25px"
              fill="#1a73e8"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </label>
        </div>
      </span>
    </header>
  );
};

export default Navbar;
