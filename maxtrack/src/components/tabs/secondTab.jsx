import Input from "../input/input";
import Select from "../select-input/select-input";
import Button from "../button/button";
import SelectIcon from "..//../assets/icons/Arrow-Down.svg";

import "./firstTab.css";

function secondTab() {
  return (
    <>
      <div className="tab">
        <div className="tab__main">
          <h2 className="heading2">Общие параметры</h2>
          <Input placeholder="Год автомобиля" />
          <Input placeholder=" Номерной знак" span={true}>
            *
          </Input>

          <div className="tab__div">
            <Select
              optionsValue="Водитель"
              options={[, "АКТИВНЫЙ", "НЕАКТИВНЫЙ"]}
              icon={SelectIcon}
            />
            <Button addDriver={true}>Добавить нового водителя</Button>
          </div>

          <div className="tab__div">
            <Select
              optionsValue="Счетчик пробега"
              options={[, "4a Vision", "4G IloT RTU"]}
            />
            <Input placeholder="Текущее значение * (км)" />
          </div>
          <div className="tab__div">
            <Select
              optionsValue="Счетчик моточасов"
              options={[, "4a Vision", "4G IloT RTU"]}
            />
            <Input placeholder="Текущее значение * (ч)" />
          </div>
        </div>
      </div>
    </>
  );
}

export default secondTab;
