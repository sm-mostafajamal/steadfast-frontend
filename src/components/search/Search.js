import "./search.css";
import { ImSearch } from "react-icons/im";

const Search = () => {
  return (
    <div className="searchContainer">
      <div>
        <h1>Find a Job In:</h1>
      </div>
      <div className="searchMenu">
        <ul>
          <li className="menuItem">Marketing</li>
          <li className="menuItem">Technology</li>
          <li className="menuItem">Sales</li>
          <li className="menuItem">Engineering</li>
        </ul>
      </div>
      <div className="search">
        <div className="searchIcon">
          <ImSearch />
        </div>
        <div className="searchBox">
          <input type="text" name="" id="" placeholder="Search" />
        </div>
      </div>
    </div>
  );
};

export default Search;
