import data from "../../data";
import "./featured.css";
import Card from "../Card/Card";

const Featured = () => {
  return (
    <div className="featuredJobs">
      <div className="cards">
        {data.map((job) => (
          <Card job={job} key={job.id} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
