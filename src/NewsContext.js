import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const [dataCategory] = useState('');

  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://newsapi.org/v2/top-headlines?country=us&from=2020-10-21&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API_SECRET_KEY}`
  //     )
  //     .then((response) => setData(response.data))
  //     .catch((error) => console.log(error));
  // }, []);
  
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${dataCategory}&apiKey=${process.env.REACT_APP_NEWS_API_SECRET_KEY}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [dataCategory]);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
