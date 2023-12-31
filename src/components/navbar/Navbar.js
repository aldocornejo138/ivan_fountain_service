import "./NavbarStyles.css";
import React from "react";
import { Component } from "react";
import { Link } from "react-scroll";
import { navLinksdata } from "../constants/index.js";
import { IvanLogo } from "../../assets/index.js";

class Navbar extends Component {
  state = {
    clicked: false,
    selectedSection: "",
  };

  // Add the handleClick function
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const { selectedSection } = this.state;
    return (
      <div className="NavbarItems">
        <div className="navbar-logo">
          <img
            src={IvanLogo}
            alt="IvanLogo"
            title="Ivan Fountain Service Logo"
            width="1208"
            height="1118"
            loading="eager"
          />
        </div>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars "}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {navLinksdata.map((item) => {
            return (
              <li key={item._id}>
                <Link
                  className={item.cName}
                  to={item.link}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={2000}
                >
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        {selectedSection && (
          <div className="selected-section-title">{selectedSection}</div>
        )}
      </div>
    );
  }
}
export default Navbar;
