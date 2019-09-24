import React, { Component } from "react";
import PropTypes from "prop-types";

export class Navbar extends Component {
  static defaultProps = {
    title: "Github Finder App",
    iconclasses: "fab fa-github"
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    iconclasses: PropTypes.string.isRequired
  };

  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={this.props.iconclasses} />
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
