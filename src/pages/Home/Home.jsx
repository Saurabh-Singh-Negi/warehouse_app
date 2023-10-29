import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Card from "../../components/WarehouseCard/Card";
import { useDispatch, useSelector } from "react-redux";
import { setWarehouseData } from "../../store/slices/warehouseSlice";
import "./Home.css";
import SearchWarehouse from "../../components/SearchBar/SearchWarehouse";
import FilterWarehouse from "../../components/Filter/FilterWarehouse";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [warehouseDataDup, setWarehouseDataDup] = useState([]);
  const dispatch = useDispatch();
  const warehouseData = useSelector((state) => state.warehouse);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://warehouse-api-dadw.onrender.com/details")
      .then((response) => {
        dispatch(setWarehouseData(response.data));
        setWarehouseDataDup(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  const handleClick = (id) => {
    navigate(`/warehouseinfo/${id}`);
  };
  return (
    <div className="parent-home-container">
      <div className="home-search-container">
        <SearchWarehouse
          warehouseData={warehouseData}
          setWarehouseDataDup={setWarehouseDataDup}
        />
        <FilterWarehouse
          warehouseData={warehouseData}
          setWarehouseDataDup={setWarehouseDataDup}
        />
      </div>
      <div className="home-container">
        {warehouseDataDup &&
          warehouseDataDup.map((element) => (
            <div key={element.id} onClick={() => handleClick(element.id)}>
              <Card warehouseData={element} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
