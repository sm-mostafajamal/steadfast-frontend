import {
  FaAngleDoubleRight,
  FaFacebookSquare,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footerWrapper">
        <div className="about">
          <div className="steadfastLogo-container">
            <img
              src={`${process.env.PUBLIC_URL}/steadfast_images/steadfast-logo-withoutTxt.png`}
              alt="steadfast communication logo"
              className="steadfast-logo"
            />
            <h3>STEADFAST COMMUNICATIONS</h3>
          </div>
          <article>
            Steadfast International Services is a technology-based recruitment
            organization. It is a principal of technology consulting and
            workforce management solutions Company, with city of heart offices
            in the New York, United States and Dhaka, Bangladesh. It provides
            recruitment services for Technology, Information Technology and
            Services (IT), Engineering, Technician, Finance, Administrative
            Professional, Telecommunications, Pharmaceutical and Life Sciences,
            Chemicals, Energy, Oil and Gas, Healthcare, Professionals and many
            more!
          </article>
        </div>
        <div className="openningHours">
          <h3>Opening Hours</h3>
          <ul>
            <li>
              <FaAngleDoubleRight className="openningIcon" />
              <span>Monday-Friday: 8am-6pm</span>
            </li>
            <li>
              <FaAngleDoubleRight className="openningIcon" />
              <span>Saturday-Sunday: Closed</span>
            </li>
            <li>
              <FaAngleDoubleRight className="openningIcon" />
              <span>Email: Info@steadfastints.com</span>
            </li>
            <li>
              <FaAngleDoubleRight className="openningIcon" />
              <span>US Office Phone 1: +1 929-567-2541</span>
            </li>
            <li>
              <FaAngleDoubleRight className="openningIcon" />
              <span>US Office Phone 2: +1 929-567-2540</span>
            </li>
            <li>
              <FaAngleDoubleRight className="openningIcon" />
              <span>Bangladesh Office Phone: +880 132-540-9732</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="follow">
        <h3>Stay Connected!</h3>
        <ul>
          <li>
            <Link to="https://www.linkedin.com/company/steadfastllc">
              <FaLinkedin />
            </Link>
          </li>
          <li>
            <Link to="https://www.facebook.com/Steadfast-International-Services-109044021870409/">
              <FaFacebookSquare />
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <FaMailBulk />
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <BsTelephoneFill />
            </Link>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <span>
          Copyright ©2023, Steadfast International Services, LLC. All rights
          reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
