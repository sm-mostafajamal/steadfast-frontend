import "./header.css";
import Image from "../image/Image";
const Header = () => {
  return (
    <div className="cover-container">
      <div className="cover-heading">
        <h1>Where you want to go next on your career path?</h1>
        <h4>WE CONNECT TALENTED PEOPLE WITH GREAT COMPANIES.</h4>
      </div>
      <Image imgName={"steadfast-cover.png"} className="cover" />
    </div>
  );
};

export default Header;
