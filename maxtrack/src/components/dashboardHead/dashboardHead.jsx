// DashboardHead.js
import React from "react";
import "./dashboardHead.css"; // Assuming you have styles in this file

const DashboardHead = () => {
  return (
    <thead>
      <tr>
        <th>ID</th>
        <th>Гос. Номер</th>
        <th>Название Объекта</th>
        <th>Водитель</th>
        <th>IMEI</th>
        <th>Номер SIM-Карты</th>
        <th>Цвет Маркера Объекта</th>
        <th>Действие</th>
      </tr>
    </thead>
  );
};

export default DashboardHead;
