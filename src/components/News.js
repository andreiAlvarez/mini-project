import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import { Headline } from "./Headline";
import NewsArticle from "./NewsArticle";


function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);
  return (
    <div>
      <h1 className="head__text">The Ironhack Post</h1>
      <hr className="cover-lines"></hr>
      <div className="all__news">
        {data
          ? data.articles.map((news, index) =>
              index === 0 ? (
                  <Headline data={news} key={news.url} /> 
              ): <NewsArticle data={news} key={news.url} />
            )
          : "Loading"}
          <hr className="cover-lines"></hr>
      </div>
    </div>
  );
}

export default News;
