import "./navigation-top.css";
import {Link,NavLink} from "react-router-dom";
import { getActiveStyle } from "./getActiveStyle";

export default function NavigationTop(){
return (
<nav className="navbar">
    <div className="nav-heading">
        <Link to="/" className="icon"><i className="fa fa-bolt meta-icon"> Meta-Store</i></Link>
    </div>
    <ul className="nav-comp-list">
        <li className="nav-inline">
            <NavLink to="/" className="link link-active" style={getActiveStyle}>Home</NavLink>
        </li>
        <li className="nav-inline">
            <NavLink to="/Products" className="link" style={getActiveStyle}>Products</NavLink>
        </li>
        <li className="nav-inline">
            <NavLink to="/Wishlist" className="link" style={getActiveStyle}><i className="fa fa-heart meta-icon"></i></NavLink>
        </li>
        <li className="nav-inline">
            <NavLink to="/Cart" className="link" style={getActiveStyle}><i className="fa fa-shopping-cart meta-icon"></i></NavLink>
        </li>
    </ul>
</nav>
);
}