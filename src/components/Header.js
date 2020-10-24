import React from "react";
import { Link } from "react-router-dom";
import headerImage from "../images/Ironhack Post.png";
import moment from "moment";

export default function Header() {
  let dateCreate = moment().format("dddd, MMMM DD, YYYY");

  return (
    <div>
      <div className="header">
        <Link to="/">
          <p>Home Page</p>
        </Link>
        <Link to="/">
          <img id="header__image" src={headerImage} alt="img"></img>
        </Link>
        <p>{dateCreate}</p>
      </div>
      <hr className="cover-lines"></hr>
    </div>
  );
}
