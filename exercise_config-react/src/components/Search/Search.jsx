import React from 'react';
import './Search.scss';

function Search(props) {
  return (
    <div className="search-wrap">
      <input className="search-input" type="text"/>
      <button className="search-btn" >Search</button>
    </div>
  );
}

export default Search;