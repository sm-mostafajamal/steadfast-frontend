import "./home.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import Header from "../../components/header/Header";
import Search from "../../components/search/Search";
import Featured from "../../components/featured/Featured";
import Services from "../../components/services/Services";
import Footer from "../../components/footer/Footer";

const Home = ({ data }) => {
  return (
    <div className="home">
      <header>
        <Header />
      </header>
      <main>
        <div className="findJob">
          <h1>Find a Job In:</h1>
        </div>
        <Search />
        <div className="featuredContainer">
          <h1 className="ftitle">
            Our Latest Jobs
            <FaAngleDoubleRight className="longArrow" />
          </h1>
          <Featured data={data} />
        </div>
        <Services />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
