import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="cover-text">
        <h1>
          Where you want to go <br></br> next on your career <br></br> path?
        </h1>
        <p>WE CONNECT TALENTED PEOPLE WITH GREAT COMPANIES.</p>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/steadfast_images/steadfast-cover.png`}
        alt=""
        className="cover"
      />
      <form className="form">
        <h2>Find a job in:</h2>
        <div className="job-menu">
          <Link>Marketing</Link>
          <Link>Technology</Link>
          <Link>Sales</Link>
          <Link>Engineering</Link>
        </div>
        <div className="search-container">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type={"search"} className="search" placeholder="Search" />
        </div>
      </form>
      <h1>Home page</h1>
    </div>
  );
};
export default Home;
