import React from 'react';
import PropTypes from 'prop-types';
import { IArticle }  from './ArticleList';
import { MINSREAD } from '../../../core/constants/text';

interface IArticleItem {
  article: IArticle;
}

function Article({article}: IArticleItem) {
  return (
    <div className="row article-wrap">
      <div className="col-4 article-img-wrap">
        <img className="article-img" src={article.image} alt={article.title}/>
      </div>
      <div className="col-8 article-content">
        <p className="article-category">{article.category}</p>
        <h4 className="article-title">
          {article.title}
        </h4>
        <p className="article-desc">{article.desc}</p>
        <div className="article-group-info">
          <p className="article-author">BY <span className="article-author-right">{article.author}</span></p>
          <p className="article-create-date">{article.createdAt}</p>
          <p className="article-minsRead">{article.minsRead} {MINSREAD}</p>
        </div>
      </div>
    </div>
  );
}

export default Article;
