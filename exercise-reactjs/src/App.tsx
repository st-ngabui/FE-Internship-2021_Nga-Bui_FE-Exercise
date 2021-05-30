import React from 'react';
import ArticleList from './app/pages/article/containers/ArticleList';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import '../src/stylesheet/style.css';
import ArticleDetail from './app/pages/article/containers/ArticleDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ArticleList} />
        <Route path='/articles/:id' component={ArticleDetail} />
      </Switch>
    </Router>
  );
}

export default App;
