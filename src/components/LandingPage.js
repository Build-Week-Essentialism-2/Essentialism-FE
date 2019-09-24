import React from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Jumbotron,
  Button
} from "reactstrap";

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
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">essentialism</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to={`/register`}>Sign Up</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={`/login`}>Log In</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Jumbotron>
          <h1 className="display-3">Declutter Your Life</h1>
          <img
            src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="woman smiling"
          ></img>
          <p>
            "In this busy and unrelenting world, Essentialism has helped me take
            control of my life. I now spend more time doing the things I love."
          </p>
          <p className="lead">
            <NavLink to={`/register`}>
              <Button color="primary">Create an Account</Button>
            </NavLink>
          </p>
        </Jumbotron>
      </div>
    );
  }
}
