import React from "react";
import logo from "./images/logo.png";
import {Link} from "react-router-dom";

function Header(){
    return(
    
    <div className="row header">
        <div className="col-md-4">
        <a className="header-brand" href="#">
        <img src={logo} alt="" width="45" height="45" className="d-inline-block align-text-top logoimg"/>
        Singlepage
        </a>
        {/* <img src={logo} className="logoimg"/> */}
        </div>
        <div className="col-md-8">
        <ul className="liststyle">
            <li><Link to="/" className="link">Digital Agency<i class="fa fa-caret-down" aria-hidden="true"></i></Link></li>
            <li><Link to="/services" className="link">Services<i class="fa fa-caret-down" aria-hidden="true"></i></Link></li>
            <li><Link to="/aboutus" className="link">Portfolio<i class="fa fa-caret-down"  aria-hidden="true"></i></Link></li>
            <li><Link to="/images" className="link">Pages<i class="fa fa-caret-down" aria-hidden="true"></i></Link></li>
            <li><Link to="/features" className="link">Blog<i class="fa fa-caret-down" aria-hidden="true"></i></Link></li>
            <li><Link to="/testimonial" className="link">Contact</Link></li>
            {/* <li className="iconbar"><i class="fa fa-bars" aria-hidden="true"></i></li> */}
        </ul>
        </div>
    </div>
      
    
    );
}
export default Header;