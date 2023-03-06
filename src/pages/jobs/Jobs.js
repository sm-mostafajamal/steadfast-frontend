import "./jobs.css";
import Find from "../../components/find/Find";
import Footer from "../../components/footer/Footer";
import Card from "../../components/card/Card";
import Image from "../../components/image/Image";

import { FaAngleDoubleRight } from "react-icons/fa";
const Jobs = ({ data }) => {
  return (
    <div className="jobs-container">
      <div className="find-container">
        <div className="findWrapper">
          <h1>Find a job</h1>
          <h3>
            We’ll only present you with the right opportunities, for the right
            pay, whilst ensuring you get through interviews quickly and
            painlessly. <br /> <span>Start your job search below:</span>
          </h3>
          <Find />
        </div>
      </div>
      <div className="filter-container">
        <div className="filterWrapper">
          <div className="role-types">
            <div className="role-type">All</div>
            <div className="role-type">Remote</div>
            <div className="role-type">Hybrid</div>
            <div className="role-type">Permanent</div>
          </div>
          <div className="location-container">
            <form action="">
              {/* <label for="locations">Location</label> */}
              <select id="locations" name="locations" className="location">
                <option selected>Location</option>
                <option value="tampa">Tampa</option>
                <option value="dallas">Dallas</option>
                <option value="jersey-city">Jersey City</option>
                <option value="boston">Boston</option>
              </select>
            </form>
          </div>
        </div>
      </div>
      <div className="jobCards-container">
        {data.slice(0, 20).map((job) => (
          <Card job={job} key={job.id} />
        ))}
      </div>
      <div className="moreBtn">
        <button>
          More
          <FaAngleDoubleRight className="moreArrow" />
        </button>
      </div>
      <div className="specialism">
        <div className="spDetails">
          <h1>Specialisms</h1>
          <p>
            Any role that is emerging in the digital world is our area of
            expertise in recruiting. The market's biggest and most creative
            clients receive our services through our primary channels. Our
            clients range from independent start-ups to global powerhouses,
            covering both client side and agency.
          </p>
        </div>
        <Image imgName="specialism.jpg" className="spImg" />
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
