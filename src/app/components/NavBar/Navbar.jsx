import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import './NavbarStyle.module.css';

export default class myNavbar extends React.Component {
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
        <div className="navbar-container">
            <Navbar className="navbar" expand="lg" container="fluid">
                <NavbarBrand className="navbar-brand" href="/">HouseIndex</NavbarBrand>
                <NavbarToggler className="navbar-toggler" onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" expand="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="nav-link" href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" href="/services">Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" href="/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
  }
}

// Define propTypes for the Navbar component
myNavbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};