import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsArticle from "./NewsArticle";
import NewsApi from "../services/NewsApi";
//import Header from "./Header";

export default function Category(props) {
  let { categ, term } = useParams();
  const [news, setNews] = useState([]);
  const newsApi = new NewsApi();

  useEffect(() => {
    if(categ) {
      newsApi.getNewsByCategory(categ).then((resp) => {
        console.log("RESPONSE", resp.data.articles);
        setNews(resp.data.articles);
      });
    }

    if(term) {
      newsApi.search(term).then((resp) => {
        console.log("RESPONSE", resp.data.articles);
        setNews(resp.data.articles);
      });
    }
  }, []);

  const renderTerm = () => {
    let label = ""

    if(categ) {
      label = `Category ${categ}`
    }

    if(term) {
      label = `Search by ${term}`
    }

    return label
  }

  return (
    <div>
      {/* <Header /> */}
      <div>
        <h2>{renderTerm()}:</h2>
        <br/>
      </div>
      <div className="all__news">
        {news
          ? news.map((item) => (
              <NewsArticle
                data={item}
                key={item.url}
                {...props}
                setSelectedNews={() => {}}
              />
            ))
          : "Loading"}
        <hr className="cover-lines"></hr>
      </div>
    </div>
  );
}
