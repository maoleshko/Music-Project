import React from 'react';
import './search.css';
import sprite from '../../img/icon/sprite.svg'


function Search() {
  return (
    <div className="centerblock__search search">
      <svg className="search__svg">
        <use xlinkHref={`${sprite}#icon-search`}></use>
      </svg>
      <input className="search__text" type="search" placeholder="Поиск" name="search"/>
    </div>
    )
}

export default  Search;