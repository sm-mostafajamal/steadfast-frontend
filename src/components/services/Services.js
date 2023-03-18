import { FaCheck } from "react-icons/fa";
import "./services.css";
import Image from "../image/Image";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="service-container">
      <div className="serviceWrapper">
        <div className="for-jobseekers">
          <div className="jsDetails">
            <h1>FOR JOBSEEKERS</h1>
            <h4>We’re Here To Help You Find Work</h4>
            <p>
              Our Talent Acquisition agents can work together with you, and
              discuss opportunities with the best companies in the market. There
              are on-site and remote opportunities that you can choose from.
              Join our growing network of professionals and contact us today.
            </p>
            <Link to="/jobs">
              <button> VIEW ALL JOBS</button>
            </Link>
          </div>
          <div className="jsCover">
            <Image imgName={"jsCover.jpg"} className="jsImg" />
          </div>
        </div>
        <div className="for-employers">
          <div className="feCover">
            <Image imgName={"forEmployers.jpg"} className="feImg" />
          </div>
          <div className="feDetails">
            <h1>FOR EMPLOYERS</h1>
            <h4>Discover The Best Talent</h4>
            <p>
              Our industry development experts will understand your business
              needs and can connect you with the top talents to support your
              project and organizational needs on a temporary or long-term
              basis. Our professionals are available for on-site, hybrid, remote
              or work from home work all over the country. Contact us today to
              join our growing network of professionals.
            </p>
            <Link to="/employer">
              <button>EXPLORE MORE DETAILS</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="our-expertise">
        <div className="exDetails">
          <h4>OUR EXPERTISE</h4>
          <h1>Industries Served</h1>
          <p>
            Steadfast Communications is the sister concern of Steadfast
            International Services, LLC. Which is the leading talent acquisition
            platform that delivers top candidates to enterprises by leveraging
            thelargest community of recruiters and sourcing technology
            platforms. Companies receive ready-to-hire candidates quickly and
            efficiently while streamlining their recruiting efforts.
            SteadfastInternational Services is tech-enabled solutions that
            include Direct Hire, Contingent Hire, as well asAgency Management.
          </p>
          <ul>
            <li>
              <FaCheck className="exIcon" />
              <span>Financial Services</span>
            </li>
            <li>
              <FaCheck className="exIcon" />
              <span>Information Technology</span>
            </li>
            <li>
              <FaCheck className="exIcon" />
              <span>Manufacturing</span>
            </li>
            <li>
              <FaCheck className="exIcon" />
              <span>Life Sciences</span>
            </li>
            <li>
              <FaCheck className="exIcon" />
              <span>Engineering & Construction</span>
            </li>
            <li>
              <FaCheck className="exIcon" />
              <span>BPO & Shared Services</span>
            </li>
            <li>
              <FaCheck className="exIcon" />
              <span>Medical and many more</span>
            </li>
          </ul>
        </div>
        <div className="exCover">
          <Image imgName={"ourExpertise.jpg"} className="exImg" />
        </div>
      </div>
    </div>
  );
};

export default Services;
