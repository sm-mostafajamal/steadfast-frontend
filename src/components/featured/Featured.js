import data from "../../data";
import "./featured.css";
import Card from "../card/Card";

const Featured = () => {
  return (
    <div className="featuredJobs">
      <div className="cards">
        {data.slice(0, 4).map((job) => (
          <Card job={job} key={job.id} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
