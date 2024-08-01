import "./input.css";

function Input({
  placeholder,
  children,
  type,
  value,
  span = false,
  ikonka = false,
}) {
  return (
    <>
      <input
        type={type}
        className={`form-input ${span ? "span" : ""} ${ikonka ? "ikonka" : ""}`}
        placeholder={`${placeholder} ${span ? children : ""}`}
      />
    </>
  );
}

export default Input;
