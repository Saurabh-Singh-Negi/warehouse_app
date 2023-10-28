import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Card from "../../components/WarehouseCard/Card";
import { useDispatch, useSelector } from "react-redux";
import { setWarehouseData } from "../../store/slices/warehouseSlice";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const warehouseData = useSelector((state) => state.warehouse);

  useEffect(() => {
    axios
      .get("https://warehouse-api-dadw.onrender.com/details")
      .then((response) => {
        dispatch(setWarehouseData(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);
  console.log("Warehouse Data in Home:", warehouseData);
  return (
    <div className="home-container">
      {warehouseData &&
        warehouseData.map((element, index) => (
          <Card key={index} warehouseData={element} />
        ))}
    </div>
  );
};

export default Home;
