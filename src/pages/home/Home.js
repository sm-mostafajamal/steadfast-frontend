import "./home.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import Header from "../../components/header/Header";
import Search from "../../components/search/Search";
import Featured from "../../components/featured/Featured";
import Services from "../../components/services/Services";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Search />
      <div className="featuredContainer">
        <h1 className="ftitle">
          Our Latest
          <br />
          Jobs
          <FaAngleDoubleRight className="longArrow" />
        </h1>
        <Featured />
      </div>
      <Services />
    </div>
  );
};

export default Home;
