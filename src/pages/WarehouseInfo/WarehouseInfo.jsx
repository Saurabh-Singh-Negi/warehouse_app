import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Detail from "../../components/DetailCard/Detail";
import "./WarehouseInfo.css";
import EditDetails from "../../components/EditDetails/EditDetails";

const WarehouseInfo = () => {
  const [data, setData] = useState([]);
  const [editDetail, setEditDetail] = useState(false);
  const { id } = useParams();
  const warehouse = useSelector((state) => state.warehouse);

  useEffect(() => {
    if (warehouse) {
      setData(warehouse.filter((ele) => ele.id === parseInt(id, 10)));
    }
  }, []);

  return editDetail ? (
    <EditDetails data={data[0]} />
  ) : (
    <div className="info-container">
      <Detail data={data} />
      <div className="edit-btn-container">
        <button
          className="edit-btn-heading"
          onClick={() => setEditDetail(true)}
        >
          Edit Details
        </button>
      </div>
    </div>
  );
};

export default WarehouseInfo;
