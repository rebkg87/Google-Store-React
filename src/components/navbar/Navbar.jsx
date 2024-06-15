import "./navbar.scss";
import React from "react";
import { NavLink } from "react-router-dom";



const Navbar = () => {
    return (
        <header className="nav-wrapper"> 
                <img className="nav-img" src="/assets/images/google-logo.png"/>
                <nav className="menunav">
                    <ul>
                        <li> <a>Phone</a></li>
                        <li><NavLink to="/earbuds" activeClassName="active"> Earbuds</NavLink></li>
                        <li> <NavLink to="/watches" activeClassName="active"> Watches</NavLink></li>
                        <li><a>Smart Home</a></li>
                        <li><a>Accessories</a></li>
                        <li><a>Subsciptions</a></li>
                    </ul>
                </nav>
                <span class="iconos-nav">
                    <img src="/assets/images/icons/Search.svg"  />
                    <img src="/assets/images/icons/Help.svg"  />
                    <NavLink to="/cart" activeClassName="active"><img className="cart-icon" src="/assets/images/icons/Cart.svg" /></NavLink> 
                    <img src="/assets/images/icons/Avatar.svg" />
                    <div className="nav-toggle" >
                        <label for="menu" className="menu-hamburgesa"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="25px" fill="#1a73e8"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                        </label>
                    </div>
                </span>
            </header>
    
        );
    };

export default Navbar;