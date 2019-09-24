import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
          <NavLink to = {`/`}>Home</NavLink>
          <NavLink to = {`/allvalues`}>All Values</NavLink>
          <NavLink to = {`/listoften`}>Top Ten</NavLink>
          <NavLink to = {`/top3`}>Top Three</NavLink>
          <NavLink to = {`/projects`}>My Values</NavLink>
          <NavLink to = {`/compare`}>Compare</NavLink>
          <NavLink to = {`/`}>Sign Out</NavLink>
        </nav>  
          );

};