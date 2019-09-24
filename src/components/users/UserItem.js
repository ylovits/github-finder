import React, { Component } from "react";

class UserItem extends Component {
  render() {
    const { avatar_url, login, html_url } = this.props.user;

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
  }
}

export default UserItem;
