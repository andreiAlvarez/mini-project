import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import { Headline } from "./Headline";
import NewsArticle from "./NewsArticle";
import Header from "./Header";
import CategoriesBar from "./CategoriesBar";

function News(props) {
  const { data, setSelectedNews } = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      <Header />
      <CategoriesBar />
      <hr className="cover-lines"></hr>
      <div className="all__news">
        {data
          ? data.articles.map((news, index) =>
              index === 0 ? (
                <Headline data={news} key={news.url} />
              ) : (
                <NewsArticle
                  data={news}
                  key={news.url}
                  {...props}
                  setSelectedNews={setSelectedNews}
                />
              )
            )
          : "Loading"}
        <hr className="cover-lines"></hr>
      </div>
    </div>
  );
}

export default News;
