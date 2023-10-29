import React, { useState } from "react";
import "./FilterWarehouse.css";

const FilterWarehouse = ({ warehouseData, setWarehouseDataDup }) => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCluster, setSelectedCluster] = useState("");
  const [selectedSpace, setSelectedSpace] = useState("");

  const handleFilter = () => {
    setWarehouseDataDup(
      warehouseData.filter(
        (ele) =>
          (selectedCity === "" || ele.city === selectedCity) &&
          (selectedCluster === "" || ele.cluster === selectedCluster) &&
          (selectedSpace === "" ||
            ele.space_available === parseInt(selectedSpace, 10))
      )
    );
  };

  const handleClearFilter = () => {
    setSelectedCity("");
    setSelectedCluster("");
    setSelectedSpace("");
    setWarehouseDataDup(warehouseData);
  };
  return (
    <div className="filter-warehouse-container">
      <div>
        <select
          onChange={(e) => setSelectedCity(e.target.value)}
          value={selectedCity}
          className="city-select"
        >
          <option value="">Select City</option>
          {warehouseData.map((ele, index) => (
            <option key={index} value={ele.city}>
              {ele.city}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          onChange={(e) => setSelectedCluster(e.target.value)}
          value={selectedCluster}
        >
          <option value="">Select Cluster</option>
          {warehouseData.map((ele, index) => (
            <option key={index} value={ele.cluster}>
              {ele.cluster}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select
          onChange={(e) => setSelectedSpace(e.target.value)}
          value={selectedSpace}
        >
          <option value="">Space Available</option>
          {warehouseData.map((ele, index) => (
            <option key={index} value={ele.space_available}>
              {ele.space_available}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleFilter}>Apply Filter</button>
      <button onClick={handleClearFilter}>Clear Filter</button>
    </div>
  );
};

export default FilterWarehouse;
