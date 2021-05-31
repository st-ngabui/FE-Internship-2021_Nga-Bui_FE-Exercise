import React from 'react';
import PropTypes from 'prop-types';
import { IArticle } from './ArticleList';
import { BY, MINSREAD, EST } from '../../../core/constants/text';
import {functions} from '../../../core/functions';
import { Link } from 'react-router-dom';

interface PropsInterface {
  article: IArticle;
}

const Article = (props: PropsInterface) => {
  const { article } = props;
  
  return (
    <Link to={`/articles/${article.id}`}>
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
            <p className="author">{functions.text.replaceText(BY, article.author)}</p>
            <p className="create-date">{functions.text.replaceText(EST, functions.dateTime.formatDate(article.createdAt))}</p>
            <p className="minsRead">{functions.text.replaceText(MINSREAD, article.minsRead)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Article;
