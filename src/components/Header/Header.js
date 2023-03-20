import React, {useContext} from 'react';
import {NavLink,Link} from "react-router-dom";
import {CustomContext} from "../../Context";

const Header = () => {
    const {count} = useContext(CustomContext)
    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">Brand Shop</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li className='header__link'><NavLink to="/men">Men</NavLink></li>
                        <li className='header__link'><NavLink to="/women">Woman</NavLink></li>
                        <li className='header__link'><NavLink to="/child">Child</NavLink></li>
                        <li className='header__link'><NavLink to="/cart">Cart</NavLink>
                        <span>{count < 1 ? '' : count > 9 ? '9+' : count}</span>
                        </li>
                    </ul>
                </div>
            </nav>

        </header>
    );
};

export default Header;