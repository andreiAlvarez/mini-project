import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import slugify from "slugify"

export default function Details({ match, history, location }) {
  const { data } = useContext(NewsContext);
  console.log(data, history, location);
  const param = slugify(match.params.url);
  // const news = data?.articles?.find(n => n.title === selectedNews);
  const news = data?.articles.find((n) => slugify(n.title) === param);
  let linkedHandle = news?.url;
  return (
    <div>
      <article className="details">
        <h1 className="details__title">{news?.title}</h1>
        <p className="details__desc">{news?.description}</p>
        <img className="news__image" src={news?.urlToImage} alt="new"></img>
        <span className="details__author">{news?.author}</span> <br />
        <div className="details__content">{news?.content}</div>
        <a href={linkedHandle} target="_blank">See Original Source</a>
      </article>
    </div>
  );
}
