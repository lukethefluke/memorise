import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Home from "../pages/Home";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      menuOpen: true,
    };
  }

  menuChange() {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  }

  render() {
    var menuButton = "order-first menu-button " + this.state.menuOpen;
    var showMenu = this.state.menuOpen ? "closed" : "open";
    var navItem = "nav-item " + showMenu;

    return (
      <div className="nav-bar">
        <div className="nav-menu">
          <NavLink
            exact
            to="/"
            className={navItem}
            activeClassName="active"
            onClick={this.menuChange.bind(this)}
          >
            HOME
          </NavLink>
          <NavLink
            exact
            to="/generate"
            className={navItem}
            activeClassName="active"
            onClick={this.menuChange.bind(this)}
          >
            GENERATE
          </NavLink>
          <NavLink
            exact
            to="/faqs"
            className={navItem}
            activeClassName="active"
            onClick={this.menuChange.bind(this)}
          >
            FAQS
          </NavLink>
          {/* <NavLink
            exact
            to="/links"
            className={navItem}
            activeClassName="active"
            onClick={this.menuChange.bind(this)}
          >
            LINKS
          </NavLink>
          */}
          <button
            onClick={this.menuChange.bind(this)}
            className={menuButton}
            id="menuButton"
          >
            {!this.state.menuOpen ? (
    <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
  ) : (
    <FiMenu style={{ color: "#fff", width: "40px", height: "40px" }} />
  )}
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
