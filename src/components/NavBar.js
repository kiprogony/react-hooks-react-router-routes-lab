import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
     <div className="navbar">
       <NavLink exact to="/">Home</NavLink>
       <NavLink exact to="/Movies">Movies</NavLink>
       <NavLink exact to="/Directors">Directors</NavLink>
       <NavLink exact to="/Actors">Actors</NavLink>
     </div> 
 );
}

export default NavBar;
