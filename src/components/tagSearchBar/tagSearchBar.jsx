import React from 'react';
import "./tagSearchBar.css";
import deleteLogo from "../../images/icon-remove.svg"

const TagSearchBar = ({filters, handleDeleteFilters}) =>{



return (
  <div className="tag-search-container">
    {filters.map((tag) => (
      <div className="filters-container">
        <div className="filters">{tag}</div>
        <button onClick={() => handleDeleteFilters(tag)} className="x">
          <img className="remove-icon" src={deleteLogo} />
        </button>
      </div>
    ))}
  </div>
);
};

export default TagSearchBar;