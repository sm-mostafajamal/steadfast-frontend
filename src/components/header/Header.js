import "./header.css";
import Image from "../image/Image";
// import { slide as Menu } from "react-burger-menu";
const Header = () => {
  return (
    <div className="cover-container">
      <div className="cover-heading">
        <h1>Where you want to go next on your career path?</h1>
        <h4>WE CONNECT TALENTED PEOPLE WITH GREAT COMPANIES.</h4>
      </div>
      <Image imgName={"steadfast-cover.png"} className="cover" />
      {/* <Menu>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
      </Menu> */}
    </div>
  );
};

export default Header;
