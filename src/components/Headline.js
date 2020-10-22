import React from "react";

export function Headline({ data }) {
  console.log(data);
  return (
    <div className="news__headlines">
      <div >
        <img className="headlines__image"
          src={data.urlToImage}
          alt="new"
        ></img>
      </div>
      <div className="news__everything__headlines">
        <h1 className="news__title__head">{data.title}</h1>
        <p className="news__desc__head">{data.description}</p>
        <span className="news__author__head">{data.author}</span> <br />
        <span className="news__source__head">{data.source.name}</span>
      </div>
    </div>
  );
}
