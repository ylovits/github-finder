import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ iconclasses, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={iconclasses} />
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder App",
  iconclasses: "fab fa-github"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  iconclasses: PropTypes.string.isRequired
};

export default Navbar;
