import React from "react";
import { Switch, Route } from "react-router-dom";
import { NewsContextProvider } from "./NewsContext";
import Details from "./components/Details";
import Category from "./components/Category";
import News from "./components/News";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoriesBar from "./components/CategoriesBar";

function App() {
  return (
    <div>
      <Header />
      <CategoriesBar />
      <NewsContextProvider>
        <Switch>
          <Route exact path="/" component={News} />
          <Route path="/category/:categ" component={Category} />
          <Route path="/search/:term" component={Category} />
          <Route path="/details/:url" component={Details} />
        </Switch>
      </NewsContextProvider>
      <Footer />
    </div>
  );
}

export default App;
