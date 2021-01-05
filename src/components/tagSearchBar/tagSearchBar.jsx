import React from "react";
import "./tagSearchBar.css";
import deleteLogo from "../../images/icon-remove.svg";

const TagSearchBar = ({ filters, handleDeleteFilters }) => {
  return (
    <div className="tag-search-container">
      <div className="filter-wrapper">
        {filters.map((tag) => (
          <div className="filters-container">
            <div className="filters">{tag}</div>
            <button onClick={() => handleDeleteFilters(tag)} className="x">
              <img
                alt="remove-filter-icon"
                className="remove-icon"
                src={deleteLogo}
              />
            </button>
          </div>
        ))}
      </div>
      <button className="clear-button">clear</button>
    </div>
  );
};

export default TagSearchBar;
