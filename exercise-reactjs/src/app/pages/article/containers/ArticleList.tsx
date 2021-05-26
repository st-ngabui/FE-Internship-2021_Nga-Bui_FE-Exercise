import React from 'react';
import axios from 'axios';
import Article from '../components/Article';
import '../../../../assets/style.scss';

function ArticleList() {
  const [articleList, setArticleList] = React.useState([]);
  React.useEffect(() => {
    axios.get('https://6088e20da6f4a300174271e7.mockapi.io/articles')
      .then(response => {
        setArticleList(response.data)
      })
      .catch(error => {
        console.log(error.response)
      });
  }, [])
  return (
    <div className="articles-wrap">
      <div className="container article-list">
        {articleList.map((article, idx) => {
          return (
            <Article article={article} key={idx} />
          )
        })}
      </div>
    </div>
  );
}

export default ArticleList;
