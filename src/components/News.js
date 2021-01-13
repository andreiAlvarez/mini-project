import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import { Headline } from "./Headline";
// import CategoriesBar from "./CategoriesBar";

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      {/* <CategoriesBar /> */}
      <div className="all__news">
        {data
          ? data.articles.map((news) =>
          news.source.name !== "Google News" && <Headline data={news} key={news.url} /> 
            )
          : "Loading"}
        <hr className="cover-lines"></hr>
      </div>
    </div>
  );
}

export default News;
