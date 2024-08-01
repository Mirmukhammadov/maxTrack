import "./button.css";

export default function Button({
  children,
  icon,
  active,
  secondary,
  onClick,
  third,
  formButton,
  addDriver,
  plusButton,
}) {
  return (
    <>
      <button
        onClick={onClick}
        className={`button ${active ? "active" : ""} ${
          secondary ? "secondary" : ""
        } ${third} ${formButton ? "formButton" : ""} ${
          addDriver ? "addDriver" : ""
        } ${plusButton ? "plusButton" : ""}`}
      >
        <img src={icon} alt="" />
        {children}
      </button>
    </>
  );
}
