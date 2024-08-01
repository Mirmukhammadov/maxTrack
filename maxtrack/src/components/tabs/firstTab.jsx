import Input from "../input/input";
import Select from "../select-input/select-input";
import SelectIcon from "..//../assets/icons/Arrow-Down.svg";
import "./firstTab.css";

function FirstTab() {
  return (
    <>
      <div className="tab">
        <div className="tab__main">
          <h2 className="heading2">Основные данные</h2>
          <Input placeholder="Название объекта " span={true}>
            *
          </Input>
          <Select
            optionsValue="Другое"
            options={["Транспорт", "Человек", "Животное", "Другое"]}
            icon={SelectIcon}
          />
          <div className="tab__div">
            <Select
              optionsValue="Статус"
              options={["АКТИВНЫЙ", "НЕАКТИВНЫЙ"]}
              icon={SelectIcon}
            />
            <Input placeholder="ikonka" type="file" ikonka={true} />
          </div>

          <div className="tab__div">
            <Select
              optionsValue="Создатель"
              options={[, "4a Vision", "4G IloT RTU"]}
              icon={SelectIcon}
            />
            <Select
              optionsValue="Учетная запись"
              options={[, "АКТИВНЫЙ", "НЕАКТИВНЫЙ"]}
              icon={SelectIcon}
            />
          </div>
        </div>

        <div className="tab__main">
          <h2 className="heading2">Дополнительные данные</h2>

          <Select
            optionsValue="Тип устройства *"
            options={["Транспорт", "Человек", "Животное", "Другое"]}
            icon={SelectIcon}
          />

          <div className="tab__div">
            <Input placeholder="Адрес сервера" type="email" />
            <Input placeholder="Уникальный ID (IMEI)" type="number" />
          </div>

          <div className="tab__div">
            <Input placeholder="Телефонный номер 1" type="phone number" />
            <Input placeholder="Телефонный номер 2" type="number" />
          </div>
          <Input placeholder="Пароль" type="password" />

          <div className="tab__div">
            <Input placeholder="Счетчик GPRS-трафика" type="text" />
            <Input placeholder="Текущее значение (кб)" type="text" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstTab;
