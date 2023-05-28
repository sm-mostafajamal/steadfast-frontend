import "./card.css";
import {
  FaDollarSign,
  FaLocationArrow,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";
import Parser from "html-react-parser";
import { Link } from "react-router-dom";

const Card = ({ job }) => {
  console.log(job);
  return (
    <div className="cardContainer">
      <h1 className="cardTitle">{job.title}</h1>
      <div className="card">
        <div className="cardItem">
          <FaLocationArrow className="cardIcon" />
          <span className="title">Location</span>
          <br />
        </div>
        <span className="cardDetails location">{job.location}</span>
        <div className="cardItem">
          <FaDollarSign className="cardIcon" />
          <span className="title">Compensation</span> <br />
        </div>
        <span className="cardDetails">{job.compensation}</span>
        <div className="cardItem">
          <FaStar className="cardIcon" />
          <span className="title">Description</span> <br />
        </div>
        <span className="cardDetails desc">{Parser(job.desc)}</span>
      </div>
      <div className="detailsBtn">
        <Link to={`/apply/${job.id}`}>
          <button>
            Details
            <FaArrowRight className="detailsArrow" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
