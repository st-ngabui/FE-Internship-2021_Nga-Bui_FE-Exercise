import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { IArticle } from './ArticleList';
import { useParams } from 'react-router';
import axios from 'axios';
import { BY, MINSREAD, EST } from '../../../core/constants/text';
import { functions } from '../../../core/functions';
import PageRenderer from './PageRenderer';

type IArticleDetail = IArticle & {
  content: string;
}

interface IParam {
  id: string;
}

interface IPropArticleDetail {
  data: IArticleDetail;
}

const ArticleDetailUI = (props: IPropArticleDetail) => {
  const { data } = props;
  return (
    <div className="container article-detail">
      <div className="row article">
        <div className="col-3 img-wrap">
          <img className="img" src={data.image} alt={data.title} />
        </div>
        <div className="col-9 content">
          <p className="category">{data.category}</p>
          <h4 className="title">
            {data.title}
          </h4>
          <p className="desc">{data.desc}</p>
          <p className="content-text">{data.content}</p>
          <div className="group-info">
            <p className="author">{functions.text.replaceText(BY, data.author)}</p>
            <p className="create-date">{functions.text.replaceText(EST, functions.dateTime.formatDate(data.createdAt))}</p>
            <p className="minsRead">{functions.text.replaceText(MINSREAD, data.minsRead)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const ArticleDetailRender = PageRenderer(ArticleDetailUI);

const ArticleDetail = () => {
  const { id }: IParam = useParams();
  const [articleDetail, setArticleDetail] = useState<IArticleDetail>();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/articles/${id}`)
      .then(response => {
        setArticleDetail(response.data);
      })
      .catch(error => {
        console.log(error)
      })
  }, [id])

  return (
    <ArticleDetailRender data={articleDetail} />
  );
}

export default ArticleDetail;
