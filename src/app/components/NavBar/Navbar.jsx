import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import styles from './NavbarStyle.module.css'; // Import CSS module

export default class MyNavbar extends React.Component {
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
      <div className={styles['navbar-container']}>
        <Navbar light expand="lg" className={styles.navbar}>
          <NavbarBrand href="/">HouseIndex</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto" navbar>
            <NavItem>
                <Link href="/page" passHref legacyBehavior>
                    <a className={styles['nav-link']}>Home</a>
                </Link>
            </NavItem>
            <NavItem>
                <Link href="/services" passHref legacyBehavior>
                    <a className={styles['nav-link']}>Services</a>
                </Link>
            </NavItem>
            <NavItem>
                <Link href="/contact" passHref legacyBehavior>
                    <a className={styles['nav-link']}>Contact</a>
                </Link>
            </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

MyNavbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};