// VehicleRow.js
import React from "react";
import "./dashboardMain.css"; // Assuming you have styles in this file
import vectorIcon from "../../assets/icons/Vector.svg";

const dashboardMain = ({ vehicle }) => {
  return (
    <tr>
      <td>{vehicle.id}</td>
      <td>{vehicle.licensePlate}</td>
      <td>{vehicle.objectName}</td>
      <td>{vehicle.driver}</td>
      <td>{vehicle.imei}</td>
      <td>{vehicle.simNumber}</td>
      <td>
        <div
          className="iconStyle"
          style={{ backgroundColor: vehicle.markerColor }}
        >
          {" "}
          <img src={vectorIcon} alt="Vehicle Icon" />
        </div>
      </td>
      <td>{vehicle.action}</td>
    </tr>
  );
};

export default dashboardMain;
