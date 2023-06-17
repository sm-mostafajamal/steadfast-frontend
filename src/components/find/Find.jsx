import { ImSearch } from "react-icons/im";
import "./find.css";
import { searchValue } from "../../redux/filterReducer";
import { useDispatch } from "react-redux";

const Find = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const content = e.target.value;
    dispatch(searchValue(content));
  };
  return (
    <div className="search">
      <div>
        <ImSearch className="searchIcon" />
      </div>
      <form className="searchBox">
        <input
          type="text"
          onChange={handleChange}
          name="job"
          list="jobnames"
          placeholder="Search"
        />
        {/* <datalist id="jobnames">
          <option value="Principal Python Automation Engineer" />
          <option value="Mainframe Performance Engineer" />
          <option value="Public Cloud Operations Engineer " />
          <option value="Account Executive Senior" />
        </datalist> */}
      </form>
    </div>
  );
};

export default Find;
