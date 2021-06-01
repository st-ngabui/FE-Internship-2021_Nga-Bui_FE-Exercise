import React, { Suspense } from 'react';
import '../src/stylesheet/style.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";

const ArticleList = React.lazy(() => import('./app/pages/article/containers/ArticleList'));
const ArticleDetail = React.lazy(() => import('./app/pages/article/containers/ArticleDetail'))
function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path='/' component={ArticleList} />
          <Route path='/articles/:id' component={ArticleDetail} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
