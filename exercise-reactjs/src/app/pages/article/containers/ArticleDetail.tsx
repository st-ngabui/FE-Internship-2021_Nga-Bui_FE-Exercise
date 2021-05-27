import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { IArticle } from './ArticleList';
import { useParams } from 'react-router';
import axios from 'axios';
import { BY, MINSREAD } from '../../../core/constants/text';
import {replaceText} from './Article';

type IArticleDetail = IArticle & {
  content: string;
}

const initialState = {
  id: 0,
  title: "",
  desc: "",
  author: "",
  createdAt: "",
  minsRead: "",
  category: "",
  image: "",
  content: "",
}
interface IParam {
  id: string;
}
const ArticleDetail = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id }: IParam = useParams();
  const [articleDetail, setArticleDetail] = useState<IArticleDetail>(initialState);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/articles/${+id}`)
      .then(response => {
        setArticleDetail(response.data);
      })
      .catch(error => {
        console.log(error)
      });
  })
  return (
    <div className="container article-detail">
      <div className="row article">
        <div className="col-3 img-wrap">
          <img className="img" src={articleDetail.image} alt={articleDetail.title} />
        </div>
        <div className="col-9 content">
          <p className="category">{articleDetail.category}</p>
          <h4 className="title">
            {articleDetail.title}
          </h4>
          <p className="desc">{articleDetail.desc}</p>
          <p className="content-text">{articleDetail.content}</p>
          <div className="group-info">
            <p className="author">{replaceText(BY, articleDetail.author)}</p>
            <p className="create-date">{articleDetail.createdAt}</p>
            <p className="minsRead">{replaceText(MINSREAD, articleDetail.minsRead)}</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ArticleDetail;
