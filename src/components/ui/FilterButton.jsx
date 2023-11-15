import React from "react";
import { FilterBox } from "../../styles/Style";

const FilterButton = ({ FilterNames, filter, setFilter }) => {
  const FilterButtons = FilterNames.map((filterbutton) => (
    <button className={filterbutton === filter ? "active" : ""} onClick={() => setFilter(filterbutton)}>{filterbutton}</button>
  ));

  return <FilterBox>{FilterButtons}</FilterBox>;
};

export default FilterButton;
