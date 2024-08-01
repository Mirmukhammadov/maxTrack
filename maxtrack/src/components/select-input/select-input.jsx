import "./select-input.css";
// import Img from "../../assets/icons/userIcons";

function Select({ options, optionsValue, icon }) {
  return (
    <>
      <select
        name=""
        id=""
        className="select-input"
        style={{ backgroundImage: `url(${icon})` }}
      >
        <option value="" disabled selected>
          {optionsValue}
        </option>
        {options.map((option, index) => (
          <option
            value={option}
            key={index}
            className={`custom-select-option ${
              option === "АКТИВНЫЙ"
                ? "active-option"
                : option === "НЕАКТИВНЫЙ"
                ? "inactive-option"
                : ""
            }`}
          >
            {option}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;
