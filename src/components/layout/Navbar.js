import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ iconclasses, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={iconclasses} />
        {title}
      </h1>
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
