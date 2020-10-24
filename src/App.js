import React from "react";
import { Switch, Route } from "react-router-dom";
import { NewsContextProvider } from "./NewsContext";
import Details from "./components/Details";
import Category from "./components/Category";
import News from "./components/News";
import "./App.css";

function App() {
  return (
    <div>
      <NewsContextProvider>
        <Switch>
          <Route exact path="/" component={News} />
          <Route path="/details/:url" component={Details} />
          <Route path="/category/:categ" component={Category} />
        </Switch>
      </NewsContextProvider>
    </div>
  );
}

export default App;
