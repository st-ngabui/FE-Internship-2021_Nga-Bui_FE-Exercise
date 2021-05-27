import React from 'react';
import axios from 'axios';

interface IArticle {
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
    axios.get(`${process.env.API_BASE_URL}/articles`)
      .then(response => {
        setArticleList(response.data);
      })
      .catch(error => {
        throw new Error(error);
      });
  }, [])
  return (
    <>
    </>
  );
}

export default ArticleList;
