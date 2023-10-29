import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Detail from "../../components/DetailCard/Detail";
import "./WarehouseInfo.css";
const WarehouseInfo = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const warehouse = useSelector((state) => state.warehouse);

  useEffect(() => {
    if (warehouse) {
      setData(warehouse.filter((ele) => ele.id === parseInt(id, 10)));
    }
  }, []);

  return (
    <div className="info-container">
      <Detail data={data} />
      <div className="edit-btn-container">
        <button className="edit-btn-heading">Edit Details</button>
      </div>
    </div>
  );
};

export default WarehouseInfo;
