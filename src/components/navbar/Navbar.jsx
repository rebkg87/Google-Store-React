import "./navbar.scss";
import { useState } from "react";
 

 

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
   }

    const closeMenuOnMobile = () => {
        if (window.innerWidth <= 684) {
            setShowMenu(false);
        }
    };

    return (
    <header className="nav-wrapper"> 
            <img className="nav-img" src="/assets/images/google-logo.png"/>
            <nav className="menunav">
                <ul className={`menu ${showMenu ? "show-menu" : ""}`}>
                    <li> <a>Phone</a></li>
                    <li><a to="/"
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""}
                    onClick={closeMenuOnMobile}
                            > Earbuds
                        </a></li>
                    <li> <a to="/"
                    className={({ isActive, isPending }) => 
                        isPending ? "pending" : isActive ? "active" : ""
                    } onClick={closeMenuOnMobile}
                            > Watches
                        </a></li>
                    <li><a>Smart Home</a></li>
                    <li><a>Accessories</a></li>
                    <li><a>Subsciptions</a></li>
                </ul>
            </nav>
            <span class="iconos-nav">
                <img src="/assets/images/icons/Search.svg"  />
                <img src="/assets/images/icons/Help.svg"  />
                <img className="cart-icon" src="/assets/images/icons/Cart.svg" />
                <img src="/assets/images/icons/Avatar.svg" />
                <div className="nav-toggle" >
                    <label for="menu" className="menu-hamburgesa" onClick={toggleMenu}> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="25px" fill="#1a73e8"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                    </label>
                </div>
            </span>
        </header>

    );
};

export default Navbar;