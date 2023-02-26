import { ImSearch } from "react-icons/im";
import "./find.css";
const Find = () => {
  return (
    <div className="search">
      <div className="searchIcon">
        <ImSearch />
      </div>
      <form className="searchBox">
        <input type="text" name="job" list="jobnames" placeholder="Search" />
        <datalist id="jobnames">
          <option value="Principal Python Automation Engineer" />
          <option value="Mainframe Performance Engineer" />
          <option value="Public Cloud Operations Engineer " />
          <option value="Account Executive Senior" />
        </datalist>
      </form>
    </div>
  );
};

export default Find;
