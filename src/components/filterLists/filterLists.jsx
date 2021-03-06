import React from "react";

const FilterLists = (props) => {
  return (
    <div>
      <div className="filter-list">
        <button
          className="filter-item"
          value={props.value}
          onClick={props.clicked}
        >
          {props.children}
        </button>
      </div>
    </div>
  );
};

export default FilterLists;
