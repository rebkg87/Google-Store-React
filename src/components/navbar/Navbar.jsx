import "./navbar.scss";

const Navbar = () => {
    return (
    <header className="nav-wrapper"> 
            <img className="nav-img" src="./images/images/google-logo.png" alt="logo-google" />
            <nav className="menunav">
                <ul className="menu">
                    <li> <a href="">Phones</a></li>
                    <li><a href="./index.html" class="active">Earbuds</a></li>
                    <li><a href="./watches.html">Watches</a></li>
                    <li><a href="">Smart Home</a></li>
                    <li><a href="">Accessories</a></li>
                    <li><a href="">Subsciptions</a></li>
                </ul>
            </nav>
            <span class="iconos-nav">
                <img src="./images/images/icons/Search.svg" alt="Search" />
                <img src="./images/images/icons/Help.svg" alt="Help" />
                <img src="./images/images/icons/Cart.svg" alt="Cart" />
                <img src="./images/images/icons/Avatar.svg" alt="Avatar" />
            </span>
        </header>

    );
};

export default Navbar;