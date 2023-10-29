import React, { useState } from "react";
import "./SearchWarehouse.css";
const SearchWarehouse = ({ warehouseData, setWarehouseDataDup }) => {
  const [searchText, setSeachText] = useState("");

  const handleSearch = () => {
    const res = warehouseData.filter((ele) => ele.name.includes(searchText));
    setWarehouseDataDup(res);
  };

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="search warehouse"
        onChange={(e) => setSeachText(e.target.value)}
      />
      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchWarehouse;
