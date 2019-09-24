import React, { Component } from "react";

class UserItem extends Component {
  state = {
    id: "id",
    login: "mojombo",
    avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    html_url: "https://github.com/mojombo"
  };

  render() {
    const { avatar_url, login, html_url } = this.state;

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
