import React from 'react';
import PropTypes from 'prop-types';
import { IArticle }  from './ArticleList';
import { BY, MINSREAD } from '../../../core/constants/text';

interface PropsInterface {
  article: IArticle;
}

function Article(props: PropsInterface) {
  const {article} = props;
  return (
    <div className="row article">
      <div className="col-4 img-wrap">
        <img className="img" src={article.image} alt={article.title} />
      </div>
      <div className="col-8 content">
        <p className="category">{article.category}</p>
        <h4 className="title">
          {article.title}
        </h4>
        <p className="desc">{article.desc}</p>
        <div className="group-info">
          <p className="author">{BY} <span className="author-right">{article.author}</span></p>
          <p className="create-date">{article.createdAt}</p>
          <p className="minsRead">{article.minsRead} {MINSREAD}</p>
        </div>
      </div>
    </div>
  );
}

export default Article;
