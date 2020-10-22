import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NewsContextProvider } from "./NewsContext";
import Details from "./components/Details";
import News from "./components/News";
import "./App.css";

function App() {
  return (
    <div>
    <Switch> 
      <NewsContextProvider>
        <Route path="/" exact render={()=> <News />}/>
        <Route path="/details" exact render={()=> <Details />}/>
      </NewsContextProvider>
    </Switch>
    </div>
  );
}

export default App;