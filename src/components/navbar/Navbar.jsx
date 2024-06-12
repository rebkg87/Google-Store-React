import "./navbar.scss";


const Navbar = () => {
    return (
    <header className="nav-wrapper"> 
            <img className="nav-img" src="/assets/images/google-logo.png"/>
            <nav className="menunav">
                <ul className="menu">
                    <li> <a>Phone</a></li>
                    <li><a to="/"
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                    }
                            > Earbuds
                        </a></li>
                    <li> <a to="/"
                    className={({ isActive, isPending }) => 
                        isPending ? "pending" : isActive ? "active" : ""
                    }
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
            </span>
        </header>

    );
};

export default Navbar;