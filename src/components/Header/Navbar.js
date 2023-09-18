import React, { Component } from 'react'
import './Navbar.css'
import Logo from "../../images/Logo.png"
import { Outlet, Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false }

  handleclick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  handleMenuItemClick = () => {
    // Close the menu when a menu item is clicked
    this.setState({ clicked: false });
  }

  render() {
    return (
      <>
        <section className='nav_bar'>
          <div className='container'>
            <nav>
              <a href="/">
                <img src={Logo} alt="logo" width="250px" height="250px" />
              </a>
              <div>
                <ul
                  id="navbar"
                  className={this.state.clicked ? "active" : ""}
                >
                  <li>
                    <Link to="/" onClick={this.handleMenuItemClick}>
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link to="/offerings/" onClick={this.handleMenuItemClick}>
                      OFFERINGS
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/" onClick={this.handleMenuItemClick}>
                      ABOUT
                    </Link>
                  </li>
                  <li>
                    <Link to="/whats-new/" onClick={this.handleMenuItemClick}>
                      WHAT'S NEW?
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact-us/" onClick={this.handleMenuItemClick}>
                      CONTACT
                    </Link>
                  </li>
                </ul>
              </div>
              <div id='mobile' onClick={this.handleclick}>
                <i
                  id='bar'
                  className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
                ></i>
              </div>
            </nav>
          </div>
        </section>
        <Outlet />
      </>
    )
  }
}

export default Navbar
