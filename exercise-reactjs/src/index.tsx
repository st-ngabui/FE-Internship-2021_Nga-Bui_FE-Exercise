import ReactDom from 'react-dom';
import React from 'react';
import ArticleList from './app/pages/article/containers/ArticleList';

const App = () => {
  return (
    <ArticleList/>
  )
}

ReactDom.render(<App />, document.getElementById("root"));
