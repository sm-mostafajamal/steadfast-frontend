import "./home.css";
import Header from "../../components/header/Header";
import Search from "../../components/search/Search";
import Featured from "../../components/featured/Featured";
import { FaAngleDoubleRight, FaLongArrowAltRight } from "react-icons/fa";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <Search />
        <h1 className="ftitle">
          Our Latest
          <br />
          Jobs
          <FaAngleDoubleRight className="longArrow" />
        </h1>
        <Featured />
      </main>
    </div>
  );
};

export default Home;
