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
    axios.get(`https://6088e20da6f4a300174271e7.mockapi.io/articles`)
      .then(response => {
        setArticleList(response.data);
      })
      .catch(error => {
        console.log(error)
      });
  }, [])
  return (
    <div>
      <p>Article List</p>
    </div>
  );
}

export default ArticleList;
