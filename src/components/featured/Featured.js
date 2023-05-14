import "./featured.css";
import Card from "../card/Card";
import { useSelector } from "react-redux";

const Featured = () => {
  const jobs = useSelector(({ jobs }) => jobs);
  return (
    <div className="featuredJobs">
      <div className="cards">
        {jobs.slice(0, 4).map((job) => (
          <Card job={job} key={job.id} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
