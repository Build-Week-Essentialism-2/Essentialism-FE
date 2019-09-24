import React from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Jumbotron,
  Button
} from "reactstrap";
import { NavLink } from "react-router-dom";
import "../styles/LandingPage.css";

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div class="main-div">
        <header>
          <h3>essentialism</h3>
          <div class="buttons-div">
            <NavLink to={"register"}>
              <button>Sign Up</button>
            </NavLink>
            <NavLink to={"login"}>
              <button>Log In</button>
            </NavLink>
          </div>
        </header>
        <section>
          <div>
            <h1>Declutter Your Life</h1>
            <NavLink to={"register"}>
              <button>Create an Account</button>
            </NavLink>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="woman smiling"
            ></img>
            <p>
              "In this busy and unrelenting world, Essentialism has helped me
              take control of my life. I now spend more time doing the things I
              love."
            </p>
          </div>
        </section>
      </div>
    );
  }
}
