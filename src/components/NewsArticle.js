import React from "react";
import { Link } from "react-router-dom";

function NewsArticle({ data, setSelectedNews, history }) {
  console.log(data);

  // const selectNews = (title) => {
  //   setSelectedNews(title)
  //   history.push()
  // }

  return (
    <div className="news">
      <div className="headlines__date">
        <span className="news__published">{data.publishedAt}</span>
      </div>
      <div className="news-everything">
        <Link to={`/details/${data.title}`}>
          <h1 className="news__title">{data.title}</h1>
        </Link>
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
