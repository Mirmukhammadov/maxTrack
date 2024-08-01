import img from "../../assets/icons/Magnifer.svg";
import "./search.css";

export const Search = ({ placeholder, type, className }) => {
  return (
    <div className="search-div">
      <img src={img} className="search-img" />
      <input type={type} placeholder={placeholder} className="search-input" />
    </div>
  );
};

export default Search;
