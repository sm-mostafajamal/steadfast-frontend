import "./header.css";
const Header = () => {
  return (
    <div>
      <div className="cover-heading">
        <h1>Where you want to go next on your career path?</h1>
        <h4>WE CONNECT TALENTED PEOPLE WITH GREAT COMPANIES.</h4>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/steadfast_images/steadfast-cover.png`}
        alt="Steadfast cover"
        className="cover"
      />
    </div>
  );
};

export default Header;
