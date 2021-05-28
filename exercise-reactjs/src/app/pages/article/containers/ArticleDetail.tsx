import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { IArticle } from './ArticleList';
import { useParams } from 'react-router';
import axios from 'axios';
import { BY, MINSREAD, EST } from '../../../core/constants/text';
import { replaceText } from '../../../core/functions/replaceText';
import { formatDate } from '../../../core/functions/formatDate';

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
  const { id }: IParam = useParams();
  const [articleDetail, setArticleDetail] = useState<IArticleDetail>(initialState);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`${process.env.REACT_APP_BASE_URL}/articles/${id}`)
      .then(response => {
        setArticleDetail(response.data);
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id])

  return (
    <div className="container article-detail">
      {!isLoading
        ?
        (
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
                <p className="create-date">{replaceText(EST, formatDate(articleDetail.createdAt))}</p>
                <p className="minsRead">{replaceText(MINSREAD, articleDetail.minsRead)}</p>
              </div>
            </div>
          </div>
        )
        :
        (<p>Loading ...</p>)
      }
    </div>
  );
}

export default ArticleDetail;
