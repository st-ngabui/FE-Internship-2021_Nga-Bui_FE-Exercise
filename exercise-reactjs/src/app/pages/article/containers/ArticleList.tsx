import React from 'react';
import Article from './Article';
import PageRenderer from './PageRenderer';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../../../store/articles/actions';
import { IState } from '../../../store/interface';

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
  const articleList = useSelector((state: IState) => state.articles.data);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getArticles());
  }, [])
  
  return (
    <ArticleListRender data={articleList} />
  );
}

export default ArticleList;
