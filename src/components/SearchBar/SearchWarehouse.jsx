import React, { useState } from "react";

const SearchWarehouse = ({ warehouseData, setWarehouseDataDup }) => {
  const [searchText, setSeachText] = useState("");

  const handleSearch = () => {
    const res = warehouseData.filter((ele) => ele.name.includes(searchText));
    setWarehouseDataDup(res);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search warehouse"
        onChange={(e) => setSeachText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchWarehouse;
