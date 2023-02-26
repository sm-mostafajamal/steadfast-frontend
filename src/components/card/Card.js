import "./card.css";
import {
  FaDollarSign,
  FaLocationArrow,
  FaStar,
  FaUserClock,
  FaArrowRight,
} from "react-icons/fa";

const Card = ({ job }) => {
  return (
    <div className="cardContainer">
      <h1 className="cardTitle">{job.title}</h1>
      <div className="card">
        <div className="cardItem">
          <FaStar className="cardIcon" />
          <span className="title">Skills</span>
          <br />
          <span className="cardDetails skills">{job.skills}</span>
        </div>
        <div className="cardItem">
          <FaLocationArrow className="cardIcon" />
          <span className="title">Location</span>
          <br />
          <span className="cardDetails">{job.location}</span>
        </div>
        <div className="cardItem">
          <FaDollarSign className="cardIcon" />
          <span className="title">Compensation</span> <br />
          <span className="cardDetails">{job.compensation}</span>
        </div>
        <div className="cardItem">
          <FaUserClock className="cardIcon" />
          <span className="cardDetails">{job.jobNature}</span>
        </div>
      </div>
      <div className="detailsBtn">
        <button>
          Details
          <FaArrowRight className="detailsArrow" />
        </button>
      </div>
    </div>
  );
};

export default Card;
