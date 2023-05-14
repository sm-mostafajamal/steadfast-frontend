import "./home.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import Services from "../../components/services/Services";
import Footer from "../../components/footer/Footer";
import Assistance from "../../components/assistance/Assistance";
import Process from "../../components/process/Process";
import { Link } from "react-router-dom";
import Clients from "../../components/clients/Clients";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import { getJobs } from "../../server/requests";
import { useEffect } from "react";
import { appendJobs } from "../../redux/jobsReducer";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, data } = useQuery("jobs", getJobs, {
    retry: false,
    refetchOnWindowFocus: false,
  });
  useEffect(() => {
    if (data) {
      console.log(data);
      dispatch(appendJobs(data));
    }
  }, [data, dispatch]);
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
        <Clients />
        <Assistance />
        <div className="featuredContainer">
          <h1 className="ftitle">
            Our Latest Jobs
            <FaAngleDoubleRight className="longArrow" />
          </h1>
          {isLoading ? <span> Loading...</span> : <Featured />}
        </div>
        <Services />
        <Process />
        <div className="hireSteadfast">
          <p>
            The easiest thing for you to accomplish today <br /> is to get
            started.
          </p>
          <div className="buttons">
            <Link to="/applicant">
              <button>Applicant</button>
            </Link>
            <Link to="/hire-steadfast">
              <button>Hire STEADFAST</button>
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
