import React from 'react';
import axios from 'axios';

function ArticleList() {
  const [articleList, setArticleList] = React.useState([]);
  React.useEffect(() => {
    axios.get('https://6088e20da6f4a300174271e7.mockapi.io/articles')
      .then(response => {
        setArticleList(response.data)
      })
      .catch(error => {
        console.log(error.response)
      });
  }, [])
  return (
    <>
    </>
  );
}

export default ArticleList;
