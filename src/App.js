import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Nav, Navbar, NavItem} from "react-bootstrap";
import './App.css';
import Routes from "./Routes";
import {LinkContainer} from "react-router-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({isAuthenticated: authenticated});
  }
  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Startup Point</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/bungie">
                <NavItem>Bungie</NavItem>
              </LinkContainer>
              <LinkContainer to="/ea">
                <NavItem>EA</NavItem>
              </LinkContainer>
              <LinkContainer to="/signup">
                <NavItem>Signup</NavItem>
              </LinkContainer>
              <LinkContainer to="/login">
                <NavItem>Login</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes childProps={childProps}/>
      </div>
    );
  }
}

export default App;
