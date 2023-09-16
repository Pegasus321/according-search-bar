import React, { useState } from "react";
import "./Search.css";

export const Search = ({ data, filteredData }) => {
  const [Search, setSearch] = useState("");
  const handleSearchChange = (e) => {
    const searched = e.target.value.toLowerCase();
    setSearch(searched);

    const filteringData = data.filter((item) =>
      item.fullName.toLowerCase().includes(searched)
    );
    filteredData(filteringData);
  };
  return (
    <div>
      <input
        className="search-bar"
        type="text"
        value={Search}
        onChange={handleSearchChange}
        placeholder="Search User"
      />
    </div>
  );
};
