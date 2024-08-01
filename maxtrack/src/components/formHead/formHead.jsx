import "./formHead.css";
import React, { forwardRef } from "react";
import Button from "../button/button";
import FirstTab from "../tabs/firstTab";
import SecondTab from "../tabs/secondTab";
import ThirdTab from "../tabs/thirdTab";
import FourthTab from "../tabs/fourthTab";
import FiveTab from "../tabs/fiveTab";

const Form = React.forwardRef((_, formRef) => {
  const [tabs, setTabs] = React.useState("Основное");

  const renderContent = () => {
    switch (tabs) {
      case "Основное":
        return <FirstTab />;
      case "Характеристики":
        return <SecondTab />;
      case "Датчики":
        return <ThirdTab />;
      case "Детектор поездок":
        return <FourthTab />;
      case "Произвольные поля":
        return <FiveTab />;
      default:
        return null;
    }
  };

  return (
    <div className="formHead-display" ref={formRef}>
      <div className="formHead-main">
        <h2 className="heading1">Новый объект</h2>
        <Button onClick={() => formRef.current.classList.remove("form-show")}>
          X
        </Button>
      </div>
      <div className="tab-container">
        {[
          "Основное",
          "Характеристики",
          "Датчики",
          "Детектор поездок",
          "Произвольные поля",
        ].map((item) => (
          <div className="formHead" key={item} onClick={() => setTabs(item)}>
            <span>{item}</span>
          </div>
        ))}
      </div>

      <form className="forma">
        {renderContent()}
        <Button formButton={true}>Создать</Button>
      </form>
    </div>
  );
});

export default Form;
