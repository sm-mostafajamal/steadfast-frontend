import "./home.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import Services from "../../components/services/Services";
import Footer from "../../components/footer/Footer";
import Assistance from "../../components/assistance/Assistance";
import Process from "../../components/process/Process";
import { Link } from "react-router-dom";

const Home = ({ data }) => {
  return (
    <div className="home">
      <header>
        <Header />
      </header>
      <main>
        {/* <div className="findJob">
          <h1>Find a Job In:</h1>
        </div>
        <Search /> */}
        <Assistance />
        <div className="featuredContainer">
          <h1 className="ftitle">
            Our Latest Jobs
            <FaAngleDoubleRight className="longArrow" />
          </h1>
          <Featured data={data} />
        </div>
        <Services />
        <Process />
        <div className="hireSteadfast">
          <p>
            The easiest thing for you to accomplish today is to get started.
          </p>
          <div className="buttons">
            <Link to="/applicant">
              <button>Applicant</button>
            </Link>
            <Link to="/hire-steadfast">
              <button>Hire STEADFAST</button> {/* for employer */}
            </Link>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
