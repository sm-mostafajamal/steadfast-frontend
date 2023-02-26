import Find from "../find/Find";
import "./search.css";

const Search = () => {
  return (
    <div className="searchContainer">
      <div className="searchMenu">
        <ul>
          <li className="menuItem">Marketing</li>
          <li className="menuItem">Technology</li>
          <li className="menuItem">Sales</li>
          <li className="menuItem">Engineering</li>
        </ul>
      </div>
      <Find />
    </div>
  );
};

export default Search;
