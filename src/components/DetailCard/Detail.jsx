import React from "react";
import "./Detail.css";
const Detail = ({ data }) => {
  console.log("daa", data);
  return (
    <>
      {" "}
      {data.map((ele) => (
        <div key={ele.id} className="detail-container">
          <div className="detail-heading-container">
            <p className="detail-heading">Name: {ele.name}</p>
            <p className="detail-heading">Code: {ele.code}</p>
            <p className="detail-heading">City: {ele.city}</p>
            <p className="detail-heading">
              Space Available: {ele.space_available}
            </p>
            <p className="detail-heading">Type: {ele.type}</p>
            <p className="detail-heading">Cluster: {ele.cluster}</p>
            <p className="detail-heading">
              Registered: {ele.is_registered ? "true" : "false"}
            </p>
            <p className="detail-heading">
              Live: {ele.is_live ? "true" : "false"}
            </p>
          </div>
          <div className="detail-details-container">
            <p className="detail-details">{ele.name}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Detail;
