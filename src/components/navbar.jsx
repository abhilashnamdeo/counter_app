import React from "react";

const Navbar = ({count}) =>{
    
        return(
            <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">{count}</span>
            </nav>
        );
    
}

export default Navbar;