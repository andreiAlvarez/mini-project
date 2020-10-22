import React from "react";

function NewsArticle({ data }) {
  console.log(data);
  return (
    <div className="news">
      <div className="headlines__date">
        <span className="news__published">{data.publishedAt}</span>
      </div>
      <div className="news-everything">
        <h1 className="news__title">{data.title}</h1>
        <p className="news__desc">{data.description}</p>
        <span className="news__author">{data.author}</span> <br />
        <span className="news__source">{data.source.name}</span>
      </div>
      <div className="news__list__image">
        <img className="news__image" src={data.urlToImage} alt="new"></img>
      </div>
    </div>
  );
}

export default NewsArticle;
