import { ImSearch } from "react-icons/im";
import "./find.css";
import { searchValue } from "../../redux/filterReducer";
import { useDispatch, useSelector } from "react-redux";

const Find = () => {
  const jobs = useSelector(({ jobs }) => jobs);
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
        <datalist id="jobnames">
          {jobs.map((job) => (
            <option value={job.title} key={job.id} />
          ))}
        </datalist>
      </form>
    </div>
  );
};

export default Find;
