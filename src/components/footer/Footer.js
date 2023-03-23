import {
  FaAngleDoubleRight,
  FaFacebookSquare,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";
import Flag from "react-world-flags";
import { BsTelephoneFill } from "react-icons/bs";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="steadfastMain">
        <span>Click to Visit</span>
        <Link to="https://www.steadfastints.com/" target="_blank">
          Steadfast International Services, LLC
        </Link>
      </div>
      <div className="footerWrapper">
        <div className="about">
          <div className="aDetails">
            <div className="steadfastLogo-container">
              <img
                src={`${process.env.PUBLIC_URL}/steadfast_images/steadfast-logo-withoutTxt.png`}
                alt="steadfast communication logo"
                className="steadfast-logo"
              />
              <h3>STEADFAST COMMUNICATIONS</h3>
            </div>
            <article>
              Steadfast Communications is the sister concern of
              <Link
                to="https://www.steadfastints.com/"
                className="steadfastLink"
              >
                Steadfast International Services, LLC.
              </Link>
              Which is the leading talent acquisition platform that delivers top
              candidates to enterprises by leveraging thelargest community of
              recruiters and sourcing technology platforms. Companies receive
              ready-to-hire candidates quickly and efficiently while
              streamlining their recruiting efforts. Steadfast International
              Services is tech-enabled solutions that include Direct Hire,
              Contingent Hire, as well as Agency Management.
            </article>
          </div>
          <div className="address">
            <h3>Office Addresses</h3>
            <div>
              <Flag code="us" height="20" className="flagIcon" />
              <span>
                733 3rd Ave, Floor 16 #1029, New York, NY 10017, United States
              </span>
            </div>
            <div>
              <Flag code="bd" height="22" className="flagIcon" />
              <span>
                Dhaka Uddan, Adabor, Mohammadpur, Dhaka 1207, Bangladesh
              </span>
            </div>
          </div>
        </div>
        <div className="openningHours">
          <h3>Opening Hours</h3>
          <ul>
            <li>
              <FaAngleDoubleRight className="openningIcon" />
              <span>
                <strong>Monday-Friday:</strong> 8am-6pm
              </span>
            </li>
            <li>
              <FaAngleDoubleRight className="openningIcon" />
              <span>
                <strong>Saturday-Sunday:</strong> Closed
              </span>
            </li>
            <li>
              <FaAngleDoubleRight className="openningIcon" />
              <span>
                <strong>Email:</strong> Info@steadfastints.com
              </span>
            </li>
            <li>
              <FaAngleDoubleRight className="openningIcon" />
              <span>
                <strong>US Office Phone 1:</strong> +1 929-567-2541
              </span>
            </li>
            <li>
              <FaAngleDoubleRight className="openningIcon" />
              <span>
                <strong>US Office Phone 2:</strong> +1 929-567-2540
              </span>
            </li>
            <li>
              <FaAngleDoubleRight className="openningIcon" />
              <span>
                <strong>Bangladesh Office Phone:</strong> +880 132-540-9732
              </span>
            </li>
          </ul>
          <div className="follow">
            <h3>Stay Connected!</h3>
            <ul>
              <li>
                <Link to="https://www.linkedin.com/company/steadfast-communications/">
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
        </div>
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
