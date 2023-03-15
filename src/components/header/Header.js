import "./header.css";
import Image from "../image/Image";
const Header = () => {
  return (
    <div className="cover-container">
      <div className="cover-heading">
        <h1>The Optimal Hire For Your Organization's Needs.</h1>
        <h4>From STEADFAST</h4>
        <span className="serv">
          Virtual Assistant Services, Consulting, Business Development
        </span>
        <span className="lastLine">
          Achieve more. Advanced staffing through STEADFAST.
        </span>
      </div>
      <Image imgName={"steadfast-cover.png"} className="cover" />
    </div>
  );
};

export default Header;
