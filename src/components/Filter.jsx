import React from "react";

const Filter = ({ filter, setFilter }) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label htmlFor="filter">Filter: </label>
      <select
        id="filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
      </select>
    </div>
  );
};

export default Filter;
