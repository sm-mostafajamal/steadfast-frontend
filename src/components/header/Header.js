import Announcement from "../announcement/Announcement";
import "./header.css";
const Header = () => {
  return (
    <div className="cover-container">
      <div className="cover">
        <Announcement />
        <div className="cover-heading">
          <h1>The Optimal Hire For Your Organization's Needs.</h1>
          <h4>From STEADFAST.</h4>
          <span className="serv">
            Virtual Assistant Services, Consulting, Business Development
          </span>
          <span className="lastLine">
            Achieve more. Advanced staffing through STEADFAST.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
