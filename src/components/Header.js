import React, { useState } from "react";
import { Link } from "react-router-dom";
import headerImage from "../images/Ironhack Post.png";
import moment from "moment";

export default function Header() {
  const [search, setSearch] = useState("")
  let dateCreate = moment().format("dddd, MMMM DD, YYYY");

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  const handleSubmit = (event) => {
    window.location.href=`/search/${search}`
    event.preventDefault();
  }

  return (
    <div className="header">
      <p>{dateCreate}</p>
      <Link to="/" className="logo">
        <img id="header__image" src={headerImage} alt="img"></img>
      </Link>
      <form onSubmit={handleSubmit}>
        <input name="search" onChange={handleChange} />
        <button>Search</button>
      </form>
    </div>
  );
}
