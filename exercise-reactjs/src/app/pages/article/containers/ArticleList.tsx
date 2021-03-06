import React from 'react';
import axios from 'axios';
import Article from './Article';

export interface IArticle {
  id: number;
  title: string;
  desc: string;
  author: string;
  createdAt: string;
  minsRead: string;
  category: string;
  image: string;
}
const ArticleList = () => {
  const [articleList, setArticleList] = React.useState<IArticle[]>([]);
  React.useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/articles`)
      .then(response => {
        setArticleList(response.data);
      })
      .catch(error => {
        console.log(error)
      });
  }, [])
  return (
    <div className="articles-wrap">
      <ul className="container article-list">
        {articleList.map((article: IArticle) => {
          return (
            <li className="article-item" key={article.id}>
              <Article article={article}/>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default ArticleList;
