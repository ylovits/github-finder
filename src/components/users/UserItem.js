import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ user: { avatar_url, login, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        style={{ width: "60px" }}
        alt=""
        src={avatar_url}
        className="round-img"
      />
      <h3>{login}</h3>
      <div>
        <a
          href={html_url}
          rel="noopener noreferrer"
          target="_blank"
          className="btn btn-sm  my-1 btn-dark"
        >
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
