import React from "react";
import { useState } from "react";
import "./main.css";
import Button from "../button/button";
// import Button from '../../assets/icons/Add.svg'
import DashboardHead from "../dashboardHead/dashboardHead";
import DashboardMain from "../dashboardMain/dashboardMain";
import { Search } from "../search/search";
import filterIcon from "../../assets/icons/filter-lines.svg";
import plusIcon from "../../assets/icons/Add.svg";
import vectorIcon from "../../assets/icons/Vector.svg";

function Main({ formRef }) {
  const [activeButton, setActiveButton] = React.useState(false);

  const toggleActive = () => {
    setActiveButton(!activeButton);
    console.log("Toggle active", activeButton);
  };

  const handleForm = () => {
    formRef.current.classList.add("form-show");
  };

  const isFormShown =
    formRef.current && formRef.current.classList.contains("form-show");

  const vehicles = [
    {
      id: 122470,
      licensePlate: "01 603 QFA",
      objectName: "Man",
      driver: "Sabridinkhon Sharofidinov",
      imei: "866039048444302",
      simNumber: "998 99 992 84 12",
      markerColor: "red",
      action: "...",
    },
    {
      id: 789235,
      licensePlate: "01 425 FUA",
      objectName: "Cobalt",
      driver: "Doston Toshbekov",
      imei: "866039048444302",
      simNumber: "998 91 992 54 45",
      markerColor: "blue",
      action: "...",
    },
    {
      id: 823646,
      licensePlate: "01 676 FAQ",
      objectName: "Damas",
      driver: "Lazizbek Hamidov",
      imei: "866039048444302",
      simNumber: "998 99 992 84 12",
      markerColor: "green",
      action: "...",
    },
    // Add more vehicle objects here
  ];
  return (
    <main className={`main ${isFormShown ? "isFormShown" : "isFormHide"}`}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5 10C17.5 10.1658 17.4342 10.3247 17.3169 10.4419C17.1997 10.5592 17.0408 10.625 16.875 10.625H10.625V16.875C10.625 17.0408 10.5592 17.1997 10.4419 17.3169C10.3247 17.4342 10.1658 17.5 10 17.5C9.83424 17.5 9.67527 17.4342 9.55806 17.3169C9.44085 17.1997 9.375 17.0408 9.375 16.875V10.625H3.125C2.95924 10.625 2.80027 10.5592 2.68306 10.4419C2.56585 10.3247 2.5 10.1658 2.5 10C2.5 9.83424 2.56585 9.67527 2.68306 9.55806C2.80027 9.44085 2.95924 9.375 3.125 9.375H9.375V3.125C9.375 2.95924 9.44085 2.80027 9.55806 2.68306C9.67527 2.56585 9.83424 2.5 10 2.5C10.1658 2.5 10.3247 2.56585 10.4419 2.68306C10.5592 2.80027 10.625 2.95924 10.625 3.125V9.375H16.875C17.0408 9.375 17.1997 9.44085 17.3169 9.55806C17.4342 9.67527 17.5 9.83424 17.5 10Z"
          fill="white"
        />
      </svg>
      <h1 className="heading1">Список объектов</h1>

      <div className="div-btn">
        <Button
          className="spisok-btn"
          active={!activeButton}
          onClick={toggleActive}
        >
          Список
        </Button>
        <Button
          className="grupi-btn"
          active={activeButton}
          onClick={toggleActive}
        >
          Группы
        </Button>
      </div>

      <div className="div-filter">
        <Search type="text" placeholder="Поиск" className="search-input" />
        <div className="div-filter-btn">
          <Button icon={filterIcon}>Filters</Button>
          <Button icon={plusIcon} secondary={true} onClick={handleForm}>
            Добавить
          </Button>
        </div>
      </div>

      <div className="table-div">
        <table className="dashboard-table">
          <DashboardHead />
          <tbody>
            {vehicles.map((vehicle, index) => (
              <DashboardMain key={index} vehicle={vehicle} />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Main;
