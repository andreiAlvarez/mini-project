
import axios from "axios";

export default class NewsApi {
  apiKey = process.env.REACT_APP_NEWS_API_SECRET_KEY;

  // getNews = () => {
  //   return axios.get(
  //       `http://newsapi.org/v2/top-headlines?country=us&from=2020-12-21&sortBy=publishedAt&apiKey=${this.apiKey}`
  //     );
  // }

  getNewsByCategory = (categ) => {
    return axios.get(
      `http://newsapi.org/v2/top-headlines?country=us&category=${categ}&apiKey=${this.apiKey}`
    );
  };

  
  search = (term) => {
    return axios.get(
        `https://newsapi.org/v2/everything?q=${term}&apiKey=${this.apiKey}`
      );
  }
}