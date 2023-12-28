import React from "react";

// 스타일
import { FilterBox } from "../../styles/Style";

const FilterButton = ({ FilterNames, filter, setFilter }) => {
  const FilterButtons = FilterNames.map((filterbutton, index) => (
    <button key={index} className={filterbutton === filter ? "active" : ""} onClick={() => setFilter(filterbutton)}>{filterbutton}</button>
  ));

  return <FilterBox>{FilterButtons}</FilterBox>;
};

export default FilterButton;
