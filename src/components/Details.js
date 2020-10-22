import React from "react";
//import { Link } from "react-router-dom";

export default function Details({data}) {
  console.log(data);
  return (
    <div>
      <h1 className="head__text">Details</h1>
      <hr className="cover-lines"></hr>
      <div className="all__news">
        <hr className="cover-lines"></hr>
      </div>
    </div>
  );
}
