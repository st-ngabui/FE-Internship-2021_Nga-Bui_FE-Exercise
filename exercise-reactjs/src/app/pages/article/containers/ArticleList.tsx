import React from 'react';
import axios from 'axios';
import Article from './Article';
import PageRenderer from './PageRenderer';

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

interface IPropsArticleList {
  data: IArticle[];
}

const ArticleListUI = (props: IPropsArticleList) => {
  const { data } = props;
  return (
    <div className="articles-wrap">
      <ul className="container article-list">
        {data.map((article: IArticle) => {
          return (
            <li className="article-item" key={article.id}>
              <Article article={article} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const ArticleListRender = PageRenderer(ArticleListUI);

const ArticleList = () => {
  const [articleList, setArticleList] = React.useState<IArticle[]>();

  React.useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/articles`)
      .then(response => {
        setArticleList(response.data);
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  return (
    <ArticleListRender data={articleList} />
  );
}

export default ArticleList;
