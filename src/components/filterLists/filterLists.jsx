import React from 'react';

const FilterLists = (props) =>{
    return (
      <div >
        <ul>
          <li id={props.id} onClick={props.clicked}>
            {props.children}
          </li>
        </ul>
      </div> 
    );
};

export default FilterLists;