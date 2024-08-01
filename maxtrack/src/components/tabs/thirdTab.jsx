import "./firstTab.css";
import Search from "../search/search.jsx";
import Button from "../button/button.jsx";

function thirdTab() {
  const data = [
    {
      portNumber: "1",
      sensorName: "Sensor A",
      hasCalibration: "Yes",
      serialNumber: "123456",
      action: "Edit",
    },
    {
      portNumber: "2",
      sensorName: "Sensor B",
      hasCalibration: "No",
      serialNumber: "654321",
      action: "Edit",
    },
    // Add more rows as needed
  ];

  return (
    <div className="thirdtab">
      <div className="thirdtab-div">
        <Button type="text" placeholder="Поиск" third="third">
          Добавить
        </Button>
        <Search type="text" placeholder="Поиск" className="search-input" />
      </div>

      <div className="custom-table-div">
        <table className="custom-table">
          <thead>
            <tr>
              <th>№ ПОРТА</th>
              <th>НАИМ. ДАТЧИКА</th>
              <th>ИМЕЕТ КАЛИБРОВКУ</th>
              <th>S/N ДАТЧИКА</th>
              <th>ДЕЙСТВИЕ</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.portNumber}</td>
                <td>{row.sensorName}</td>
                <td>{row.hasCalibration}</td>
                <td>{row.serialNumber}</td>
                <td>{row.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default thirdTab;
