import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";
//import Header from "./Header";

export default function Category(props) {
  const { dataCategory, setSelectedNews } = useContext(NewsContext);
  console.log(dataCategory);

  return (
    <div>
      {/* <Header /> */}
      <div>
        <h2>{dataCategory}:</h2>
      </div>
      <hr className="cover-lines"></hr>
      <div className="all__news">
        {dataCategory
          ? dataCategory.articles.map((news) => (
              <NewsArticle
                data={news}
                key={news.url}
                {...props}
                setSelectedNews={setSelectedNews}
              />
            ))
          : "Loading"}
        <hr className="cover-lines"></hr>
      </div>
    </div>
  );
}
