import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar(props) {
  
  console.log(props)
    return (
      <div>
        <ul className="navbar">
          <li>
          <NavLink to="/" activeClassName="activeNavButton">Home</NavLink>
          </li>
          <li>
          <NavLink to="/allvalues" activeClassName="activeNavButton">All Values</NavLink>
          </li>
          <li>
          <NavLink to="/listoften" activeClassName="activeNavButton">Top Ten</NavLink>
          </li>
          <li>
          <NavLink to="/top3" activeClassName="activeNavButton">My Values</NavLink>
          </li>
          <li>
          <NavLink to="/projects/" activeClassName="activeNavButton">Current Projects</NavLink>
          </li>
          <li>
          <NavLink to={`/compare/:id`} activeClassName="activeNavButton">Compare</NavLink></li>
          <li>
          <NavLink to="/" activeClassName="activeNavButton">Sign Out</NavLink>
          </li>
        </ul>
      </div> 
          );

};