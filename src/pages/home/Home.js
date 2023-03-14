import "./home.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import Services from "../../components/services/Services";
import Footer from "../../components/footer/Footer";
import Announcement from "../../components/announcement/Announcement";
import Assistance from "../../assistance/Assistance";

const Home = ({ data }) => {
  return (
    <div className="home">
      <header>
        <Header />
        <Announcement />
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
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
