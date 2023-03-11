import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">Brand Shop</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/men">Men</Link></li>
                        <li><Link to="/women">Woman</Link></li>
                        <li><Link to="/child">Child</Link></li>
                        <li><Link to="/card">Cart</Link></li>
                    </ul>
                </div>
            </nav>

        </header>
    );
};

export default Header;