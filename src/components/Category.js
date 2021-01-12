import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsArticle from "./NewsArticle";
import NewsApi from "../services/NewsApi";
import CategoriesBar from "./CategoriesBar";

export default function Category(props) {
  let { categ, term } = useParams();
  const [news, setNews, setSelectedNews] = useState([]);
  const newsApi = new NewsApi();

  useEffect(() => {
    if (categ) {
      newsApi.getNewsByCategory(categ).then((resp) => {
        console.log("RESPONSE", resp.data.articles);
        setNews(resp.data.articles);
      });
    }

    if (term) {
      newsApi.search(term).then((resp) => {
        console.log("RESPONSE", resp.data.articles);
        setNews(resp.data.articles);
      });
    }
    // eslint-disable-next-line
  }, []);

  const renderTerm = () => {
    let label = "";

    if (categ) {
      label = `Category ${categ}`;
    }

    if (term) {
      label = `Search by ${term}`;
    }

    return label;
  };

  return (
    <div>
      <CategoriesBar />
      <h2 className="category-upper">{renderTerm()}:</h2>
      <div className="all__news">
        {news
          ? news.map((item) => (
              <NewsArticle
                data={item}
                key={item.url}
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
