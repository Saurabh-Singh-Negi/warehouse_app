import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditDetails.css";
const EditDetails = ({ data }) => {
  const initialValues = {
    name: data.name,
    code: data.code,
    space_available: data.space_available,
    type: data.type,
    cluster: data.cluster,
    is_registered: data.is_registered,
    is_live: data.is_live,
  };
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState(initialValues);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setMessage("");
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "radio" ? value === "true" : value,
    });
  };

  const handleSubmit = () => {
    axios
      .put(
        "https://warehouse-api-dadw.onrender.com/details/" + data.id,
        formData
      )
      .then((res) => {
        setMessage("edited successfully");
      })
      .catch((err) => {
        setMessage("failed to edit");
      });
  };

  return (
    <div className="edit-parent-container">
      <form>
        <div className="edit-detail-input">
          Name{" "}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          Code{" "}
          <input
            type="text"
            name="code"
            value={formData.code}
            onChange={handleChange}
          />
        </div>
        <div>
          Space Available{" "}
          <input
            type="number"
            name="space_available"
            value={formData.space_available}
            onChange={handleChange}
          />
        </div>
        <div>
          Type{" "}
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
          />
        </div>
        <div>
          Cluster{" "}
          <input
            type="text"
            name="cluster"
            value={formData.cluster}
            onChange={handleChange}
          />
        </div>
        <div>
          Registered{" "}
          <input
            type="radio"
            name="is_registered"
            value="true"
            checked={formData.is_registered === true}
            onChange={handleChange}
          />
          true
          <input
            type="radio"
            name="is_registered"
            value="false"
            checked={formData.is_registered === false}
            onChange={handleChange}
          />
          false
        </div>
        <div>
          Live{" "}
          <input
            type="radio"
            name="is_live"
            value="true"
            checked={formData.is_live === true}
            onChange={handleChange}
          />
          true
          <input
            type="radio"
            name="is_live"
            value="false"
            checked={formData.is_live === false}
            onChange={handleChange}
          />
          false
        </div>
      </form>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default EditDetails;
