import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Card from "../../components/WarehouseCard/Card";

const Home = () => {
  const [warehouseData, setWareHouseData] = useState([]);

  useEffect(() => {
    axios
      .get("https://warehouse-api-dadw.onrender.com/details")
      .then((response) => {
        setWareHouseData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
